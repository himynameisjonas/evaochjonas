$(function(){
  $('.people img').mouseenter(function(){
    img = $(this)
    img.attr('src', img.attr('src').replace("2", "3"))
  });

  $('.people img').mouseleave(function(){
    img = $(this)
    img.attr('src', img.attr('src').replace("3", "2"))
  });
})
