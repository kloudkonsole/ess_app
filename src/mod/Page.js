return {
	signals: ['menuList'],
	deps: {
		tmpl: 'file',
		menu: 'list'
	},
	create(deps, params){
		this.el.innerHTML = deps.tmpl({})
		this.signal.menuList(deps.menu).send()
	}
}
