function getStyle(obj,attr) {
    if(obj.currentStyle) {
        return obj.currentStyle[attr];
    }
    else {
        return getComputedStyle(obj,false)[attr];
    }
}

function startMove(obj,json,endFn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var bBtn = true;
        for(var attr in json) {
            var iCur = 0;
            iCur = parseInt(getStyle(obj,attr)) || 0;
            var iSpeed = (json[attr] - iCur)/8;
            iSpeed = iSpeed >0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if(iCur!=json[attr]) {
                bBtn = false;
            }
            obj.style[attr] = iCur + iSpeed + 'px';
        }
        if(bBtn) {
            clearInterval(obj.timer);
            if(endFn) {
                endFn.call(obj);
            }
        }
    },30);
}


window.onload = function(){
	
	var setup = {
		order:"positive",//默认为正序播放
		loop:true,//默认为循环
		interval:3000//默认间隔时长
	};
	
	
	var container = document.getElementById("carousel-container");
	var content = container.getElementsByTagName("ul")[0];
	var lists = content.getElementsByTagName("li");
	var imgs = content.getElementsByTagName("img");
	var btns = document.getElementById("carousel-btn");
	var btn = btns.getElementsByTagName("a");
	
	var imgWidth = 720;
	content.style.width = imgs.length*imgWidth+"px";
	//正、逆序播放
	var direction;
	if(setup.order == "positive"){
		direction = "left";
		content.style.left = 0;
		for (var i=0;i<lists.length;i++) {
			lists[i].style.float = "left";
		}
		for (var i=0;i<imgs.length;i++) {
			imgs[i].style.left =0;
		}
	}
	else{
		content.style.right = 0;
		for (var i=0;i<lists.length;i++) {
			lists[i].style.float ="right";
		}
		for (var i=0;i<imgs.length;i++) {
			imgs[i].style.right = 0;
		}
	}
	
	//小点设置
	for (var i=0;i<btn.length;i++) {
		btn[i].index = i;
		btn[i].onclick = function(){
			for (var n=0;n<btn.length;n++) {
				btn[n].className ="";
			}
			this.className = "active";
			if (direction == "left") {
				startMove(content,{
					left:-this.index*imgWidth
				});
			} else{
				startMove(content,{
					right:-this.index*imgWidth
				});
			}
		}
	}
	
	
}

/*知识点汇总：
 * 1、需先设置默认状态下的初始值，后续作为判定条件；（order：positive）
 * 2、正序播放图片，图片向左移动，遍历li，设置li样式为float=left、遍历img，设置img的样式为left=0；逆序播放反之；
 * 3、ul内容的width随图片的播放在变动，=imgs.length*imgWidth+"px";
 * 4、点击小点出发onclick事件，小点点击事件与图片关联通过：left/right：btn[i].index*imgWidth实现；
 */