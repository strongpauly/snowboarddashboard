(function(){

var millisInHour =  (1000 * 60 * 60);
var millisInDay =  (millisInHour * 24);

function formatDays(millisDiff, timeDiff)
{
	var hours= (millisDiff/ millisInHour) - timeDiff;
	var days = Math.floor(hours / 24);
	return days + ' days, ' + formatHours(millisDiff - (days * millisInDay), timeDiff);
}

function formatHours(millisDiff, timeDiff)
{
	var hours= (millisDiff/ millisInHour) - timeDiff;
	var mins = (hours % Math.max(1, Math.floor(hours))) * 60;
	var secs = (mins % Math.max(1, Math.floor(mins))) * 60;
	var millis = Math.floor((secs % Math.max(1, Math.floor(secs))) * 100);
	return Math.floor(hours) + ' hours, ' + padTime(mins) + ' minutes and ' + padTime(secs) + (withMillis ? '.' + padTime(millis) : '') + '  seconds';
}

function formatMinutes(millisDiff, timeDiff)
{
	var hours= (millisDiff/ millisInHour) - timeDiff;
	var mins = hours * 60;
	var secs = (mins % Math.max(1, Math.floor(mins))) * 60;
	var millis = Math.floor((secs % Math.max(1, Math.floor(secs))) * 100);
	return comma(mins) + ' minutes and ' + padTime(secs) + (withMillis ? '.' + padTime(millis) : '') + ' seconds';
}

function formatSeconds(millisDiff, timeDiff)
{
	var hours= (millisDiff/ millisInHour) - timeDiff;
	var secs = hours * 60 * 60;
	var millis = Math.floor((secs % Math.max(1, Math.floor(secs))) * 100);
	return comma(secs) + (withMillis ? '.' + padTime(millis) : '') + ' seconds';
}

function padTime(t)
{
	var tf = '' + Math.floor(t);
	if(tf.length == 1)
	{
		tf = '0' + tf
	}
	return tf;
}

function comma(number) 
{
	number = '' + Math.floor(number);
	if (number.length > 3) 
	{
		var mod = number.length % 3;
		var output = (mod > 0 ? (number.substring(0,mod)) : '');
		for (var i=0 ; i < Math.floor(number.length / 3); i++) {
			if ((mod == 0) && (i == 0))
				output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
			else
				output+= ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
		}
		return (output);
	}
	else return number;
}


Date.prototype.timeUntilDays = function(target, offset)
{
	return formatDays(target - this, offset);
}

Date.prototype.timeUntilHours = function(target, offset)
{
	return formatHours(target - this, offset);
}

Date.prototype.timeUntilMinutes = function(target, offset)
{
	return formatMinutes(target - this, offset);
}

Date.prototype.timeUntilSeconds = function(target, offset)
{
	return formatSeconds(target - this, offset);
}

Date.prototype.toTimeString = function()
{
	return padTime(this.getHours()) + ":" + padTime(this.getMinutes())
}


Date.prototype.toDateString = function ()
{
	return padTime(this.getDate()) + '-' + padTime(this.getMonth() + 1) + '-' + this.getFullYear();
}

Date.prototype.toDateTimeString = function()
{
	return this.toDateString() + ' ' + this.toTimeString();
}

Date.prototype.addHours = function(hours)
{
	return new Date(this.getTime() + (millisInHour * hours))
}

})();