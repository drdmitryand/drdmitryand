var a1 = Math.floor(Math.random()*1001);
var a2 = Math.floor(Math.random()*1001);
var count=0;
var count1=0;
var znak = prompt('Какую математическую операцию вы хотите выбрать?', '');
alert("Чтобы сменить операцию в дальнейшем, просто обновите страницу!");
  

if(znak==="0"){
  a1 = Math.floor(Math.random()*101);
  a2 = Math.floor(Math.random()*101);
  onload=a;
} else if(znak==="1"){
    onload=b;
} else if(znak==="2") {
    onload=c;
} else if(znak==="3") {
    onload=d;
} 
	

function a(){
	document.getElementById("a").value = a1+" * "+ a2+" =";
}
function b(){
	 if((a1>a2) && (a1%a2==0) && (a2!=0)){
	 document.getElementById("a").value = a1+" / "+ a2+" =";
	 }
	 else {
		while(!((a1>a2) && (a1%a2==0) && (a2!=0))){ 
		   a1 = Math.floor(Math.random()*1001);
           a2 = Math.floor(Math.random()*1001);
        }
        document.getElementById("a").value = a1+" / "+ a2+" =";
     }
}
function c(){
	document.getElementById("a").value = a1+" + "+ a2+" =";
}
function d(){
	document.getElementById("a").value = a1+" - "+ a2+" =";
}


function rep(){
    document.getElementById("c").value = "";
    a1 = Math.floor(Math.random()*101);
    a2 = Math.floor(Math.random()*101);
    if(znak==="0"){
       a();
    } else if(znak==="1"){
       b();
    } else if(znak==="2") {
       c();
    } else if(znak==="3") {
       d();
    }
}

function ok() {
    if(znak==='0'){            
       umnoj();
    } else if(znak==='1') {           
       del();
    } else if(znak==='2') {  
       sum();
    } else if(znak=='3') {
       vich();
    } else if(znak=='4') {
       rand();
    } else {
       alert("Неверное значение!");
       znak=prompt("Повторите попытку: ", "");
       count--;
       ok();
    }
}

function truee(){
    count++;
	count1++;
	alert("Правильно! \n Решено: "+count+"\n Правильных: "+count1);
	rep();
}


function fals(){
    count++;
	alert("Неправильно! \nРешено: "+count+"\nПравильных: "+count1);
	rep(); 
}

function umnoj(){
       a();
       var otv = Number(document.getElementById('c').value);
       if (a1*a2 == otv){
	      truee();
       } else{
	      fals();
	   }
}


function del(){
       b();
       var otv = Number(document.getElementById('c').value);
       if (a1/a2 == otv){
	      truee();
       } else{
	      fals();
	   }

}

function sum(){
       c();
       var otv = Number(document.getElementById('c').value);
       if (a1+a2 == otv){
	      truee();
       } else{
	      fals();
	   }
}

function vich(){
       d();
       var otv = Number(document.getElementById('c').value);
       if (a1-a2 == otv){
	      truee();
       } else{
	      fals();
	   }
}




