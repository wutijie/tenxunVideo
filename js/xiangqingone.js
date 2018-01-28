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
		tim.innerHTML=m+':'+n;
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
})









function fun2(data){
	console.log(data);
	
	for(var i=1;i<7;i++){
		if(i==1){
			
			var tidiv=document.createElement('div');
			tidiv.setAttribute('class','hh2 center');
			tidiv.innerHTML="腾讯出品·网络剧";	
			
			
			var bigdv2=document.createElement('div');
			bigdv2.className='center';
			bigdv2.id='bigdv2';
		}
		
		var dv=document.createElement('div');
		dv.className='dv';
		dv.style.marginRight="4px";
		
		//图片
		var med=data.subjects[i].subject.images.medium;
		var imgs=document.createElement('img');
		imgs.src=med;
		imgs.className='imgs';
		
		//电影名
		var tit=data.subjects[i].subject.title;
		var ps=document.createElement('p');
		ps.innerHTML=tit;
		ps.style.cursor='pointer';
		
		//上映时间
		var years=data.subjects[i].subject.year;
		var pp2s=document.createElement('p');
		pp2s.innerHTML=years;
		pp2s.className='pp2s';
		
		//电影类型
		var leix=data.subjects[i].subject.genres;
		var pp3s=document.createElement('p');
		pp3s.innerHTML=leix;
		pp3s.className='pp3s';
		
		
		var rigdiv=document.createElement('div');
		rigdiv.className='rigdiv';
		//电影名
		var rigspa01=document.createElement('span');
		rigspa01.innerHTML=tit;
		rigspa01.className='rigspa01';
		rigdiv.appendChild(rigspa01);
		
		
		//时间
		var rigspa02=document.createElement('span');
		rigspa02.innerHTML=years;
		rigspa02.className='rigspa02';
		rigdiv.appendChild(rigspa02);
		
		//导演
		var rigsp03=document.createElement('p');
		var daoyan=data.subjects[i].subject.directors[0].name;
		rigsp03.innerHTML='导演 : '+daoyan;
		rigsp03.className='rigsp03';
		rigdiv.appendChild(rigsp03);
		
		
		//主演
		var rigsp04=document.createElement('p');
		var zhuyan="";
		for(var j=0;j<data.subjects[i].subject.casts.length;j++){
			if(j<data.subjects[i].subject.casts.length-1){
				zhuyan+=data.subjects[i].subject.casts[j].name+" / ";
			}else{
				zhuyan+=data.subjects[i].subject.casts[j].name;
			}
		}
		rigsp04.innerHTML='主演 : '+zhuyan;
		rigsp04.className='rigsp04';
		rigdiv.appendChild(rigsp04);
		
		
		//评分
		var rigsp05=document.createElement('p');
		var pingfen=data.subjects[i].subject.rating.average;
		rigsp05.innerHTML='评分 : '+pingfen;
		rigsp05.className='rigsp05';
		rigdiv.appendChild(rigsp05);
		
		
		document.body.appendChild(tidiv);
		document.body.appendChild(bigdv2);
		bigdv2.appendChild(dv);
		
		dv.appendChild(imgs);
		dv.appendChild(ps);
		dv.appendChild(pp2s);
		dv.appendChild(pp3s);
		
		dv.appendChild(rigdiv);
		
	}
}


function fun3(data){
	console.log(data);
	for(var i=0;i<data.subjects.length-14;i++){
		if(i==0){
			
			var tidiv=document.createElement('div');
			tidiv.setAttribute('class','hh2 center');
			tidiv.innerHTML="会员专区";
			
			
			var bigdv3=document.createElement('div');
			bigdv3.className='center';
			bigdv3.id='bigdv3';
			
			
		}
		
		var dv=document.createElement('div');
		dv.className='dv';
		if((i+1)%6!=0){
			dv.style.marginRight="4px";
		}
		if((i)%6==0){
			var brs=document.createElement('div');
			bigdv3.appendChild(brs);
		}
		
		
		
		//图片
		var med=data.subjects[i].images.medium;
		var imgs=document.createElement('img');
		imgs.src=med;
		imgs.className='imgs';
		
		
		//电影名
		var tit=data.subjects[i].title;
		var ps=document.createElement('p');
		ps.innerHTML=tit;
		ps.style.cursor='pointer';
		
		//上映时间
		var years=data.subjects[i].year;
		var pp2s=document.createElement('p');
		pp2s.innerHTML=years;
		pp2s.className='pp2s';
		
		//电影类型
		var leix=data.subjects[i].genres;
		var pp3s=document.createElement('p');
		pp3s.innerHTML=leix;
		pp3s.className='pp3s';
		
		
		var rigdiv=document.createElement('div');
		rigdiv.className='rigdiv';
		//电影名
		var rigspa01=document.createElement('span');
		rigspa01.innerHTML=tit;
		rigspa01.className='rigspa01';
		rigdiv.appendChild(rigspa01);
		
		
		//时间
		var rigspa02=document.createElement('span');
		rigspa02.innerHTML=years;
		rigspa02.className='rigspa02';
		rigdiv.appendChild(rigspa02);
		
		//导演
		if(i!=data.subjects.length-2){
			var rigsp03=document.createElement('p');
			var daoyan=data.subjects[i].directors[0].name;
			rigsp03.innerHTML='导演 : '+daoyan;
			rigsp03.className='rigsp03';
			rigdiv.appendChild(rigsp03);
		}
		
		
		//主演
		var rigsp04=document.createElement('p');
		var zhuyan="";
		for(var j=0;j<data.subjects[i].casts.length;j++){
			if(j<data.subjects[i].casts.length-1){
				zhuyan+=data.subjects[i].casts[j].name+" / ";
			}else{
				zhuyan+=data.subjects[i].casts[j].name;
			}
		}
		rigsp04.innerHTML='主演 : '+zhuyan;
		rigsp04.className='rigsp04';
		rigdiv.appendChild(rigsp04);
		
		
		//评分
		var rigsp05=document.createElement('p');
		var pingfen=data.subjects[i].rating.average;
		rigsp05.innerHTML='评分 : '+pingfen;
		rigsp05.className='rigsp05';
		rigdiv.appendChild(rigsp05);
		
		
		
		//VIP
		var vipimg=document.createElement('img');
		vipimg.src="img/vip.png";
		vipimg.className="vipimg";
		
		
		
		document.body.appendChild(tidiv);
		document.body.appendChild(bigdv3);
		bigdv3.appendChild(dv);
		
		
		dv.appendChild(imgs);
		dv.appendChild(ps);
		dv.appendChild(pp2s);
		dv.appendChild(pp3s);
		
		dv.appendChild(rigdiv);
		dv.appendChild(vipimg);
	}
}

