$(function(){
	$(".sec_two ul .timg02").mouseenter(function(){
		$(this).css("display","none");
		$(this).prev().css("display","block");
		$(this).next().css("display","block");
		$(this).prev().mousemove(function(ev){
			var x=(ev.clientX-$(this).offset().left-18)/200;
			$(this).next().next().val(x);
		})
	})
	$(".sec_two ul .timg01").mouseleave(function(){
		$(this).css("display","none");
		$(this).next().css("display","block");
		$(this).next().next().css("display","none");
	})
	var wid=$(".sec_two ul li").outerWidth()+5;
	$(".sec_two ul").css("width",wid*12);
	
	
	
	var wid2=$(".sec_four ul li").outerWidth()+5;
	$(".sec_four ul").css("width",wid2*7);
	
	
	var wid3=$(".sec_ten ul li").outerWidth()+5;
	$(".sec_ten ul").css("width",wid3*6);
	
	var wid4=$(".agin_six ul li").outerWidth()+5;
	$(".agin_six ul").css("width",wid*6);
	
	
	
	
	
	
	
	
	
	
})