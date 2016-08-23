/*
//严格模式
  "use strict"

function doSomething(){
	"use strict";
}
//-----
function Compare(a,b){
	if(a>b){
		alert("a is greater than b");
	}else if(a<b){
		alert("a is less than b");
	}else{
		alert("a is equal b");
	}
}
var c = Compare(4,6);
alert(c);
function test(){
	var message = "hi";//局部变量，函数退出后就会被销毁
}
test();
alert(message);
//----
function test(){
	message = "hi";//省略了var操作符，从而创建了一个全局变量，在严格模式下会抛出ReferenceError错误
}
test();
alert(message);




//检测变量的数据类型
var message = "some string";
alert(typeof message);//string
alert(typeof (message));//string
alert(typeof 100);//number
------alert(typeof null);//object



//使用Boolean()转型函数
var a = "hello";
var b =Boolean(a);
alert(b);//true



//流控制语句自动执行相应的Boolean()转换
var a = "hello";
if(a){
	alert("true");
}



//数值转换函数：

Number();数字
parseInt();整数
parseFloat();小数
var num =10;
alert(num.toString(16));
//if语句
if(i>25){
	alert("Greater than 25");
}else if(i < 0){
	alert("less than 0");
}else{
	alert("between 0 and 25 区间");
}

var i = 10;


//do while后测试循环语句,只有循环体执行之后，才会测试出口
var i = 0;
do{
	i += 2;
}while(i<10);

alert(i);//10



//while 前测试循环语句，在循环被执行之前，就会对出口条件求值
var i = 0;
while(i <10){
	i += 2;
}
alert(i);//10


//for 前测试循环语句,执行循环之前初始化变量和定义循环后要执行的代码的能力
var c = 10;
for (var i =0 ; i<c;i++) {
		alert(i);
}
//i=1~9,遍历出来



//for 前测试循环语句,执行循环之前初始化变量和定义循环后要执行的代码的能力
var c = 10;
for (var i =0 ; i<c;i++) {
		alert(i);
}
alert(i);
//i=1~9,遍历出来
//for-in精准的迭代语句,用来枚举对象的属性
for(var propName in window){
	document.write(propName);
}//显示window对象的所有属性。
//label语句要与for循环配合使用,可以在代码中添加标签，供以后使用
start:for(var i = 0;i<c;i++){
	alert(i);
}
var c = 10;


//break语句
var num = 0;
for(var i =1;i<10;i++){
	if(i%5 == 0){
		break;//立即退出了循环
	}
	num++;
}
alert(num);//4


//continue语句
var num = 0;
for(var i =1;i<10;i++){
	if(i%5 == 0){
		continue;//直到i=10结束
	}
	num++;
}
alert(num);//8


//与label语句循环嵌套
var num = 0;
outermost:
for(var i =0;i<10;i++){
	for(var j =0;j<10;j++){
		if(i == 5 && j== 5){
			break outermost;
		}
		num++;
	}
}
alert(num);//55


//与label语句循环嵌套
var num = 0;
outermost:
for(var i =0;i<10;i++){
	for(var j =0;j<10;j++){
		if(i == 5 && j== 5){
			continue outermost;
		}
		num++;
	}
}
alert(num);//95

switch(i){
	case 25:
	alert("25");
	break;
	case 35:
	alert("35");
	case 45;
	alert("45");
	break:
	default:
	alert("other");
}

var num = 25;
switch(true){
	case num<0:
		alert("小于0");
		break;
	case num>=0 && num <=10:
		alert("0~10");
		break;
	cae num>10 && num<=20:
		alert("10~20");
		break;
	default:
		alert(">20");
}
function howManyArgs(){
	alert(arguments.length);
}
howManyArgs();

function doAdd(){
	if(arguments.length == 1){
		alert(arguments[0]+10);
	}else if(arguments.length == 2){
		alert(arguments[0]+arguments[1]);
	}
}
doAdd(10);//20
doAdd(30,20);//50


var person = new Object();
person.name = "aaa";
alert(person.name);//aaa


function addTen(num){
	num += 10;
	return num;
}
var count = 20;
var result = addTen(count);
alert(count);//20
alert(result);//30


var color = "blue";
function changeColor(){
	if(color === "blue"){
		color = "red";
	}else{
		color = "blue";
	}
}

changeColor();
alert("现在的颜色"+color);

var color = "blue";
function changeColor(){
	function swapColors(){
		var tempColor = anotherColor;
		anotherColor = color;
		color = tempColor;
	}
	swapColor();
}
changeColor();


//创建object实例
//1、new操作符后跟object构造函数
var person = Object();
person.name = "aaa";
person.age = 29;
//2、使用对象字面量表示法
var person = {
	name :"aaa",//使用逗号分隔不同的属性
	age :28//最后一个属性不用逗号
}

//对象字面量是向函数传递大量可选参数的首选方式
function displayInfo(args){
	var output = " ";
	if(typeof args.name == "string"){
		output += "Name:"+args.name+"\n";
	}
	if(typeof args.age == "number"){
		output += "Age:"+args.age+"\n";
	}
	alert(output);
}

displayInfo({
	name:"aaa",
	age:29
});
displayInfo({
	name:"bbb"
});

var person = {
	"name":"aaa",
	"age":28,
	"first name":"bbb"
}
var propertyName ="name";
alert(person[propertyName]);//方括号语法的优点：可以通过变量来访问属性
alert(person["first name"]);//对于属性名使用关键字或保留字或语法错误的字符，都可以使用方括号表示法


//创建数组的方式
//1、使用Array构造函数，可以省略new操作符
var colors = new Array();
alert( colors instanceof Array);//true....instanceof可以检测引用类型的值；
var colors = new Array(20);
alert(colors.length);//20

var colors = new Array("red","blue","white");
alert(colors.length);//3
alert(colors[0]);//red
//colors[3] = "black";
alert(colors[3]);//undefind
//2、使用数组字面量表示法,方括号【】，逗号隔开
var values = [1,2,];//错误写法，会创建一个2或3项的数组
alert(values.length);

var colors = ["red","blue","white","balck"];
colors[colors.length] ="grey";
alert(colors[4]);//length为下一个新项的位置；

//调用tostring/valurOf方法，所有对象都有的方法
var colors = ["red","blue","white","balck"];
alert(colors.toString());//red,blue,white,black
alert(colors.valueOf());//red,blue,white,black
alert(colors);//red,blue,white,black

var person1 = {
	toLocaleString:function(){
		return "nnn";
	},
	toString:function(){
		return "aaa";
	}
};
var person2 = {
	toLocaleString:function(){
		return "fff";
	},
	toString:function(){
		return "bbb";
	}
};
var people = [person1,person2];
alert(people);//默认调用toString方法
alert(people.toString());//显示调用toString方法
alert(people.toLocaleString());//调用toLocaleString方法
alert(people.join("丨丨"));//默认调用toString方法,join()方法改变分隔符

//栈方法（后进先出）最新添加的项最早移除push/pop
var colors = new Array(2);
var c = colors.push("red","blue");
alert(colors.length);
alert(c);//4
c = colors.push("black");
alert(c);//5
var i = colors.pop();
alert(i);//black
var i = colors.pop();
alert(i);//blue
var i = colors.pop();
alert(i);//red
var i = colors.pop();
alert(i);//undefind
alert(colors.length);//1


var colors = new Array();
var c = colors.push("red","blue");
alert(c);//2
c = colors.push("black");
alert(c);//3
//shift移除第一项
var i = colors.shift();
alert(i);//red
alert(colors.length);//2


var nums = [1,2,3,4,5,4,3,2,1];
//every()迭代方法,每一项返回true则为true
var everyResult = nums.every(function(item,index,array){
	return (item >2);
});
alert(everyResult);//false

//数组迭代方法
//some()迭代方法,有一项返回true则为true
var someResult = nums.some(function(item,index,array){
	return (item>2);
});
alert(someResult);//true

//filter()迭代方法,返回数组中包含的某一项

//map()迭代方法,返回的每一项都是在原始数组中对应产生的结果
var mapResult = nums.map(function(item,index,array){
	return (item*2);
});
alert(mapResult);//2,4,6,8,10,8,6,4,2
//foreach()迭代方法,没有返回值，每一项运行传入的函数

//reduce 归并方法
var values = [1,2,3,4,5];
var sum = values.reduce(function(prev,cur,index,array){
	return prev+cur;
});
alert (sum);//15

//reduceRight 归并方法
var values = [1,2,3,4,5];
var sum = values.reduceRight(function(prev,cur,index,array){
	return prev+cur;
});
alert (sum);//15

var now = new Date();

var re = null,
i;

for(i=0;i<10;i++){
	re = /cat /g;
	re.test("catastrophe");
}

for(i=0;i<10;i++){
	re = new RegExp("cat","g");
	re.test("9catastrophe");
	
	
	function f1(){
	
	
	var n = 999;
	nAdd = function(){n+=1};
	
	function f2(){
		alert(n);
	}
	return f2;
};

nAdd();
result();
nAdd();
result();

}



if ((navigator.userAgent.indexOf('MSIE') >= 0) 
    && (navigator.userAgent.indexOf('Opera') < 0)){
    alert('你是使用IE')
}else if (navigator.userAgent.indexOf('Firefox') >= 0){
    alert('你是使用Firefox')
}else if (navigator.userAgent.indexOf('Opera') >= 0){
    alert('你是使用Opera')
}else{
    alert('你是使用其他的浏览器浏览网页！')
}

function isIE() {
    var sTr = navigator.userAgent;
    if(sTr.indexOf("Firefox")>= 0){
    	alert("Firefox")
    }else{
    	alert("-1")
    };  
}
isIE()

function loadText(){
	var iDiv = document.getElementById("myDiv");
	var para = document.createElement("p");
	var txt = document.createTextNode("111");
	para.appendChild(txt);
	iDiv.appendChild(para);
}


//AJAx异步加载实例
function loadText(){
	if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
	var xmlhttp;
	xmlhttp.onreadystatechange = function(){
		iDiv = document.getElementById("myDiv");
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			iDiv.innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","test1.html",true);
	xmlhttp.send();
}
*/

function showHint(str)
{
var xmlhttp;
if (str.length==0)
  {
  document.getElementById("txtHint").innerHTML="";
  return;
  }
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
    }
  }
xmlhttp.open("GET","new_file.php?q="+str,true);
xmlhttp.send();
}


