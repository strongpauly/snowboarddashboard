(function(){


Trip = function(destination, name, resort, flight, board, end)
{
	this.destination = destination;
	this.name = name;
	this.resort = resort;
	this.flight = flight;
	this.board = board;
	this.end = end;
}

Trip.prototype.render = function(parent, now)
{
	this.dom = $(this.getHtml(now));
	parent.append(this.dom);
    if(this.destination.snowreports != null)
    {
        for(var i=0; i<this.destination.snowreports.length; i++)
        {
            var report = this.destination.snowreports[i];
            report.load();
        }
    }
}

Trip.prototype.isOver = function(now) 
{
    return this.end < now;
}

Trip.prototype.update = function(now)
{
    if(!this.isOver(now))
    {
        var localTime = now.addHours(this.destination.offset);
        $('.localTime', this.dom).html("(" + localTime.toTimeString() + ")");
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
        $('.boardTime', this.dom).html(getTimeHtml(this.board, this.destination.offset, false));
    }
}

Trip.prototype.getHtml = function(now)
{
    //Hide if the trip is over.
    if( this.isOver(now) )
    {
        return '';
    }    
	var html = ['<div class="'];
	var destination = this.destination;
	if(destination.maps != null)
	{
		html.push('destination-map');
	}
	else
	{
		html.push('destination');
	}
	html.push('"><div class="times"><h2>');	
	html.push('<div class="trip-name">');
	html.push(this.name);
	html.push('</div>');	
	html.push('<div class="resort">');
	//Fallback to destination resort if not specified.
	html.push(this.resort != null ? this.resort : (destination.resort != null ? destination.resort + ', ' + destination.country : destination.country));
	html.push('</div>');
	html.push('<span class="localTime"></span>');	
	html.push('</h2><h3>Flight: ' + this.flight.toDateTimeString() + '</h3>'
		+'<div class="flightTime"></div>'
		+'<h3>Snowboarding: '+this.board.toDateTimeString()+'</h3>'
		+'<div class="boardTime"></div>');		
	if(destination.maps != null)
	{
		html.push('<h3>Maps</h3>');
		html.push('<div class="maps">');
		for (var i=0; i<destination.maps.length; i++)
		{
			html.push(destination.maps[i].getHtml());
		}
		html.push('</div>');
	}
	if(destination.webcams != null)
	{		
		html.push('<h3>Web Cams</h3>');
		html.push('<div class="webcams">');
		for(var i=0; i<destination.webcams.length; i++)
		{
			html.push(destination.webcams[i].getHtml());
		}
		html.push('</div>');
	}
	if(destination.forecasts != null)
	{
		html.push('<h3>Long range forecasts</h3>');
		html.push('<div class="webcams">');
		for(var i=0; i<destination.forecasts.length; i++)
		{
			html.push(destination.forecasts[i].getHtml());
		}
		html.push('</div>');
	}

	html.push('</div>');
	if(destination.snowreports != null && destination.snowreports.length > 0)
	{
		html.push('<div class="snowreports">');
		for (var i=0; i<destination.snowreports.length; i++)
		{
			html.push(destination.snowreports[i].getHtml());
		}
		html.push('</div>');
	}
	html.push('</div>')
	return html.join('');
}
})();