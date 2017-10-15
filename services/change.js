
// 2- Determine past blocks for 5minute and 1hour intervals
// If at start of the hour - set becnhmark to be 55m from last hour
function roundTheClockMinutes(time){
	if(time<0){return time+60;}
	return time;
}
function roundTheClockHours(time){
	if(time<0){return time+24;}
	return time;
}
var pastBlock5m=roundTheClockMinutes(currentBlock5m-5);
var pastBlock1h=roundTheClockHours(currentBlock1h-1);

// 3- Request to get past blocks
SELECT * FROM table WHERE id='BTCUSD'+pastBlock5m OR id='BTCUSD'+pastBlock1h 

var past={query result};

// 4- Compute percent change and look for patterns
// 4a - Compute percent change
var pctChange5min=(current.price-past.5mprice)/past.5mprice;
var pctChange10min=...
var pctChange15min=...
var pctChange1h=...
var pctChange2h=...
var pctChange3h=...
var pctChange6h=...
var pctChange12h=...
var pctChange24h=...

// 4b- Look for patterns
// 10%+ decrease within 5min
if(pctChange5min<-0.1){

}
// 10%+ increase within 5min
if(pctChange5min>0.1){

}

