var a1 = Math.floor(Math.random()*101);
var a2 = Math.floor(Math.random()*101);	
var count=0;
var count1=0;

function a(){
	document.getElementById("a").value = a1+" * "+ a2+" =";
}

function rep(){
    document.getElementById("c").value = "";
    a1 = Math.floor(Math.random()*101);
    a2 = Math.floor(Math.random()*101);
    a();	
}

function ok() {
    var otv = Number(document.getElementById('c').value);
    if (a1*a2 == otv){
	   count++;
	   count1++;
	   alert("Правильно! \n Решено: "+count+"\n Правильных: "+count1);
	   rep();
    } else{
	   count++;
	   alert("Неправильно! \nРешено: "+count+"\nПравильных: "+count1);
	   rep();
	}

}

