$(function(){
	var mainSwiper=new Swiper(".mainSwiper", {
		pagination: {
		   el: ".swiper-pagination",
		},
		on: { // added
		   init: function(){
			  // console.log("initialized!!");
			  // console.log(this.slides.length, this.activeIndex);
			  $(".main_slider .account .current").text(this.activeIndex+1);
			  $(".main_slider .account .total").text(this.slides.length);
		   },
		   slideChange: function(){
			  // console.log("slide changed!!");
			  // console.log(this.slides.length, this.activeIndex);
			  $(".main_slider .account .current").text(this.activeIndex+1);
			  $(".main_slider .account .total").text(this.slides.length);
		   },
		},
	 });
  
  
	$(".prev").click(function(e){
		e.preventDefault();
		mainSwiper.slidePrev();
	 });
	 $(".next").click(function(e){
		e.preventDefault();
		mainSwiper.slideNext();
	 });
	 $(".play").click(function(e){
		e.preventDefault();
		mainSwiper.autoplay.start();
	 });
	 $("#pause_play").click(function(e){
		e.preventDefault();
		if($(this).hasClass("play")){
		   $(this).removeAttr("class");
		   $(this).addClass("pause");
		   $(this).text("pause");
		   mainSwiper.autoplay.start();
		}
		else{
		   $(this).removeAttr("class");
		   $(this).addClass("play");
		   $(this).text("play");
		   mainSwiper.autoplay.stop();
		}
	 });




	$(".header .tabs").click(function(e){
		e.preventDefault();
		$("body").addClass("fixed");
		$(".wrapper .menu").animate({left:0}, 300);
	});
	$(".menu .close").click(function(e){
		e.preventDefault();
		$(".menu").animate({left:"-100vw"}, 300, function(){
			$("body").removeClass("fixed");

			$("#gnb > ul > li").each(function(){
				if($(this).hasClass("active") == true){
					$(this).removeClass("active");
					$(this).children("ul").hide();
				}
			});
		});
	});
	$("#gnb > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$("#gnb > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#gnb ul ul").slideUp(300);
			$(this).children("ul").slideDown(300);
		}
		else{
			$(this).removeClass("active");
			$(this).children("ul").slideUp(300);
		}
	});






	var sub_swiper=new Swiper("#sub_slider .swiper-container", {
		slidesPerView: 1.2,
		spaceBetween: 15,
		
	
		on: {
			init: function(){
				var subSliderLength=$("#sub_slider .swiper-slide").length;
				$("#sub_slider .tot").text("/ "+subSliderLength);
			},
			slideChange: function(){
				var currentSlider=sub_swiper.activeIndex;
				currentSlider+=1;
				$("#sub_slider .num").text(currentSlider);
			}
		}
	});


	var last_Swiper=new Swiper(".lastSwiper", {
		on: { 
		   init: function(){
			  $(".last_slider .account .current").text(this.activeIndex+1);
			  $(".last_slider .account .total").text(this.slides.length);
		   },
		   slideChange: function(){
			  $(".last_slider .account .current").text(this.activeIndex+1);
			  $(".last_slider .account .total").text(this.slides.length);
		   },
		},
	 });






	 /*신발 하트 부분!!*/

	 $("#sub_slider .swiper-slide .label i").click(function(e){
		e.preventDefault();
		$(this).next().addClass("active");
	 });
	 
 });

 