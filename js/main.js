$(function(){
	$(".global_tabs").click(function(e){
		e.preventDefault();
		if($(this).hasClass("active") == false){
			$(this).addClass("active");
			$(".floating_menu").addClass("active");
		}
		else{
			$(this).removeClass("active");
			$(".floating_menu").removeClass("active");
		}
	});

	var scrollT=0;
	var pageN=0;
	var winHalf;
	var targetY=0;
	var categoryFlag=false;

	$(".gnb li").eq(pageN).addClass("active");

	$(window).scroll(function(){
		scrollT=$(window).scrollTop();

		if(scrollT <= $("#page1").offset().top-winHalf){
			pageN=0;
		}
		else if(scrollT <= $("#page2").offset().top-winHalf){
			pageN=1;
		}
		else if(scrollT <= $("#page3").offset().top-winHalf){
			pageN=2;
		}
		else if(scrollT <= $("#page4").offset().top-winHalf){
			pageN=3;
		}
		else{
			pageN=4;
		}

		$(".gnb li").removeClass("active");
		$(".gnb li").eq(pageN).addClass("active"); 
		$(".mobile_menu li").removeClass("active");
		$(".mobile_menu li").eq(pageN).addClass("active");

		if(pageN == 1 || pageN == 2 || pageN == 3){
			$(".global_menu").addClass("dark");
			$(".global_tabs").addClass("dark");
			$(".download").addClass("dark");
		}
		else{
			$(".global_menu").removeClass("dark");
			$(".global_tabs").removeClass("dark");
			$(".download").removeClass("dark");
		}

		if(categoryFlag){
			return;
		}
		else{
			if(pageN == 0){
				$("#start").addClass("active");
			}
			else{
				$("#page"+pageN).addClass("active");

				if(pageN == 4){
					categoryFlag=true;
				}
			}
		}
	});

	$(window).resize(function(){
		winHalf=$(window).height()/2;
		$(window).trigger("scroll");
	});
	$(window).trigger("resize");

	$("#header .gnb li").click(function(e){
		e.preventDefault();
		pageN=$(this).index();

		if(pageN == 0){
			targetY=0;
		}
		else{
			targetY=$("#page"+pageN).offset().top;
		}

		$("html").animate({"scrollTop":targetY}, 300);
	});
	$(".mobile_menu .menu li").click(function(e){
		e.preventDefault();
		pageN=$(this).index();

		$(".global_tabs").removeClass("active");
		$(".floating_menu").removeClass("active");

		if(pageN == 0){
			targetY=0;
		}
		else{
			targetY=$("#page"+pageN).offset().top;
		}

		$("html").delay(400).animate({"scrollTop":targetY}, 300);
	});

	$("#portfolio1").addClass("active");

	$("#portfolio1 .title").click(function(e){
		e.preventDefault();
		$("#portfolio1").addClass("active");
		$("#portfolio2").removeClass("active");

		targetY=$("#portfolio1").offset().top;
		$("html").animate({scrollTop : targetY}, 800);
	});
	$("#portfolio2 .title").click(function(e){
		e.preventDefault();
		$("#portfolio1").removeClass("active");
		$("#portfolio2").addClass("active");

		targetY=$("#portfolio2").offset().top;
		$("html").animate({scrollTop : targetY}, 800);
	});

	function mobileLink(){
		if(isMobile){
			$("a.portfolio1").attr({href: "project1/mobile/index.html"});
		}
		else{
			$("a.portfolio1").attr({href: "project1/pc/index.html"});
		}

		$("a.portfolio2").attr({href: "project2/index.html"});
	}

	mobileLink();
});
