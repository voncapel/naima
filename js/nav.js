$(window).on('load', function(){ 
  $(".dimmer").removeClass("active");
  $('.content').addClass('visible');
});

$( document ).ready(function() {
  $('.page-link').click(function(){
        var href = $(this).attr('href');
        if(href == '#'){
          return false
        }

        $('.content').fadeOut(800);

        setTimeout(function(){
          $(".dimmer.left-to-right").addClass("active");
        }, 200);

        // Delay setting the location for one second
        setTimeout(function() {window.location = href}, 500);
        return false;
  });
  $('.btn').click(function(){
    $('.top-bar , .left-bar , .right-bar , .bottom-bar , .nav').toggleClass('nav-open');
    setTimeout(function(){
      $('.menu-toggle').toggleClass("on");
    }, 300);
  });

  var heightTrigger = $(window).height() / 4;

  $('.content').scroll(function(){
    if ($('.content').scrollTop() > heightTrigger){
        $('.top-bar p').addClass('active');
    }
    else {
          $('.top-bar p').removeClass('active');
    }
  });
});
