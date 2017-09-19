//3.0 运用对象

function getsome(x ) {
    // console.log(x.element.length);
    switch (x.element.length > 1) { // 判断传进的 文本节点的长度
        case true:
        for (let i = 0; i < x.element.length; i++) {
            x.element[i].onclick = x.done ; // 循环 触发点击事件
        }
            break;
        default:
        x.element[0].onclick = x.done;
    }
};

// 数字按钮的方法
function  numFunction (y ) {
    switch (y.innerHTML) {
        case 0 :
        //如果第一次点击的是0 的话 不做任何操作
            if (y.innerHTML== 0 && (isArr.length == 1&&isArr[0] ==0)) {
                break;
            }
            showNumAndSave ( ) ;
            break;
            // 1. 当点击的是小数点时候 如果屏幕中只有0的话直接进行拼接 然后将小数点压入数组
            //2.小数点的拼接只能在前一位置是数字的时候
            case ".":
            if (isArr.length == 1 && isArr[0] == "0") {
                showNumAndSave ( y) ;
            }else if (!isNaN(isArr[isArr.length-1])){
                showNumAndSave ( y) ;
            }
            break;
            default:
            if((isArr.length<=1)&&(isArr[0]=="0")) {
                Screen.innerHTML=y.innerHTML;
                isArr.push(y.innerHTML);
                isArr.shift();
            }else {
                showNumAndSave (y);
            }
        }
  };

//将按钮的数字与屏幕显示的数字相加放在屏幕上...
function  showNumAndSave( y) {
    Screen.innerHTML  += y.innerHTML;
    if ( Screen.clientWidth > 200) {// 判断输入的数字长度是否超出长度
        console.log(1);
        key.backspaceBtn.done( );
        alert('is overflow');
	}
    isArr.push(y.innerHTML);
};

var Screen = document.getElementsByClassName("screen")[0]; // 获取屏幕对象
var isArr = [Screen.innerHTML]; // 建立一个数组用来实时储存 屏幕的数字
var isKeys= document.getElementsByClassName("keys")[0];  // 获取数字和运算符按钮
var num =  isKeys.getElementsByClassName('but'); // 获取数字按钮文本节点对象
var operator = isKeys.getElementsByClassName('operator'); // 获取运算符文本节点对象
var equal = isKeys.getElementsByClassName('equal'); // 获取 等于文本节点对象
var clear = document.getElementsByClassName('clear'); // 获取 清楚文本对象对象
var backspace = document.getElementsByClassName('backspace');  // 获取回撤文本节点对象

//建立一个  按键对象
var key = {
    numBtn :{
        element : num,
        done : function () {  // 能不能 函数名 来代替匿名函数 作为 方法 ..  2222 怎么精简
            let y = this;
             numFunction (y );
            }
    },
    operatorBtn : {
      element : operator,
      done : function ( ) {
        let y = this;
        if (!isNaN(isArr[isArr.length-1]) && (isArr.length>=1 && isArr[0] != 0)) {
            showNumAndSave(y);
        }
      }
    },
    equalBtn : {
      element : equal,
      done : function ( ) {
        Screen.innerHTML=eval(Screen.innerHTML);
  			isArr.length = 0;
        for (var i = 0; i < Screen.innerHTML.length; i++) {
      		isArr.push( Screen.innerHTML[i]);
      }
    }
  },
    clearBtn : {
        element : clear,
        done : function  ( ) {
        	isArr.length = 0;
        	Screen.innerHTML = 0;
        	isArr.push(Screen.innerHTML);
        }
},
    backspaceBtn : {
        element : backspace,
        done : function ( ) {
            if (isArr.length == 1) {
        		Screen.innerHTML = 0;
        		isArr[0] = 0;
        	}else {
        		Screen.innerHTML=Screen.innerHTML.slice(0,-1);
        		isArr.pop();
        	}
        }
    }
};

    getsome (key.numBtn);
    getsome(key.operatorBtn);
    getsome(key.equalBtn);
    getsome(key.clearBtn);
    getsome(key.backspaceBtn);
// console.log(key.numBtn.element);
// for (var x in key) {
// console.log(x);
// }
//
//
//
// console.log(Object.keys(key));
//
// console.log(Object.getOwnPropertyNames(key));
