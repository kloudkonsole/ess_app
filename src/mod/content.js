const specMgr = require('p/specMgr')

return {
	signals: ['pageReady'],
	deps: {
		pages: 'map',
	},
	create(deps, params){
		const rawSpec = []
		const keys = Object.keys(deps.pages)
		for (let i=0, k; (k=keys[i]); i++){
			rawSpec.push(deps.pages[k])
		}

		const specMap = this.specMap = {}
		specMgr.load(this, params, rawSpec, (err, spec)=>{
			for (let i=0, k; (k=keys[i]); i++){
				specMap[k]=spec.shift()
			}
			this.signal.pageReady().send(this.host)
		})
	},
	slots: {
		loadPage(from, sender, key){
			const spec = this.specMap[key]
			this.clear()
			this.spawn(spec)
		}
	}
}
