// ***** Double-check JODA documentation ***** 
var time = new Date();
var nowMinutes=time.getMinutes();
var nowHours=time.getHours();

// 1- Determine current blocks for 5minute and 1hour intervals
var currentBlock5m=Math.roundUp(nowMinutes/5)*5;
if(currentBlock5m==60){currentBlock5m=0;}
// Var nowHours is not needed but there for consistency
var currentBlock1h=nowHours;

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
SELECT * FROM table WHERE id='BTCUSD'+pastBlock5m OR id 

var hourBlock=time.getHours();
var benchmarkHourBlock=[];
for (var i = 1; i < 24+1; i++) {
	var tempDiff=hourBlock-i;
	if(tempDiff-i<0){tempDiff=tempDiff+24;}
	benchmarkHourBlock[i]=tempDiff;
}
//pseudo code
SELECT price FROM table WHERE id='BTCUSD'+minuteBlock OR id='BTCUSD'+hourBlock

var pctChange5min=...
var pctChange10min=...
var pctChange15min=...
var pctChange1h=...
var pctChange2h=...
var pctChange3h=...
var pctChange6h=...
var pctChange12h=...
var pctChange24h=...