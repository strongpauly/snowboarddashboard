(function(){


SnowReport = function(name, url)
{
	this.name = name;
	this.url = url;	
}

SnowReport.prototype.render = function(parent)
{
	this.dom = $(this.getHtml());
	parent.append(this.dom);	
}


SnowReport.prototype.getHtml = function()
{
	var html = ['<span class="snowreport">']
    html.push('<h3>');
    html.push(this.name);
    html.push('</h3>');
    html.push('<iframe src="');
    html.push(this.url);
    html.push('"></iframe></span>');
    
	return html.join('');
}
})();