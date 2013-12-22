(function(){


Destination = function(country, resort, flight, board, timeOffset, webcams, snowreports, maps, end, forecasts)
{
	this.country = country;
	this.resort = resort;
	this.flight = flight;
	this.board = board;
	this.offset = timeOffset;
	this.webcams = webcams;
	this.snowreports = snowreports;
	this.maps = maps;
	this.end = end;
	this.forecasts = forecasts;
}

Destination.prototype.render = function(parent)
{
	this.dom = $(this.getHtml());
	parent.append(this.dom);	
}

Destination.prototype.update = function(now)
{
	var localTime = now.addHours(this.offset);
	$('.localTime', this.dom).html(localTime.toTimeString());
	var end = this.end;
	function getTimeHtml(date, offset, flight)
	{
		if(date < now)
		{
			var message;
			var during = end > now;
			if(flight)
			{
				message = during ? "You've arrived.  Get boarding!" : "It's over :( Whens the next trip?"; 
			}
			else			
			{
				message = during ? "You're there!  Hope you're having fun!" : "It's over :( Whens the next trip?"; 
			}
			return '<div class="pastEvent">'+message+'</div>'
		}
		return 	 '<div class="timeDays">' + now.timeUntilDays(date, offset) + '</div>'
			+'<div class="timeHours">' + now.timeUntilHours(date, offset) + '</div>'
			+'<div class="timeMinutes">' + now.timeUntilMinutes(date, offset) + '</div>'
			+'<div class="timeSeconds">' + now.timeUntilSeconds(date, offset) + '</div>';
	}
	
	$('.flightTime', this.dom).html(getTimeHtml(this.flight, 0, true));	
	$('.boardTime', this.dom).html(getTimeHtml(this.board, this.offset, false));
}

Destination.prototype.getHtml = function()
{
	var html = ['<div class="'];
	if(this.maps != null)
	{
		html.push('destination-map');
	}
	else
	{
		html.push('destination');
	}
	html.push('"><div class="times"><h2>');		
	html.push((this.resort != null ? this.resort + ', ' + this.country : this.country) + ' (<span class="localTime"></span>)');	
	html.push('</h2><h3>Flight: ' + this.flight.toDateTimeString() + '</h3>'
		+'<div class="flightTime"></div>'
		+'<h3>Snowboarding: '+this.board.toDateTimeString()+'</h3>'
		+'<div class="boardTime"></div>');		
	if(this.maps != null)
	{
		html.push('<h3>Maps</h3>');
		html.push('<div class="maps">');
		for (var i=0; i<this.maps.length; i++)
		{
			html.push(this.maps[i].getHtml());
		}
		html.push('</div>');
	}
	if(this.webcams != null)
	{		
		html.push('<h3>Web Cams</h3>');
		html.push('<div class="webcams">');
		for(var i=0; i<this.webcams.length; i++)
		{
			html.push(this.webcams[i].getHtml());
		}
		html.push('</div>');
	}
	if(this.forecasts != null)
	{
		html.push('<h3>Long range forecasts</h3>');
		html.push('<div class="webcams">');
		for(var i=0; i<this.forecasts.length; i++)
		{
			html.push(this.forecasts[i].getHtml());
		}
		html.push('</div>');
	}

	html.push('</div>');
	if(this.snowreports != null && this.snowreports.length > 0)
	{
		html.push('<div class="snowreports">');
		for (var i=0; i<this.snowreports.length; i++)
		{
			html.push('<span class="snowreport"><iframe src="'+this.snowreports[i]+'"></iframe></span>');
		}
		html.push('</div>');
	}
	html.push('</div>')
	return html.join('');
}
})();