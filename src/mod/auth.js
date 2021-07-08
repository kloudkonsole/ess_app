const OFFSET = 1000 * 60
const ID = 0
const mode = 'json'
const OPT = {
	headers: {
		'Content-Type': 'application/json'
	}
}

function refresh(ctx, model, cb){
	const body = { refresh_token: model.refresh_token }
	pico.ajax('POST', `${ctx.domain}/auth/refresh`, body, OPT, (err, state, xhr) => {
		if (4 !== state) return
		if (err) return error(ctx, err, cb)
		try {
			const {data} = JSON.parse(xhr)
			model.access_token = data.access_token
			model.refresh_token = data.refresh_token
			model.expires = Date.now() + data.expires
		} catch (ex) {
			return error(ctx, ex, cb)
		}
		cb(null, model.access_token)
	})
}

function getToken(ctx, cb){
	const model = ctx.get(ID)
	if (model.expires > (Date.now() + OFFSET)) return cb(null, model.access_token)

	if (model.refresh_token) return refresh(ctx, model, cb)

	login(ctx, model, cb)
}

function request(method, url, body, opt, cb){
	getToken(this, (err, access_token) => {
		if (err) return cb(err)

		const headers = Object.assign({}, opt || {}, {
			headers: {
				Authorization: 'Bearer ' + access_token
			}, OPT
		})

		pico.ajax(method, `${this.domain}${url}`, body, headers, (err, state, xhr) => {
			if (4 !== state) return
			if (err) return cb(err)
			try {
				var {data} = JSON.parse(xhr)
			} catch (ex) {
				return cb(ex)
			}
			cb(null, data)
		})
	})
}

function error(ctx, err, cb){
	ctx.callback.trigger('error', err)
	cb && cb(err)
}

return {
	init(deps){
		this.domain = deps.backend.domain
	},

	login(payload){
		pico.ajax('POST', `${this.domain}/auth/login`, Object.assign(payload, {mode}), OPT, (err, state, xhr) => {
			if (4 !== state) return
			if (err) return error(this, err)
			try {
				const {data} = JSON.parse(xhr)
				this.set({
					id: ID,
					access_token: data.access_token,
					refresh_token: data.refresh_token,
					expires: Date.now() + data.expires
				})
				this.callback.trigger('login', this, ID)
			} catch (ex) {
				return error(this, ex)
			}
		})
	},

	request
}
