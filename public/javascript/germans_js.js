//Typed JS
$(function typed(){
  setTimeout(function(){
    $(".typed").typed({
      strings: ["Hello ^2300", "Hola ^2300", "Bonjour ^2300", "Olá ^2300", "Ciao ^2300", "Hallo ^2300", "Hello ^2300", "Hola ^2300", "Bonjour ^2300", "Olá ^2300", "Ciao ^2300", "Hallo ^2300", "Hello ^2300", "Hola ^2300", "Bonjour ^2300", "Olá ^2300", "Ciao ^2300", "Hallo ^2300", "Hello"],
      typespeed: 0
    });
  },2300);
});


//Scroll Log
// $(window).scroll(function() {
//   console.log($(window).scrollTop());
// });


//Click scroll to About Me
$(function(){
  $('.about').on('click',function(){
    if($(window).width() > 1885){
      $('html,body').animate({
        scrollTop:976
      }, 1500)
    } else if($(window).width() > 1270){
      $('html,body').animate({
        scrollTop:705
      }, 1500)
    } else {

    }
  });
})


//Click scroll to My Projects
$(function(){
  $('.portfolio').on('click',function(){
    if($(window).width() > 1885){
      $('html,body').animate({
        scrollTop:2930
      }, 1500)
    } else if($(window).width() > 1270){
      $('html,body').animate({
        scrollTop:2114
      }, 1500)
    } else {

    }
  });
})


//Click scroll to Contact Me Section
$(function(){
  $('.contact-info').on('click',function(){
    if($(window).width() > 1885){
      $('html,body').animate({
        scrollTop:4881
      }, 1500)
    } else if($(window).width() > 1270){
      $('html,body').animate({
        scrollTop:3523
      }, 1500)
    } else {

    }
  });
})


//Scroll for Mobile
$(function(){
  $('.about-mobile').on('click',function(){
      $('html,body').animate({
        scrollTop:1580
      }, 1500)
  });
})


//Scroll for Mobile
$(function(){
  $('.portfolio-mobile').on('click',function(){
      $('html,body').animate({
        scrollTop:5087
      }, 1500)
  });
})


//Scroll for Mobile
$(function(){
  $('.contact-info-mobile').on('click',function(){
      $('html,body').animate({
        scrollTop:8590
      }, 1500)
  });
})

// Arrow to Scroll to Top
$(function(){
  $('.arrow').on('click',function(){
    $('html,body').animate({
      scrollTop:0
    }, 1500)
  });
})

// FadeIn FadeOut for Arrow span
$(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() >= 641){
      $('.arrow').fadeIn(1000);
    } else if ($(window).scrollTop() < 641) {
      $('.arrow').fadeOut(1000);
    };
  });
})
