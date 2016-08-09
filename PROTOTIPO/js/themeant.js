/*****************************************************************
Table of Contents

1.) Document Ready State
	- Nice Scroll
	- Back Top
	- Tool Tips
	- Pop Over
	- Pretty Photo
	- Sticky Menu
	- Newsletter Subscribe
	- Twitter Feeds
	- Primary Menu Responsive Button
	
!Note: You can search using the title above
*****************************************************************/

/* Document Ready State. 
   Used: Global */	
jQuery(document).ready(function($)
	{
		
		/* Back Top. 
		   Used: Buttton at the corner right to scroll to the top */		
		$('#back-top').click(function(e){
				e.preventDefault();
				$('body,html').animate({scrollTop:0},800);
		});		
		
		/* Tool Tips. 
		   Used: <a class="tooltip-trigger"> */
		$('a[class^="tooltip-trigger"]').tooltip();	
		$('[data-toggle="tooltip"]').tooltip();

		/* Pop Over. 
		   Used: <a class="popover-trigger"> */	
		$('a[class^="popover-trigger"]').popover();
		
		/* Pretty Photo. 
		   Used: - For Grouping:  <a data-rel="prettyPhoto[portfolio-group]"> 
		         - For Single Image: <a data-rel="prettyPhoto"> 
		*/
		$('a[data-rel]').each(function() {
			$(this).attr('rel', $(this).data('rel'));
		});
		$("a[rel^='prettyPhoto']").prettyPhoto({theme:'light_square'});		
		

		/* Sticky Menu. 
		   Used: Global */	
		var headerHeight = $("header").height();
		var logo = $("header .logo img");
		var logoSmallHeight = 60;
		var submenuHeight = $("header .vc_secondary-menu").height();

		function checkStickyMenu(){
			if($("body").hasClass("boxed")) return false;
		
			if($(window).scrollTop() > headerHeight-submenuHeight   &&  $(window).width() >= 979){
				// #Back-Top visible
				$('#back-top').addClass('visible');
				if($("body").hasClass("sticky-menu-active"))
					return false;
				$("body").addClass("sticky-menu-active","slow");
				$("body").css('padding-top',headerHeight);
				$('header').css('top',-headerHeight+40);
				$('header').stop(true, true).animate({
						top: 0
					}, 1000, function(){
						$('header').removeAttr('style');
						// Animation complete.
					});
				logo.height(logoSmallHeight).css("width", "auto");				
			} else if( $(window).scrollTop() == 0 ||  $(window).width() < 979){
				$('#back-top').removeClass('visible');
				if ($("body").hasClass("sticky-menu-active")){
					$("body").css('padding-top',0);
					$("body").removeClass("sticky-menu-active");
				}
				logo.removeAttr('style');
			}
		}
		$(window).on("scroll", function(){
				checkStickyMenu();
		});
		$(window).on("resize", function(){
				checkStickyMenu();
		});
		checkStickyMenu();
    		
				
		/* Primary Menu Responsive Button
		   used: header
		*/	
/*		var megamenu_link=$("header .vc_menu div.vc_primary-menu > ul .vc_mega-menu").prev();
		var href=megamenu_link.attr('href');
		megamenu_link.attr('data-link',href);*/
		
		$("header .vc_menu div.vc_primary-menu > ul .vc_mega-menu").prev()
			.append('<i class="icon-chevron-sign-down mega-menu-drop-down" style="display:none; "></i>')
			.attr('href','javascript:void(0);')
			.click(function(){
				if( $(window).width() < 979){
					$(this).next().toggle();	
				}
		});
		
		$(".btn-navbar").click(function () {
			$("header .vc_menu div.vc_primary-menu > ul").css('height','480px');
			$(".mega-menu-drop-down").toggle();
			$('div.vc_primary-menu > ul').tinyscrollbar({
				axis: 'y',
				size: '300',
				sizethumb: 'auto'
			});		
		});		

/*		$('.btn-navbar').toggle(function () {
			$(".vc_menu").addClass("active");
		}, function () {
			$(".vc_menu").removeClass("active");
		});*/	
		/* End of Code */		
		
  
});

