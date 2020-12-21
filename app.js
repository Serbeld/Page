var thumbs = new Swiper('.gallery-thumbs' , {
     
      spaceBetween: 10,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });

var main_thumb = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '.gallery-top .swiper-button-next',
        prevEl: '.gallery-top .swiper-button-prev',
      },
      thumbs: {
        swiper: thumbs
      }
    });

$("button").click(
    function(){
        $("#la-calera-thumbs").addClass("popup")
        $(".equis").show()
    }
)

$(".equis").click(
    function(){
        $("#la-calera-thumbs").removeClass("popup")
        $(".equis").hide()
    }
)
