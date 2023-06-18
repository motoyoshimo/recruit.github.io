$(function(){
    speed = 10;
    easing = "easeInOutsine";
    // タグ生成
    $(".mask").wrap("<div class='mask-wrap'>");
    $(".mask").append("<div class='mask-bg'></div>");
    $('.mask').on('inview',function(event,isInView,visiblePartX,visiblePartY){
      if(isInView){
        
        $(this).stop().animate({"left":"0%"},function(){
          $(this).find(".mask-bg").stop().animate({"left":"100%"});
        });
        
      }
    
    });
  });