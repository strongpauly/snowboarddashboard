(function(){

Screenshot = function(url, title, width, height)
{
	this.url = url;
	this.title = title;
	this.width = width;
	this.height = height;
}

Screenshot.prototype.render = function(parent){

	parent.append(this.getHtml());
}

Screenshot.prototype.getHtml = function()
{
	return '<div class="preview"><img src="'+this.url+'"/></div>';
}

Screenshot.prototype.open = function()
{
	$(this.getHtml()).dialog({title: this.title, height:this.height + 44, width:this.width + 34});
}
})();