$(document).ready(function () {
  // $(window).on("scroll",function(){
  //     if(detectViewPort(".ele1")){
  //         console.log("lfkk");
  //     }
  // })

  // function detectViewPort(selector){

  var row1 = $(".row1");
  var row2 = $(".row2");
  var row3 = $(".row3");

  $(window).on("scroll", function () {
    console.log(isViewport(row1));
    if (isViewport(row1)) {
      row1.each(function () {
        $(this).delay($(this).attr("data-delay")).animate({
          opacity: 1,
          top: 0,
        });
      });
    }
    if (isViewport(row2)) {
      row2.each(function () {
        $(this).delay($(this).attr("data-delay")).animate({
          opacity: 1,
          top: 0,
        });
      });
    }
    if (isViewport(row3)) {
      row3.each(function () {
        $(this)
          .delay($(this).attr("data-delay"))
          .animate({ opacity: "1", top: 0 });
      });
    }
    console.log(isViewport(row1));
    console.log(isViewport(row2));
    console.log(isViewport(row3));
  });
  // }
});

function isViewport(selector) {
  var elementTop = $(selector).offset().top;
  var elementBottom = elementTop + $(selector).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height() + 100;

  return elementBottom > viewportTop && elementTop < viewportBottom;
}
