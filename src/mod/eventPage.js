function rerender(evt, coll){
	const [events] = coll.range()
	this.el.innerHTML = this.deps.tmpl({events})
}

return {
	deps: {
		events: 'models'
	},
	create: function callee(deps, params){
		deps.events.callback.on('*', rerender, this)
		deps.events.list()
		callee.prototype.call(this, deps, params)
	},
	remove(){
		this.deps.events.callback.off('*', rerender, this)
		this.super.remove.call(this)
	}
}
