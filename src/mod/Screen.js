return {
	deps: {
		backend: 'map',
		wallpaper: 'text',
	},
	create(deps, params){
		this.super.create.call(this, deps, params)
		this.el.style.backgroundImage = `url(${deps.backend.root}${deps.wallpaper})`
	}
}
