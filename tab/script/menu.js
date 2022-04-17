$(".navi > ul > li").mouseover(function(){
    $(this).children(".menu_box").stop().slideDown();
});
$(".navi > ul > li").mouseleave(function(){
    $(this).children(".menu_box").stop().slideUp();
});