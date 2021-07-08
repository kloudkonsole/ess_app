const router = require('po/router')

return {
	deps: {
		tmpl: 'file'
	},
	create(deps, params){
		this.items = []
	},
	slots: {
		visible(from, sender, show){
			if (show) return this.el.classList.remove('hidden')
			this.el.classList.add('hidden')
		},
		menuList(from, sender, items){
			this.items = items
			this.el.innerHTML = this.deps.tmpl({menu: items})
		},
	},
	events: {
		'click a': function(evt, target){
			evt.preventDefault()
			const name = target.id
			const sel = this.items.find(item => item.name === name)
			router.go(sel.router)
		}
	}
}
