$(document).ready(function() {
    
    /* Sticky Navigation */
    
    $('.js--section-services').waypoint(function(direction) {
        
        if(direction == 'down') {
            
            $('nav').addClass('sticky');
           
           } else {
               
               $('nav').removeClass('sticky');
           }
    }, {
          offset: '60px'
    }); 
    
      /* var waypoints = $('#handler-first').waypoint(function(direction) {
          notify(this.element.id + ' hit 25% from top of window') 
          }, {
          offset: '25%'
          }) 
      */
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated zoomInDown');
    }, {
        offset: '50%'
        
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated flipInY');
    }, {
        offset: '50%'
        
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInUp');
    }, {
        offset: '50%'
        
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
        
    });
    
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
        
    });
    
    $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated fadeInRight');
    }, {
        offset: '50%'
        
    });
    
    $('.js--wp-7').waypoint(function(direction) {
        $('.js--wp-7').addClass('animated fadeInRight');
    }, {
        offset: '50%'
        
    });
    
    $('.js--wp-8').waypoint(function(direction) {
        $('.js--wp-8').addClass('animated zoomIn');
    }, {
        offset: '50%'
        
    });
    
    
    
    
   /* Navigation Scroll */
    $(function() {
        $('a[href*="#"]').click(function() {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
    $('.js--nav-icon').click(function() {
    
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i')
    
    nav.slideToggle(200);
    if(icon.hasClass('ion-navicon-round')) {
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');   
    } else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');   
    }
});
    
    
    
});