$(function(){
	var play_btn=document.getElementById("play_btn");
	var tiao=document.getElementById("tiao");
	var tim=document.getElementById("tim");
	var pro=document.getElementById("pro");
	var videoa=document.getElementById("videos");
	
	
	
	var n=0;
	var m=0;
	var q=0;
	var on=false;
	var timera;
	function times(){
		n++;
		q++;
		if(n>=60){
			n=0;
			m+=1;
		}
		if(n<10){
			n="0"+n;
		}
		tim.innerHTML='00:0'+m+':'+n;
		pro.value=q;
		console.log(videoa.ended)
		if(videoa.ended){
			clearInterval(timera);
			m=0;
			n=0;
			play_btn.innerHTML="▶";
			on=true;
		}
	}
	
	play_v();
	function play_v(){
		if(on==true){
			videos.play();
			this.innerHTML="‖";
			var timer=Math.ceil(videoa.duration);
			pro.max=timer;
			timera=setInterval(times,1000);
			console.log(videoa.volume)
			on=false;
		}else{
			clearInterval(timera);
			videos.pause();
			this.innerHTML="▶";
			on=true;
		}
	}
	play_btn.addEventListener("click",play_v,false);
	
	
	
	
	var on=0;
	$("#tuozh").click(function(ev){
		ev.cancelBubble;
		if(on==0){
			$(".bacgd .rig").toggle();
			$(".bacgd .lef").animate({width:1200},400);
			$("#videos").animate({left:'50%',marginLeft:-440},400);
			on=1;
		}else{
			$("#videos").animate({left:0,marginLeft:0},400);
			$(".bacgd .lef").animate({width:880},400,function(){
				$(".bacgd .rig").toggle();
			});
			on=0;
		}
	})
	
	
	var clenX=$(window).width();
	var clenY=$(window).height();
	
	
	var nono=0;
	$(".ctols .sspa02").click(function(){
		if(nono==0){
			$("#videos").css({height:700,width:1200,top:-170})
			$(".bacgd .lef").css({width:1200,zIndex:1000})
			$(".bacgd .rig").toggle();
			$(".bacgd .lef p").toggle();
			nono=1;
		}else{
			$("#videos").css({height:500,width:880,top:0})
			$(".bacgd .lef").css({width:880,zIndex:0})
			$(".bacgd .rig").toggle();
			$(".bacgd .lef p").toggle();
			nono=0;
		}
	})
	
	
})