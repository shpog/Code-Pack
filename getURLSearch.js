function getURLSearch(){
	if(window.location.search == '')
		return undefined
	let q = window.location.search.replace('?','')
	let r = {}
	for(let i of q.split('&')){
		j = i.split('=')
		r[j[0]] = j[1]
	}
	return r
}
