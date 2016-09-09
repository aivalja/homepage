var then = new Date(2016,8,5, 9);
var future = new Date(2019,5,15, 9);
var now = new Date();
var decimals =7;

function update_bar() {
	now = new Date();
	$("#progress").text((Math.round(Math.pow(10,decimals)*100*(now-then)/(future-then))/Math.pow(10,decimals)).toFixed(decimals)+"%");
	setTimeout(update_bar,100);
}
$("document").ready(function(){
	update_bar();
});
