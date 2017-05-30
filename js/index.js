// var a = document.getElementsByTagName("span")[0];
// a.onclick = ll;
// function ll() {
//   var y =  this.innerHTML;
//   console.log(y);
// }
// 1. 找到所有的span 按钮
 var but = document.getElementsByClassName("but");

//2. 找到屏幕元素的文本节点
var Screen = document.getElementsByClassName("screen")[0];

//3.找到等号按钮
var dengyu = document.getElementsByClassName("eval")[0];
// 判断
 var bollt ;
var boll = 1;
 //3. 循环数字按钮绑定点击事件  还有等号 运算符按钮能多次点击
  // 解决方法
var once = document.getElementsByClassName("once");
for (var i = 0; i < once.length; i++) {
  once[i].onclick = oncef;
}


 for (var i =0; i < but.length; i++) {
   but[i].onclick = save;
 }


dengyu.onclick = calculate;

//4.为清除键绑定点击事件
var clear = document.getElementsByClassName("clear")[0];
clear.onclick = cle;


function cle() {
  Screen.innerHTML= 0;
  boll=1;
}

function oncef () {
  if (bollt) {
    Screen.innerHTML += this.innerHTML;
    bollt = 0;
  }
}

function  calculate() {
  Screen.innerHTML= eval(Screen.innerHTML)
}


 function save() {
   bollt = 1;
   if (boll ) {
     Screen.innerHTML = this.innerHTML;
     boll = 0;
   }else {
     Screen.innerHTML += this.innerHTML;
   }
 }
