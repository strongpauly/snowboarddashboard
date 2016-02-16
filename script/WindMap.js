(function(){

WindMap = function(location, width)
{
	this.location = location;
    this.zoom = 7;
    this.width = width;
    this.height = 200;
}

WindMap.prototype.render = function(parent)
{
	this.dom = $(this.getHtml());
	parent.append(this.dom);	
}


WindMap.prototype.getHtml = function()
{
	var html = [];
    if(!('ontouchstart' in window))
    {
    	html.push('<iframe class="windMapFrame" src="https://embed.windyty.com/?');
        html.push(this.location.latitude);
        html.push(',');
        html.push(this.location.longitude);
        html.push(',');
        html.push(this.zoom);
        html.push(',in:12,temp,marker,menu,message,metric.wind.km/h" ');
        html.push(' frameborder="0"></iframe>');
    }
	return html.join('');
}

WindMap.prototype.load = function()
{
    
}

})();


