(function(){

Link = function(url, label)
{
	this.url = url;
	this.label = label;
}

Link.prototype.render = function(parent){

	parent.append(this.getHtml());
}

Link.prototype.getHtml = function()
{
	return '<span><a href="#" onclick="window.open(\'' + this.url + '\');">' + this.label + '</a></span>';
}

})();