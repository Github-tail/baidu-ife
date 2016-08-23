
var interval;
function caculate(){
	var inputDate = document.getElementById("input").value.split("-");
	var date = new Date(inputDate[0],inputDate[1],inputDate[2]);
	var curDate = new Date();
	var year = inputDate[0]-curDate.getFullYear();
	console.log(year);
	var month = inputDate[1]-1-curDate.getMonth();
	var day = inputDate[2]-curDate.getDate();
	var hour = 23-curDate.getHours();
	var minute = 59-curDate.getMinutes();
	var second = 59-curDate.getSeconds();
	
	var days = year*365+month*30+day-1;

	var seconds = days*24*60*60+hour*60*60+minute*60+second+1;
	var result = document.getElementById("result");
	if (seconds>0) {
		result.innerHTML=("距离"+ inputDate[0]+"年"+inputDate[1]+"月"+inputDate[2]+"日还有："+days+"天"+hour+"时"+minute+"分"+second+"秒");
	} else if(seconds == 0){
		result.innerHTML=("倒计时结束");
	}else{
		result.innerHTML=("距离"+ inputDate[0]+"年"+inputDate[1]+"月"+inputDate[2]+"日已经过去了："+ -(days+1)+"天"+curDate.getHours()+"时"+curDate.getMinutes()+"分"+curDate.getSeconds()+"秒");
	}
}

function countTime(){
	
	var date = document.getElementById("input").value;
	var checkdate = date.split("-");
	var checkval = (/\d{4}-\d{2}-\d{2}/).exec(date);
	//console.log(checkval);
	if( checkval == null || checkval == undefined){
		alert("请输入正确的格式");
	}else if(checkdate[1]>13|| checkdate[1]<1){
		alert("请输入1-12之间的月份");
	}else if(checkdate[2]>31|| checkdate[2]<1){
		alert("请输入1-30之间的日期");
	}else{
		interval = setInterval("caculate()",1000);
	}
	//interval = setInterval("caculate()",1000);
	
}


