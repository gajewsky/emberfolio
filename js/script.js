$( document ).ready(function() {
  $(".nav_cats").hover(function () {
    $(this).toggleClass('hover',200,"easeOutSine").find('img').toggle;
 });
 $(".box").hover(function () {
   $(this).find('img,h2, h3').toggle();
});

});
