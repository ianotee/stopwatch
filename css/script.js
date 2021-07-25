/ Define vars to hold time values
let seconds=0;
let minutes=0;
let hours=0;

/Stopwatch function (logic to determine when to increment next value,etc.)

function stopwatch(){
	seconds ++;

	/ logic to determine when to increment next value
	if (seconds/60===1){
		seconds=0;
		minutes=++;
		if (minutes/60===1){
			minutes=0;
			hours++;
		}
	}
	/display updated time value to user
	document . getElementsByTag id('display'). inner HTML=hours+":"+ minutes+ ":" + seconds;

	window. set interval (stopwatch,10);
}