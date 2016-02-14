(function(){


Destination = function(country, resort, timeOffset, webcams, snowreports, maps, forecasts, location)
{
	this.country = country;
	this.resort = resort;
	this.offset = timeOffset;
	this.webcams = webcams;
	this.snowreports = snowreports;
	this.maps = maps;
	this.forecasts = forecasts;
	this.location = location;
	if(this.location)
	{
		this.windMap = new WindMap(location, 300 * (snowreports ?  snowreports.length : 0 ))
	}
}

})();