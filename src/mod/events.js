return {
	init(deps){
		this.auth = deps.auth
		this.cache = null
	},
	list(){
		this.auth.request('GET', '/items/event', {fields: '*%2Cattach.*'}, null, (err, data) => {
			if (err) return this.callback.trigger('error', err)
			this.set(data)
		})
	},
}
