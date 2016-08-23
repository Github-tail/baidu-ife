	
	var container = document.getElementById("container");
	var leftpar = document.getElementById("left-parent");
	var rightpar = document.getElementById("right-parent");
	var leftchild = leftpar.getElementsByTagName("div");
	var rightchild = rightpar.getElementsByTagName("div");
	
	var childHeight=51;
	
	var leftparLB=leftpar.offsetLeft;
	var leftparRB=leftpar.offsetLeft+leftpar.offsetWidth;
	var rightparLB=rightpar.offsetLeft;
	var rightparRB=rightpar.offsetLeft+rightpar.offsetWidth;


	for (var i=0;i<leftchild.length;i++) {
		leftchild[i].index = i;
		leftchild[i].style.top = i*childHeight+"px";
		drg(leftchild[i]);
	}
	for (var i=0;i<rightchild.length;i++) {
		rightchild[i].index = i;
		rightchild[i].style.top = i*childHeight+"px";
		drg(rightchild[i]);
	}

function drg(obj){
	var mousedown = false;
	obj.addEventListener("mousedown",function(){
		this.className="active";
		mousedown = true;
	},false);
	
	obj.addEventListener("mousemove",function(){
		if(mousedown){
			this.style.zIndex = 5;
			this.style.left=event.clientX-this.parentNode.offsetLeft-this.offsetWidth/2+"px";
			this.style.top=event.clientY-this.parentNode.offsetTop-this.offsetHeight/2+"px";
		}
	},false);
	
	obj.addEventListener("mouseup",function(){
		this.className="";
		if (this.parentNode.className =="left") {
			if(event.clientX>=rightparLB && event.clientX<=rightparRB){
				remove(leftchild,this);
				add(rightpar,rightchild);
			}else{
				reset(this);
			}
		} 
		else{
			if(event.clientX>=leftparLB && event.clientX<=leftparRB){
				remove(rightchild,this);
				add(leftpar,leftchild);
			}else{
				reset(this);
			}
			mousedown=false;
		}
	},false);
	
	function remove(list, obj) {
        obj.parentNode.removeChild(obj);
        for (var i = 0; i < list.length; i++) {
            list[i].index = i;
            list[i].style.top = i * childHeight + "px";
        }
   }
    function add(par, list) {
        var newDiv = document.createElement("div");
        newDiv.index = list.length;
        newDiv.style.top = list.length * childHeight + "px";
        par.appendChild(newDiv);
        drg(newDiv);
    }
    function reset(obj) {
        obj.style.zIndex = 1;
        obj.style.left = -1 + "px";
        obj.style.top  = obj.index * childHeight + "px";
    }
}


/*知识点汇总：
 *1、
 Cannot read property 'getElementsByTagName' of null报错，将script放在页面最后就行了；
 *2、
 offsetHeight:获取对象相对于版面或由父坐标 offsetParent 属性指定的父坐标的高度
offsetLeft:获取对象相对于版面或由 offsetParent 属性指定的父坐标的计算左侧位置
offsetTop:获取对象相对于版面或由 offsetTop 属性指定的父坐标的计算顶端位置
*3、
event.clientX 相对文档的水平坐标
event.clientY 相对文档的垂直坐标
event.offsetX 相对容器的水平坐标
event.offsetY 相对容器的垂直坐标
*4、
obj.offsetTop 指 obj 距离上方或上层控件的位置，整型，单位像素。
obj.offsetLeft 指 obj 距离左方或上层控件的位置，整型，单位像素。
obj.offsetWidth 指 obj 控件自身的宽度，整型，单位像素。
obj.offsetHeight 指 obj 控件自身的高度，整型，单位像素。
5、mousedown点击选中，
mouseup未点击，通过在x轴坐标位置是否在left、right容器左右边界内，对红色小容器进行移除、添加和重置操作。
mousemove移动事件：this.style.left=event.clientX-this.parentNode.offsetLeft-this.offsetWidth/2+"px";
			    this.style.top=event.clientY-this.parentNode.offsetTop-this.offsetHeight/2+"px";
 * */