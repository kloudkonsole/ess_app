const router = require('po/router')

function contentChanged(evt, keys, params){
	if (!keys) keys = this.deps.auth.length() ? ['menu', 'home'] : [null, 'login']
	const [show, page] = keys
	this.signal.visible('menu' === show).send([this.host])
	this.signal.loadPage(page).send()//this.findModule('content'))
}

return {
	signals: ['visible', 'loadPage'],
	deps: {
		auth: 'models',
		backend: 'map',
		routes: 'map',
		pages: 'map',
		menu: 'View',
		content: 'View'
	},
	create(deps, params){
		this.super.create.call(this, deps, params)

		const authCB = deps.auth.callback
		authCB.on('error', () => {
			router.go('/login')
		})
		authCB.on('login', () => {
			router.go('/home')
		})
	},
	slots: {
		pageReady(from, sender){
			const {routes, backend} = this.deps
			router.on('change', contentChanged, this).start(routes, backend.root)
		}
	}
}
