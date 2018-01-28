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

















function fun(data){
	console.log(data);
	for(var i=0;i<data.subjects.length-8;i++){
		if(i==0){
			
			var tidiv=document.createElement('div');
//			var toptit=data.title;
			tidiv.setAttribute('class','hh2 center');
			tidiv.innerHTML="热剧精选";
			
			
			var bigdv=document.createElement('div');
			bigdv.className='center';
			bigdv.id='bigdv';
			
			
		}
		
		var dv=document.createElement('div');
		dv.className='dv';
		if((i+1)%6!=0){
			dv.style.marginRight="6px";
		}
		
		
		
		//图片
		var med=data.subjects[i].images.medium;
		var imgs=document.createElement('img');
		imgs.src=med;
		imgs.className='imgs';
		
		
		//电影名
		var tit=data.subjects[i].title;
		var ps=document.createElement('a');
		ps.innerHTML=tit;
		ps.style.cursor='pointer';
		var urls=data.subjects[i].alt;
		ps.onclick=function(){
			this.href="https://movie.douban.com/subject/26004132/";
		}
		
		
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
		
		
		
		
		
		document.body.appendChild(tidiv);
		document.body.appendChild(bigdv);
		bigdv.appendChild(dv);
		
		dv.appendChild(imgs);
		dv.appendChild(ps);
		dv.appendChild(pp2s);
		dv.appendChild(pp3s);
		
		dv.appendChild(rigdiv);
	}
}






function fun2(data){
	console.log(data);
	
	for(var i=0;i<6;i++){
		if(i==0){
			
			var tidiv=document.createElement('div');
			tidiv.setAttribute('class','hh2 center');
			tidiv.innerHTML="腾讯出品·网络剧";
			
			
			var bigdv2=document.createElement('div');
			bigdv2.className='center';
			bigdv2.id='bigdv2';
		}
		
		var dv=document.createElement('div');
		dv.className='dv';
		if((i+1)%6!=0){
			dv.style.marginRight="6px";
		}
		
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
	for(var i=0;i<data.subjects.length-8;i++){
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
			dv.style.marginRight="6px";
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
		var rigsp03=document.createElement('p');
		var daoyan=data.subjects[i].directors[0].name;
		rigsp03.innerHTML='导演 : '+daoyan;
		rigsp03.className='rigsp03';
		rigdiv.appendChild(rigsp03);
		
		
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
		
//		dv.appendChild(vipimg);
		
		dv.appendChild(rigdiv);
	}
}



function fun4(data){
	console.log(data);
	for(var i=6;i<data.subjects.length-2;i++){
		if(i==6){
			
			var tidiv=document.createElement('div');
			tidiv.setAttribute('class','hh2 center');
			tidiv.innerHTML="海外独播剧场";
			
			
			var bigdv4=document.createElement('div');
			bigdv4.className='center';
			bigdv4.id='bigdv4';
			
			
		}
		
		var dv=document.createElement('div');
		dv.className='dv';
		if((i+1)%6!=0){
			dv.style.marginRight="6px";
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
		
		
		
		
		
		document.body.appendChild(tidiv);
		document.body.appendChild(bigdv4);
		bigdv4.appendChild(dv);
		
		dv.appendChild(imgs);
		dv.appendChild(ps);
		dv.appendChild(pp2s);
		dv.appendChild(pp3s);
		
		dv.appendChild(rigdiv);
	}
}



