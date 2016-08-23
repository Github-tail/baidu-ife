
function getHobby(arr){
	var array = [];
	for (var i=0;i<arr.length;i++) {
		if(array.indexOf(arr[i])<0 && arr[i]!==""){
			array.push(arr[i]);
		}
	}
	return array;
}

function setHobby(){
	var input = document.getElementById("input_hobby1").value;
	console.log(input);
	var hobby = getHobby(input.split(","));
	console.log(hobby);
	var para = document.createElement("p");
	para.innerHTML = hobby;
	var phase = document.getElementById("hobby_phase1");
	phase.appendChild(para);
}


function setHobby2(){
	var input =document.getElementById("input_hobby2").value;
	console.log(input);
	var hobby = getHobby(input.split(/[\n\s\t,;，；、]*/));
	console.log(hobby);
	var para = document.createElement("p");
	para.innerHTML = hobby;
	var phase = document.getElementById("hobby_phase2");
	phase.appendChild(para);
}


function setHobby3(){
	var input = document.getElementById("input_hobby3").value.split(",");
	console.log(input);
	
	
	if(input.length<=10 && input.length>0){
		var hobby = getHobby(input);
		console.log(hobby);
		for(i=0;i<hobby.length;i++){
			var box = document.createElement("input");
			box.type = "checkbox";
			box.id = "box"+i;
			var label = document.createElement("label");
			label.for = box.id;
			label.innerHTML = hobby[i]+"<br>";
			var phase= document.getElementById("hobby_phase3");
			phase.appendChild(box);
			phase.appendChild(label);
		}
	}else if(input.length== 0){
		var warn = document.getElementById("warning");
		warn.innerHTML = "你必须输入一个爱好";
	}else{
		var warn = document.getElementById("warning");
		warn.innerHTML = "你最多可以输入10个爱好";
	}
}