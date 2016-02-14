(function(){

Location = function(latitude, longitude)
{
	this.latitude = latitude;
	this.longitude = longitude;
}

Location.prototype.toString = function()
{
	return this.longitude + ',' + this.latitude;
}

})();
