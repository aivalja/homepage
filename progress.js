var then = new Date(2016,8,5, 9);
var future = new Date(2019,5,15, 9);
var now = new Date();
var decimals = 7;
var amount = decimals+1;
var progress = 0;

function update_bar() {
	now = new Date();
	progress = (now-then)/(future-then)
	$("#progress_text").text(((Math.round(Math.pow(10,decimals)*100*progress)/Math.pow(10,decimals))).toFixed(decimals)+"%");
	update_bars();
	setTimeout(update_bar,10);
}

function make_bars(amount){
	for(i = 0;i<amount;i++){
		$("#bars").append("<div class='progress-bar' id='bar-"+i+"'></div>")
	}
}
function update_bars(){
	for(i=0;i<amount;i++){
		$("#bar-"+i).width(Number((100*progress*100*Math.pow(10,i)).toString().substr(1)/100%100)+"%");
	}
}
$("document").ready(function(){
	make_bars(amount);
	update_bar();
});
