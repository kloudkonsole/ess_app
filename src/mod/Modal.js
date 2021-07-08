return {
	deps: {
		tmpl: 'file',
		title: 'text',
		Form: 'view',
		buttons: 'list',
		auth: 'models'
	},
	create(deps, params){
		this.el.innerHTML = deps.tmpl({
			hasHeader: !!deps.title,
			title: deps.title,
			hasFooter: true
		})
	},
	events: {
		'click button[type=submit]': function(evt, ele){
			evt.preventDefault()
			const form = this.el.querySelector('form')
			if (!form.reportValidity()) return
			this.deps.auth.login(__.formdata2json(form))
		}
	}
}
