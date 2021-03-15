$(document).ready(function(){

  $('.prev').click(function(){
    var currentImage = $('.active');
    var prevImage = currentImage.prev();

    if(prevImage.length){
      currentImage.removeClass('active');
      prevImage.addClass('active');
    }
  });

  $('.next').click(function(){
    var currentImage = $('.active');
    var nextImage = currentImage.next();

    if(nextImage.length){
      currentImage.removeClass('active');
      nextImage.addClass('active');
    }
  });

})


$(document).keydown( function(eventObject) {
     if(eventObject.which==37) {
        $('.prev').click();
     } else if(eventObject.which==39) {
        $('.next').click();
     }
} );
