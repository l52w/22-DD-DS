start();
var imgs = 2;
var now = 0;

function start(){
    $(".slide_box > img").eq(0).siblings().css({"margin-top":"-400px"});
    setInterval(function(){slide();},3000);
}
function slide(){
    now = now == imgs?0:now+=1;
    $(".slide_box > img").eq(now-1).css({"margin-top":"-400px"});
    $(".slide_box > img").eq(now).css({"margin-top":"0px"});
}