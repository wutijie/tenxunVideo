window.onload=function(){
	
	var arrowdown=document.getElementsByClassName("icon-arrowdown")[0];
	var head_bos=document.getElementsByClassName("head_bos")[0];
	var head_one=document.getElementsByClassName("head_one")[0];
	var head_two=document.getElementsByClassName("head_two")[0];
	var arrup=document.getElementsByClassName("icon-arrowdown")[1];
	console.log(arrup);
	var maybesee=document.getElementsByClassName("maybesee")[0];
	console.log(maybesee);
	var head_two_div=head_two.querySelectorAll("div")[0];	
	head_one.onclick=function(){
		head_one.style.display="none";
		head_bos.style.display="block";			
	}
	arrup.onclick=function(){
		head_one.style.display="block";
		head_bos.style.display="none";		
	}
	var m=parseInt(head_two_div.style.width)+5;
	head_two.style.width=m*11+'px';
	
	
	
	
	
	
	
	
	 var slider=document.getElementById("slide");
	var lis=document.getElementById("slide").getElementsByTagName("li");
	var nav=document.querySelectorAll(".navigation ul li");
	console.log(lis)
	var num=0;
	var timer;
	for(var i=0;i<nav.length;i++){
		nav[i].index=i;
		nav[i].onmouseover=function(){
			removeStyle(num);
			addStyle(this.index);
			num=this.index;
		}
	}
	//移除上一个的样式
	function removeStyle(n){
		lis[n].className="";    //图片
		nav[n].className="";   //导航
	}
	//添加样式
	function addStyle(n){
		nav[n].className="current";   //导航
		lis[n].className="active";    //图片

		
	}
	//自动轮播
	
	function move1(){
		removeStyle(num);
		num++;
		if(num>nav.length-1){
			num=0;
		}
		addStyle(num);
		
	}
	timer=setInterval(move1,3000);
	slider.onmouseover=function(){
		clearInterval(timer);
	}
	slider.onmouseout=function(){
		timer=setInterval(move1,3000);
	}
	
	
	
	var input=document.getElementById("search");
	var ul=document.getElementById("search_ul");
	
	
	input.onkeyup=function(){
		
		var val=this.value;
		
		jsonp({
			url:'https://www.baidu.com/su',
			data:{
				wd:val
			},
			callBack:'cb',
			succ:function(data){
				console.log(data);
				fn1(data);
			}
		})
	}
	
	
	
	
	function fn1(data){
		var str='';
		if(!data.s.length){
			ul.style.display='none';
			ul.innerHTML='';
		}else{
			ul.style.display='block';
			
			for(var i=0;i<data.s.length;i++){
				str+='<li class="souli">'+data.s[i]+'</li>';
			}
			ul.innerHTML=str;
		}
	}
	
	
	
	
	
}
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
