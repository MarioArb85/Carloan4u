$( document ).ready(function() {
	// Hide/show portfolio submenu
	$('.portfolio').click(function() {
		if($(this).hasClass('selected')){
			$(this).removeClass('selected');
			$('.portfolio-submenu').css('display','none');
		}
		else{
			$(this).addClass('selected');
			$('.portfolio-submenu').css('display','table-row-group');
		}
	});

	// Remove .seleced from .portfolio
	$('.hide-portfolio').click(function() {
		if ($('.portfolio').hasClass('selected')){
			$('.portfolio').removeClass('selected');
			$('.portfolio-submenu').css('display','none');	
		}
	});

	// Hide/shoq .seleced from .services
	jQuery(".services .service .service-button").hover(
        function() {
        	jQuery(this).parent().css('background-color','#ffffff');
            jQuery(this).parent().find("i").addClass('icon-selected');
            jQuery(this).addClass('button-selected');

        }, function() {
        	jQuery(this).parent().css('background-color','#f8f8f8');
            jQuery(this).parent().find("i").removeClass('icon-selected');
            jQuery(this).removeClass('button-selected');
        }
    );

	// Change <i> color when hover 
    jQuery("footer .footer-container .footer-list ul li a").hover(
        function() {
        	jQuery(this).css('color','#3b6360');
        	jQuery(this).prev().css('color','#3b6360');
        }, function() {
        	jQuery(this).css('color','#ffffff');
        	jQuery(this).prev().css('color','#ffffff');
        }
    );

    // Slider next arrow function
    $('.next-img').click(function() {
    	$(".slider ul li").each(function() {
			if ($(this).hasClass('slider-selected')){
				removeClassSlider($(this));
				if($(this).next().length > 0){
					addClassSlider($(this).next());
					return false;
				}
				else
					addClassSlider($(".slider ul li").first());
			}
		});
		$(".home .buttons ul li").each(function() {
			if ($(this).hasClass('slider-button-selected')){
				$(this).removeClass('slider-button-selected');
				if($(this).next().length > 0){
					$(this).next().addClass('slider-button-selected');
					return false;
				}
				else
					$(".home .buttons li").first().addClass('slider-button-selected');
			}
		});
    });

    // Slider prev arrow function
    $('.prev-img').click(function() {
    	$(".slider ul li").each(function() {
			if ($(this).hasClass('slider-selected')){
				removeClassSlider($(this));
				if($(this).prev().length > 0)
					addClassSlider($(this).prev());
				else {
					addClassSlider($(".slider ul li").last());
					return false;
				}
			}
		});
		$(".home .buttons ul li").each(function() {
			if ($(this).hasClass('slider-button-selected')){
				$(this).removeClass('slider-button-selected');
				if($(this).prev().length > 0)
					$(this).prev().addClass('slider-button-selected');
				else{
					$(".home .buttons li").last().addClass('slider-button-selected');
					return false;
				}
			}
		});
    });

    // Auto slider
    setInterval(function() {
    	$('.next-img').click();
    }, 3500);

    // Change slider buttons
    $('.slider-button').click(function() {
    	if (!$(this).hasClass('slider-button-selected')){
			$(".slider-button").each(function() {
				if($(this).hasClass('slider-button-selected'))
					$(this).removeClass('slider-button-selected');		
			});	

    		var index = $(this).index();
    		$(this).addClass('slider-button-selected');

	    	$(".slider ul li").each(function() {
	    		if ($(this).hasClass('slider-selected')){
					removeClassSlider($(this));
					return false;
				}
	    	});
	    	addClassSlider($(".slider ul").find('li:nth-child('+(index+1)+')'));
    	}
    });


    // RESPONSIVE

    // toggle menu1
    $('.menu-responsive').click(function() {
    	if ($(this).hasClass('selected')){
			$(this).removeClass('selected')
			if ($('.menu-resposive-list .portoflio-responsive').hasClass('selected')){
				$( ".menu-resposive-list ul li ul" ).slideToggle( "slow" );
				$('.menu-resposive-list .portoflio-responsive').removeClass('selected');
			}
		}
		else
			$(this).addClass('selected')

	  	$( ".menu-resposive-list" ).slideToggle( "slow" );
	});

    // hide/show portfolio
	$('.hide-portfolio-responsive').click(function() {
		if ($('.menu-resposive-list .portoflio-responsive').hasClass('selected')){
			$( ".menu-resposive-list ul li ul" ).slideToggle( "slow" );
			$('.menu-resposive-list .portoflio-responsive').removeClass('selected');
		}
	});

    // toggle submenu
	$('.menu-resposive-list .portoflio-responsive').click(function() {
		if ($(this).hasClass('selected'))
			$(this).removeClass('selected')
		else
			$(this).addClass('selected')

	  	$( ".menu-resposive-list ul li ul" ).slideToggle( "slow" );
	});	
});

function addClassSlider (element){
	element.animate({opacity: 1}, 500);
	element.addClass('slider-selected');
}

function removeClassSlider (element){
	element.animate({opacity: 0}, 500);
	element.removeClass('slider-selected');
}