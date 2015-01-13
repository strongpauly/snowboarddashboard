(function(w){

var cls = w.WebServiceSnowReport =
function(name, url)
{
	this.name = name;
    this.id = "weather2Report_" + name;
	this.url = url;	
}

cls.prototype.render = function(parent)
{
	this.dom = $(this.getHtml());
	parent.append(this.dom);	    
}

cls.prototype.getHtml = function()
{
	var html = ['<span class="weather2Report" id="']
    html.push(this.id);
    html.push('"></span>');    
	return html.join('');
}

cls.prototype.load = function()
{
    jQuery.ajax(this.url, 
    {
        dataType:"jsonp",
        type:"GET",
        //ifModified:true,
        //jsonp:false,
        cache:true,
        jsonpCallback : function(){},
        success: function(data, status, jqXHR){
           $('#' + this.id).html(data);

        }
    });
}
})(window);