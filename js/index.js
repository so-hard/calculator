//
// // 1. 找到所有的数字按钮
//  var btn = document.getElementsByClassName("but");
// //2. 找到屏幕元素的文本节点
// var Screen = document.getElementsByClassName("screen")[0];
// //3.找到等号按钮
// var dengyu = document.getElementsByClassName("eval")[0];
// //4 找到退格按钮
// var backspace = document.getElementsByClassName("backspace")[0];
// // 判断
//  var markTwo ;
// var mark = 1;
//  //3. 循环数字按钮绑定点击事件  还有等号 运算符按钮能多次点击
// // 解决方法
// // 运算符按钮和"."
// var once = document.getElementsByClassName("once");
//
// for (let i = 0; i < once.length; i++) {
//   once[i].onclick = oncef;
// }
//
//  for (let i =0; i < btn.length; i++) {
//    btn[i].onclick = save;
//  }
//
// dengyu.onclick = calculate;
// //4.为清除键绑定点击事件
// var clear = document.getElementsByClassName("clear")[0];
// clear.onclick = cle;
//
// function backspace ( )  {
//
// }
//
//
// function cle() {
//   Screen.innerHTML= 0;
//   mark=1;
//   markTwo=0;
// }
//
// function oncef () {
//   if (markTwo){
//     Screen.innerHTML += this.innerHTML;
//     markTwo = 0;
//   }
// }
//
// function  calculate() {
//   Screen.innerHTML= eval(Screen.innerHTML)
// }
//
//  function save() {
//    markTwo = 1;
//    if (mark) {
//      Screen.innerHTML = this.innerHTML;
//      mark = 0;
//    }else {
//      Screen.innerHTML += this.innerHTML;
//    }
//  }

// 2.0
// 获取key里面的按钮所有的按钮 数字 小数点和 功能按钮 将其保存在 btns 中

var isKeys= document.getElementsByClassName("keys")[0];
var  btns =isKeys. getElementsByTagName("span");
// 获取屏幕对象的文本节点
var Screen = document.getElementsByClassName("screen")[0];
var isArr = [Screen.innerHTML ];
var clearBtn = document.getElementsByClassName("clear")[0];
var backspaceBtn = document.getElementsByClassName("backspace")[0];
for (let i = 0; i < btns.length; i++) {
	btns[i].onclick = function ( ) {

		//isNum ( );
		// console.log(isArr);
		//当按钮是数字
		if (!isNaN(this.innerHTML)) {
			//如果第一次点击的是0 的话 不做任何操作将 0 放入数组中 然后删除队列的一个元素
			if (this.innerHTML== 0 && (isArr.length == 1&&isArr[0] ==0)) {
				isArr.push(this.innerHTML);
				isArr.shift();
			}
			//如果第一次点击的数字按钮 用按钮的文本节点替换Screen的文本节点 将按钮的文本节点压入数组 然后删除队列的第一个元素
			// 否则 就进行拼接 然候将文本节点进行拼接;
			else if((isArr.length<=1)&&(isArr[0]=="0")) {
				Screen.innerHTML=this.innerHTML;
				isArr.push(this.innerHTML);
				isArr.shift();
			}
			else {
				Screen.innerHTML+=this.innerHTML;
				isArr.push(this.innerHTML);
			} // 1. 当点击的是小数点时候 如果屏幕中只有0的话直接进行拼接 然后将小数点压入数组  2.小数点的拼接只能在前一位置是数字的时候
		} else if ( this.innerHTML == ".") {
			if (isArr.length == 1 && isArr[0] == "0") {
				Screen.innerHTML += this.innerHTML;
				isArr.push(this.innerHTML);
			}else if (!isNaN(isArr[isArr.length-1])){
				isArr.push(this.innerHTML);
				Screen.innerHTML += this.innerHTML;
			} // 当点击的是 = 号的时候 调用 eval 方法进行运算 然后清空数组 调用stringToAr 将结果转化成数组
		}else if (this.innerHTML == "=") {
			Screen.innerHTML=eval(Screen.innerHTML);
			isArr.length = 0;
			stringToArr(Screen.innerHTML , isArr );
			// console.log(isArr);
		}else { //剩下的就是按钮就是运算符 当运算符点击前的元素是数字且
			if (!isNaN(isArr[isArr.length-1]) && (isArr.length>=1 && isArr[0] != 0)) {
				Screen.innerHTML += this.innerHTML;
				isArr.push(this.innerHTML);
			}
		}
			isOv (Screen) ;
	};
}

clearBtn.onclick = doClear;
backspaceBtn .onclick = doBackspace;

function doClear ( ) {
	isArr.length = 0;
	Screen.innerHTML = 0;
	isArr.push(Screen.innerHTML);
}

function doBackspace () {
	// console.log(isArr);
	if (isArr.length == 1) {
		Screen.innerHTML = 0;
		isArr[0] = 0;
	}else {
		Screen.innerHTML=Screen.innerHTML.slice(0,-1);
		isArr.pop();
	}
}

function stringToArr (theString , theArr ) {
	for (var i = 0; i < theString.length; i++) {
		theArr.push(theString[i]);
	}
	return theArr;
}


function isOv(one, ) {
	if (one.clientWidth >200) {
		doBackspace ();
	}
}
