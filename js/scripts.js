(function($) {
	
	"use strict";
    
    $(window).load(function() {
        $(".pre-loder").delay(500).fadeOut('slow', function() {
        });
    });

     //Revolution Slider Style One
      if($('.main-slider .tp-banner').length){

        jQuery('.main-slider .tp-banner').show().revolution({
          delay:10000,
          startwidth:1200,
          startheight:761,
          hideThumbs:600,
      
          thumbWidth:80,
          thumbHeight:50,
          thumbAmount:5,
      
          navigationType:"bullet",
          navigationArrows:"0",
          navigationStyle:"preview3",
      
          touchenabled:"on",
          onHoverStop:"off",
      
          swipe_velocity: 0.7,
          swipe_min_touches: 1,
          swipe_max_touches: 1,
          drag_block_vertical: false,
      
          parallax:"mouse",
          parallaxBgFreeze:"on",
          parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
      
          keyboardNavigation:"off",
      
          navigationHAlign:"center",
          navigationVAlign:"bottom",
          navigationHOffset:0,
          navigationVOffset:40,
      
          soloArrowLeftHalign:"left",
          soloArrowLeftValign:"center",
          soloArrowLeftHOffset:20,
          soloArrowLeftVOffset:0,
      
          soloArrowRightHalign:"right",
          soloArrowRightValign:"center",
          soloArrowRightHOffset:20,
          soloArrowRightVOffset:0,
      
          shadow:0,
          fullWidth:"on",
          fullScreen:"off",
      
          spinner:"spinner4",
      
          stopLoop:"off",
          stopAfterLoops:-1,
          stopAtSlide:-1,
      
          shuffle:"off",
      
          autoHeight:"off",
          forceFullWidth:"on",
      
          hideThumbsOnMobile:"on",
          hideNavDelayOnMobile:1500,
          hideBulletsOnMobile:"on",
          hideArrowsOnMobile:"on",
          hideThumbsUnderResolution:0,
      
          hideSliderAtLimit:0,
          hideCaptionAtLimit:0,
          hideAllCaptionAtLilmit:0,
          startWithSlide:0,
          videoJsPath:"",
          fullScreenOffsetContainer: ""
        });
        
      }

     // VideoCarousel
    
      $("#videoCarousel").owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        nav:false,
        dot:true,
        autoplay:false,
        lazyLoad:true,
        center:true
      });

     // Tab Carousel

     $(document).ready( function() {
       $('#myCarousel').carousel({
        interval:   0
        });
       $('#myCarousel').carousel('pause');
        
        var clickEvent = false;
        $('#myCarousel').on('click', '.nav a', function() {
          clickEvent = true;
          $('.nav li').removeClass('active');
          $(this).parent().addClass('active');         
        }).on('slid.bs.carousel', function(e) {
         if(!clickEvent) {
          var count = $('.nav').children().length -1;
          var current = $('.nav li.active');
          current.removeClass('active').next().addClass('active');
          var id = parseInt(current.data('slide-to'));
          if(count == id) {
               $('.nav li').first().addClass('active');     
          }
         }
         clickEvent = false;
        });
     });


 })(window.jQuery);


  //-- testmonialsCarousel --
  jQuery(document).ready(function() {

    var owl = jQuery(".testmonialsCarousel");

    owl.owlCarousel({
      nav : false,
      dots : false,
      autoplay : true,
      loop:true,
      items : 2,
      responsive:{
        0:{
            items:1,
            slideBy: 1
        },
        768:{
            items:2,
            slideBy: 2
        },
        1000:{
            items:2,
            slideBy: 2
        }
      }
    });
  });
  //--------------------------------------------------------------------------------------------
