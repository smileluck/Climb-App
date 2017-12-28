var timekeeper;
var time_list_1, time_list_2, time_list_3 , copy , list;
var zs = true;

function countdown(){
	document.getElementById("inverted").className = "timekeeper_title_word change";
	document.getElementById("along").className = "timekeeper_title_word";
	document.getElementById("countdown").className = "content display";
	document.getElementById("just").className = "content";

	itouch(document.getElementById('djs0'),document.getElementById('djs1'),document.getElementById('djs2'));
}

function just(){

	document.getElementById("inverted").className = "timekeeper_title_word";
	document.getElementById("along").className = "timekeeper_title_word change";
	document.getElementById("countdown").className = "content";
	document.getElementById("just").className = "content display";

	if(zs == true){
		timekeeper = document.getElementsByName("timekeeper")[1];
		establish(timekeeper);
		zs = false;
	}

		itouch(document.getElementById('zjs0'),document.getElementById('zjs1'),document.getElementById('zjs2'));
}

window.onload = function(){

	timekeeper = document.getElementsByName("timekeeper")[0];
	establish(timekeeper);
	itouch(this.time_list_1,this.time_list_2,this.time_list_3);
}

function establish(i){

	var aggregate = document.createElement("div");
	aggregate.className  = "aggregate";
	i.appendChild(aggregate);
	time_list_1 = document.createElement("div");
	time_list_1.className = "time_list";
	time_list_1.id = i.id + "0";
	aggregate.appendChild(time_list_1);



	var aggregate = document.createElement("div");
	aggregate.className  = "aggregate";
	i.appendChild(aggregate);
	time_list_2 = document.createElement("div");
	time_list_2.className = "time_list";
	time_list_2.id = i.id + "1";
	aggregate.appendChild(time_list_2);


	var aggregate = document.createElement("div");
	aggregate.className  = "aggregate";
	i.appendChild(aggregate);
	time_list_3 = document.createElement("div");
	time_list_3.className = "time_list";
	time_list_3.id = i.id + "2";
	aggregate.appendChild(time_list_3);

	for(var i = 0; i < 24; i++){
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
}

var startX, startY, slideX,  slideY, recordY_1=0 , recordY_2=0, recordY_3=0;

function itouch(q,w,e){

	recordY_1=recordY_2=recordY_3=0
	w.style.top = e.style.top = q.style.top = "0px";

	for(var j=0;j<24;j++){
		if(j == 0){
			q.childNodes[j].className = "list selected";
		}else{
			q.childNodes[j].className = "list";
		}
	}

	for(var i=0;i<60;i++){
		if(i == 0){
			w.childNodes[i].className = "list selected";
			e.childNodes[i].className = "list selected";
		}else{
			w.childNodes[i].className = "list";
			e.childNodes[i].className = "list";
		}
	}



	q.addEventListener("touchstart",function(a){
		for(var i= 0;i<24;i++){
			q.childNodes[i].className = "list";
		}
		q.style.transition="";
		a.preventDefault();
		var touch = a.touches[0]; //第一个手指触碰
		startY = touch.pageY;
	},false)
	q.addEventListener("touchmove",function(a){
		a.preventDefault();
		var touch = a.touches[0];
		slideY = touch.pageY - startY;
		q.style.top = recordY_1+slideY + "px";
	},false)
	q.addEventListener("touchend",function(a){
		a.preventDefault();
		if(q.offsetTop>63.5){
			q.style.transition = "all 0.5s";
			q.childNodes[0].className = "list selected";
			q.style.top = "0px"
		} 

		for(var i=0;i<23;i++){
			if(q.offsetTop>= 32 -i*32 && q.offsetTop< 64-i*32){
				q.childNodes[i+1].className = "list selected";
				q.style.transition = "all 0.5s";
				q.style.top = -32 - i * 32 +"px"

			}
		}
		
		if(q.offsetTop < - 675){
			q.style.transition = "all 0.5s";
			q.childNodes[23].className = "list selected";

			q.style.top = - 737 +"px"
		}

		recordY_1 = parseInt(q.style.top);
	},false);

	w.addEventListener("touchstart",function(b){
		for(var i=0;i<60;i++){
			w.childNodes[i].className = "list";
		}
		w.style.transition ="";
		b.preventDefault();
		startY = b.touches[0].pageY;
	},false)
	w.addEventListener("touchmove",function(b){
		b.preventDefault();
		slideY = b.touches[0].pageY - startY;
		w.style.top  = parseInt( recordY_2+slideY) + "px";
	},false)
	w.addEventListener("touchend",function(b){
		b.preventDefault();
		if(w.offsetTop > 63.5){
			w.childNodes[0].className = "list selected";
			w.style.transition = "all 0.5s";
			w.style.top = "0px";
		}

		for(var i=0;i<59;i++){
			if(w.offsetTop >=32-i*32 && w.offsetTop <64-i*32){
				w.childNodes[i+1].className = "list selected";
				w.style.transition = "all 0.5s";
				w.style.top = -32-i*32 +"px";
			}
		}

		if(w.offsetTop < -1800){
			w.childNodes[59].className = "list selected";
			w.style.transition = "all 0.5s";
			w.style.top = "-1888px";
		}
		recordY_2  =parseInt(w.style.top);
	},false)

	e.addEventListener("touchstart",function(c){
		for(var i=0;i<59;i++){
			e.childNodes[i].className = "list";
		}
		e.style.transition = "";
		c.preventDefault();
		startY = c.touches[0].pageY;
	},false)
	e.addEventListener("touchmove",function(c){
		c.preventDefault();
		slideY = c.touches[0].pageY - startY;
		e.style.top = recordY_3 + slideY + "px";
	},false)
	e.addEventListener("touchend",function(c){
		c.preventDefault();
		if(e.offsetTop >63.5){
			e.childNodes[0].className = "list selected";
			e.style.transition = "all 0.5s";
			e.style.top = "0px";
		}
		for(var i=0;i<59;i++){
			if(e.offsetTop >= 32-i*32 && e.offsetTop < 64-i*32){
				e.childNodes[i+1].className = "list selected";
				e.style.transition = "all 0.5s";
				e.style.top = -32-i*32 +"px";
				e.childNodes[i+1+1]
				e.childNodes[i+1+1]
			}
		}
		if(e.offsetTop < -1800){
			e.childNodes[59].className  = "list selected";
			e.style.transition = "all 0.5s";
			e.style.top = "-1888px";
		}
		recordY_3 = parseInt(e.style.top);
	},false)
}
