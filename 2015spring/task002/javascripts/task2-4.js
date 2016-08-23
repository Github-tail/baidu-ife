window.onload = function(){
	var suggestData = ['Simon', 'Erik', 'Kener'];
	var input = document.getElementById("search-box");
	var lists = document.getElementById("search-list");
	var value = true;
	var now = -1;
	
	input.addEventListener("keyup",function(event){
		if(input.value!="" && value){
			value = false;
			for(var i =0;i<suggestData.length;i++){
				var list = document.createElement("li");
				list.innerHTML = suggestData[i];
				list.style.border = "solid 1px #ddd";
				lists.appendChild(list);
				list.addEventListener("click",function(){
					input.value = this.innerHTML;
					list.style.display = "none";
				},false);
			}
		}
		
		else if(input.value == ""){
			for (var i=0;i<lists.childNodes.length;i++) {
				lists.removeChild(lists.childNodes[i]);
				lists.childNodes[i]=null;
			}
			lists.style.display = "block";
			value = true;
		}
		else{
			var list = lists.getElementsByTagName("li");
			var code = event.keyCode;
			console.log(event.keyCode);
			for (var i=0;i<list.length;i++) {
				list[i].className="";
			}
			//up
			if(code == 38){
				now = select(now-1);
				list[now].className = "active";
			}
			//down
			else if(code == 40){
				now = select(now+1);
				list[now].className ="active";
			}
			//enter
			else if(code == 13 || code ==108){
				input.value = list[now].innerHTML;
				lists.style.display = "none";
			}
		}
		//上下键选择函数
		function select(now){
			if(now<=0){
				return 0;
			}
			else if(now>=suggestData.length-1){
				return suggestData.length-1;
			}
			else{
				return now;
			}
		}
		
	},false)
}



/*******知识点汇总：
1.addEventListener(event,function(){},false);
2.keycode 键盘码;
3.input的value属性值,获取输入框中的值;
4.now为当前位置,now=-1时位置在输入框中.
*******/
//1、自动匹配未实现；2、盲搜匹配未实现