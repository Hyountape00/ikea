// swiper
$(document).ready(function(){
  // 스와이퍼
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    breakpoints: {
      768: {
        slidesPerView: 2
      },

      1040: {
        slidesPerView: 3
      }

    }
  });
  // aos
  // media();
  // function media(){
  //   var windowW = $(window).width();
  //   if(windowW > 1040){
  //     console.log(windowW)
  //     AOS.init();
  //   }else {
  //     console.log('w')
  //   }
  // }
  AOS.init({

    disable: function () {
      var desktop = 1040;
      return window.innerWidth < desktop;
    } // 1040px 이상일 때 disable
  
  });

  // 새로고침시 sec1 letter 밑에 fixed 방지
  var myPos = $(window).scrollTop();
  if(myPos >= 171) {
    $('.sec1-letter').css({
      position: 'absolute',
      bottom: '-132px'
    })
  };
  // SCROLL
  $(window).scroll(function(){
    var myPos = $(window).scrollTop();
    var sec4Top = $('.sec4').offset().top;
    // console.log(sec4Top);
    
    if(myPos <= 171) {
      $('.sec1-letter').css({
        position: 'fixed',
        bottom: '15px'
      });
    }else if(171 <= myPos && myPos < sec4Top){
      // console.log('sec')
      $('.sec1-letter').css({
        position: 'absolute',
        bottom: '-172px'
      });
    }
  });
  // product HOVER
  $('.product').hover(function(){
    $(this).stop().animate({
      'box-shadow': '0 0 15px 0 rgba(0, 0, 0, 0.1)'
    }, 300)
    let prodNum = $(this).index();
    $(this).find('.product-iconbox').addClass('active');
  }, function(){
    $(this).find('.product-iconbox').removeClass('active');
  });
  // sec2-cont2 HOVER
  $('.sec2-cont2-dot').mouseenter(function(){
    let sec2Cont2Num = $(this).index();
    $(this).addClass('active')
    $('.dot-info').eq(sec2Cont2Num).css({
      opacity: 1,
      visibility: 'visible'
    })
  });;
  $('.sec2-cont2-dot').mouseleave(function(){
    let sec2Cont2Num = $(this).index();
    $(this).removeClass('active')
    $('.dot-info').eq(sec2Cont2Num).css({
      opacity: 0,
      visibility: 'hidden'
    });
  });
  $('.dot-info').hover(function(){
    let dotInfoNum = $(this).index();
    $('.sec2-cont2-dot').eq(dotInfoNum).trigger('mouseenter')
  }, function(){
    let dotInfoNum = $(this).index();
    $('.sec2-cont2-dot').eq(dotInfoNum).trigger('mouseleave')
  });
  // MOBILE HAMBURGER CLICK
  let hambNum = 0;
  $('.m-header-hamb').click(function(){
    hambNum++;
    if(hambNum % 2 == 1) {
      $('.hamb-menu').css({
        left: 0
      });
      $('html').css({
        height: '100vh',
        overflow: 'hidden'
      });
    }else{

    };
  });
  $('.outbtn').click(function(){
    hambNum++;
    if(hambNum % 2 == 0) {
      $('.hamb-menu').css({
        left: '100%'
      });
      $('html').css({
        height: 'auto',
        overflow: 'unset'
      });
    }else {

    };
  });
}); //end