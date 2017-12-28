var timekeeper = document.getElementById("timekeeper");
var time_list_1, time_list_2, time_list_3 , copy , list;
window.onload = function(){



	var aggregate = document.createElement("div");
	aggregate.className  = "aggregate";
	timekeeper.appendChild(aggregate);
	time_list_1 = document.createElement("div");
	time_list_1.className = "time_list";
	aggregate.appendChild(time_list_1);



	var aggregate = document.createElement("div");
	aggregate.className  = "aggregate";
	timekeeper.appendChild(aggregate);
	time_list_2 = document.createElement("div");
	time_list_2.className = "time_list";
	aggregate.appendChild(time_list_2);


	var aggregate = document.createElement("div");
	aggregate.className  = "aggregate";
	timekeeper.appendChild(aggregate);
	time_list_3 = document.createElement("div");
	time_list_3.className = "time_list";
	aggregate.appendChild(time_list_3);

	for(var i = 0; i < 24; i++){
		list = document.createElement("div");
		var list_digit = document.createElement("p");
		if(i == 0){
			list.className = "list selected";
		}else{
			list.className = "list";

		}
		if(i<10){
			list_digit.innerHTML = "0" +i ;
		}else{
			list_digit.innerHTML = i;
		}
		time_list_1.appendChild(list);
		list.appendChild(list_digit);
	}

	for(var i = 0; i < 60; i++){
		list = document.createElement("div");
		var list_digit = document.createElement("p");
		if(i == 0){
			list.className = "list selected";
		}else{
			list.className = "list";

		}
		list_digit.className = "list_digit";
		if(i<10){
			list_digit.innerHTML = "0" +i ;
		}else{
			list_digit.innerHTML = i;
		}
		time_list_2.appendChild(list);
		list.appendChild(list_digit);
	}

	for(var i = 0; i < 60; i++){
		list = document.createElement("div");
		var list_digit = document.createElement("p");
		if(i == 0){
			list.className = "list selected";
		}else{
			list.className = "list";

		}
		list_digit.className = "list_digit";
		if(i<10){
			list_digit.innerHTML = "0" +i ;
		}else{
			list_digit.innerHTML = i;
		}
		time_list_3.appendChild(list);
		list.appendChild(list_digit);
	}



	itouch();
}


var startX, startY, slideX,  slideY, recordY_1=0 , recordY_2=0, recordY_3=0;


function itouch(){

	time_list_1.addEventListener("touchstart",function(a){
		for(var i= 0;i<24;i++){
			time_list_1.childNodes[i].className = "list";
		}
		time_list_1.style.transition="";
		a.preventDefault();
		var touch = a.touches[0]; //第一个手指触碰
		startY = touch.pageY;
	},false)
	time_list_1.addEventListener("touchmove",function(a){
		a.preventDefault();
		var touch = a.touches[0];
		slideY = touch.pageY - startY;
		time_list_1.style.top = recordY_1+slideY + "px";
	},false)
	time_list_1.addEventListener("touchend",function(a){
		a.preventDefault();
		if(time_list_1.offsetTop>63.5){
			time_list_1.style.transition = "all 0.5s";
			time_list_1.childNodes[0].className = "list selected";
			time_list_1.style.top = "0px"
		} 

		for(var i=0;i<23;i++){
			if(time_list_1.offsetTop>= 32 -i*32 && time_list_1.offsetTop< 64-i*32){
				time_list_1.childNodes[i+1].className = "list selected";
				time_list_1.style.transition = "all 0.5s";
				time_list_1.style.top = -32 - i * 32 +"px"

			}
		}
		
		if(time_list_1.offsetTop < - 675){
			time_list_1.style.transition = "all 0.5s";
			time_list_1.childNodes[23].className = "list selected";

			time_list_1.style.top = - 737 +"px"
		}

		recordY_1 = parseInt(time_list_1.style.top);
	},false);

	time_list_2.addEventListener("touchstart",function(b){
		for(var i=0;i<60;i++){
			time_list_2.childNodes[i].className = "list";
		}
		time_list_2.style.transition ="";
		b.preventDefault();
		startY = b.touches[0].pageY;
	},false)
	time_list_2.addEventListener("touchmove",function(b){
		b.preventDefault();
		slideY = b.touches[0].pageY - startY;
		time_list_2.style.top  = parseInt( recordY_2+slideY) + "px";
	},false)
	time_list_2.addEventListener("touchend",function(b){
		b.preventDefault();
		if(time_list_2.offsetTop > 63.5){
			time_list_2.childNodes[0].className = "list selected";
			time_list_2.style.transition = "all 0.5s";
			time_list_2.style.top = "0px";
		}

		for(var i=0;i<59;i++){
			if(time_list_2.offsetTop >=32-i*32 && time_list_2.offsetTop <64-i*32){
				time_list_2.childNodes[i+1].className = "list selected";
				time_list_2.style.transition = "all 0.5s";
				time_list_2.style.top = -32-i*32 +"px";
			}
		}

		if(time_list_2.offsetTop < -1800){
			time_list_2.childNodes[59].className = "list selected";
			time_list_2.style.transition = "all 0.5s";
			time_list_2.style.top = "-1888px";
		}
		recordY_2  =parseInt(time_list_2.style.top);
	},false)

	time_list_3.addEventListener("touchstart",function(c){
		for(var i=0;i<59;i++){
			time_list_3.childNodes[i].className = "list";
		}
		time_list_3.style.transition = "";
		c.preventDefault();
		startY = c.touches[0].pageY;
	},false)
	time_list_3.addEventListener("touchmove",function(c){
		c.preventDefault();
		slideY = c.touches[0].pageY - startY;
		time_list_3.style.top = recordY_3 + slideY + "px";
	},false)
	time_list_3.addEventListener("touchend",function(c){
		c.preventDefault();
		if(time_list_3.offsetTop >63.5){
			time_list_3.childNodes[0].className = "list selected";
			time_list_3.style.transition = "all 0.5s";
			time_list_3.style.top = "0px";
		}
		for(var i=0;i<59;i++){
			if(time_list_3.offsetTop >= 32-i*32 && time_list_3.offsetTop < 64-i*32){
				time_list_3.childNodes[i+1].className = "list selected";
				time_list_3.style.transition = "all 0.5s";
				time_list_3.style.top = -32-i*32 +"px";
				time_list_3.childNodes[i+1+1]
				time_list_3.childNodes[i+1+1]
			}
		}
		if(time_list_3.offsetTop < -1800){
			time_list_3.childNodes[59].className  = "list selected";
			time_list_3.style.transition = "all 0.5s";
			time_list_3.style.top = "-1888px";
		}
		recordY_3 = parseInt(time_list_3.style.top);
	},false)
}