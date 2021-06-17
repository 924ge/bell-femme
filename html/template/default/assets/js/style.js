

$(function(){
   
// work slide

  var wsl = $("#work-slide");
  if ( wsl.length ) {
    wsl.slick({
      dots: true,
      infinite: true,
      speed: 400,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      cssEase: 'ease-in-out',
      arrows: false,
      fade: true,
    });
  }
	
    //toggle
      var rwdMenu = $('#menuList'),
      switchPoint = 916,
      slideSpeed = 500,
      fadeSpeed = 500;
      
    
      var menuSouce = rwdMenu.html();
    
      $(window).load(function(){
    
        function menuSet(){
          if(window.innerWidth < switchPoint){
            if(!($('#rwdMenuWrap').length)){
              $('body').prepend('<div id="menuOverlay"></div><div id="switchBtnArea"><a href="javascript:void(0);" id="switchBtn"><span></span><span></span><span></span></a></div><div id="rwdMenuWrap"></div>');
              $('#rwdMenuWrap').append(menuSouce);
              //$('#rwdMenuWrap ul').append('<li class="snsmenu"><a href="#" target="_blank">Facebook</a></li><li class="snsmenu"><a href="#" target="_blank">Twitter</a></li><li class="snsmenu"><a href="#" target="_blank">Instagram</a></li>');
              //$('#rwdMenuWrap ul li').prepend('<span class="icon-music"></span>');
    
              var menuOverlay = $('#menuOverlay'),
              switchBtn = $('#switchBtn'),
              //btnRight = parseInt(switchBtn.css('right')),
              menuWrap = $('#rwdMenuWrap'),
              //menuHeight = menuWrap.outerHeight();
              winHeight = $(window).height();
    
              switchBtn.on('click', function(){
                
                if($(this).hasClass('btnClose')){	
                  $(this).removeClass('btnClose').removeAttr('style');
                    menuOverlay.stop().animate({opacity:'0'},fadeSpeed,function(){
                    menuOverlay.removeAttr('style');
                  });
                  menuWrap.stop().animate({top:'-' + winHeight + ''},slideSpeed);
                  $('body').removeAttr('style');
                  
                } else {
                  
                  $(this).addClass('btnClose');
                  menuOverlay.css({display:'block',opacity:'0'}).stop().animate({opacity:'1'},fadeSpeed);
                  menuWrap.stop().animate({top:'0'},slideSpeed);
                  $('body').css({position:'fixed'});
                }
              });
            }
          } else {
            $('#menuOverlay,#switchBtnArea,#rwdMenuWrap').remove();
            $('body').removeAttr('style');
          }
        }
    
        $(window).on('resize', function(){
          menuSet();
        });
    
        menuSet();
      });	


});//end-function


