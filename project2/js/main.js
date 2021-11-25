$(function(){
	
	var t=0;
    var n=0;
    var w;
    var winHalf;
    var toppos=0;
    var categoryFlag=false;  
 
	$(window).scroll(function(){
		scrollT=$(window).scrollTop();

		if(scrollT <= $("#page1").offset().top-winHalf){
			n=0;
		}
		else if(scrollT <= $("#page2").offset().top-winHalf){
			n=1;
		}
		else if(scrollT <= $("#page3").offset().top-winHalf){
			n=2;
		}
		else if(scrollT <= $("#page4").offset().top-winHalf){
			n=3;
		}
       else if(t < $("#page4").offset().top-winHalf){
          n=3;
       }
       else if(t < $("#page5").offset().top-winHalf){
          n=4;
       }
       else{
          n=5;
       }
 
    

      if(categoryFlag){
         return;     
      }

      else{
         if(n == 0){    
            $("#header").addClass("active");
         }
         else{
            $("#page"+n).addClass("active");

            if(n == 5){
               categoryFlag=true;
            }
         }
      }


    });
 
	$("#gnb li:first-child").addClass("active");

	$("#gnb li").click(function(e){
		e.preventDefault();

		$("#gnb li").removeClass("active");
		$(this).addClass("active");

		topPos=$(this).find("a").attr("href");
		topPos=$(topPos).offset().top;
		$("html").animate({scrollTop:topPos}, 600);
	});

	AOS.init({
		easing: "ease-in-out-sign",
		duration: 500,
		once:"true"
	});

	var t=0;

	$(window).scroll(function(){
		t=$(window).scrollTop();

		if(t > 100){
			$("#header .inner .top").addClass("active");
		}
		else{
			$("#header .inner .top").removeClass("active");
		}
	});



	$("#header .tab").click(function(e){
		e.preventDefault();

		if(!$("#header .mobile").hasClass("active")){
			$("body").toggleClass("static");
		}

		$("#header .mobile").toggleClass("active");
		$("#header .tab").toggleClass("active");
		$("#header .dim").toggleClass("active");
	});
	$("#header .dim").click(function(){
		if(!$("#header .mobile").hasClass("active")){
			$("body").removeClass("static");
		}

		$("#header .mobile").removeClass("active");
		$("#header .tab").removeClass("active");
		$("#header .dim").removeClass("active");
	});

	$("#m_gnb li").click(function(e){
		e.preventDefault();
		$(".dim").trigger("click");
		topPos=$(this).find("a").attr("href");
		topPos=$(topPos).offset().top;
		$("html").delay(400).animate({scrollTop:topPos}, 600);
	});

	var w;

	$(window).resize(function(){
		w=window.innerWidth;

		if(w > 720){
			$("#header .dim").trigger("click");
		}
	});
});