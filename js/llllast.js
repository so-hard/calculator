(function () {
    function But(elem, done) {
        this.element = elem;
        this.done = done;
    }

    But.prototype = {
        constructor: But,
        bindAc: function bindAc() {
            // console.log(x.element.length);
            switch (this.element.length > 1) { // 判断传进的 文本节点的长度
                case true:
                    for (let i = 0; i < this.element.length; i++) {
                        this.element[i].onclick = this.done; // 遍历元素添加点击事件
                    }
                    break;
                default:
                    this.element[0].onclick = this.done;
            }
        },
        unBind: function unBind() {
            switch (this.element.length > 1) { // 判断传进的 文本节点的长度
                case true:
                    for (let i = 0; i < this.element.length; i++) {
                        this.element[i].onclick = null; // 循环解绑点击事件
                    }
                    break;
                default:
                    this.element[0].onclick = null;
            }
        }
    }

    function fn(obj) {
        for (let v in obj) {
            if (flag == 1) {
                if (v == 'bindAc') {
                    console.log(obj[v]);
                    obj[v]()
                }
            } else {
                if (v == 'unBind') {
                    console.log(obj[v]);
                    obj[v]()
                }
            }
        }
    }

    function showNumAndSave(s) {
        let self = s;
        Screen.innerHTML += self.innerHTML;
        if (Screen.clientWidth > 280) {// 判断输入的数字长度是否超出长度
            BackspaceBut.done();
            alert("is overflow");
        }
        isArr.push(self.innerHTML);
    }

    function numDone() {
        switch (this.innerHTML) {
            case 0:
                //如果第一次点击的是0 的话 不做任何操作
                if (this.innerHTML == 0 && (isArr.length == 1 && isArr[0] == 0)) {
                    break;
                }
                showNumAndSave(this);
                break;
            // 1. 当点击的是小数点时候 如果屏幕中只有0的话直接进行拼接 然后将小数点压入数组
            //2.小数点的拼接只能在前一位置是数字的时候
            case ".":
                if (isArr.length == 1 && isArr[0] == "0") {
                    showNumAndSave(this);
                } else if (!isNaN(isArr[isArr.length - 1])) {
                    showNumAndSave(this);
                }
                break;
            default:
                if ((isArr.length <= 1) && (isArr[0] == "0")) {
                    Screen.innerHTML = this.innerHTML;
                    isArr.push(this.innerHTML);
                    isArr.shift();
                } else {
                    showNumAndSave(this);
                }
        }
    }

    function operaDone() {
        if (!isNaN(isArr[isArr.length - 1]) && (isArr.length >= 1 && isArr[0] != 0)) {
            showNumAndSave(this);
        }
    }

    function equalDone() {
        Screen.innerHTML = eval(Screen.innerHTML);
        isArr.length = 0;
        for (var i = 0; i < Screen.innerHTML.length; i++) {
            isArr.push(Screen.innerHTML[i]);
        }
    }

    function clearDone() {
        isArr.length = 0;
        Screen.innerHTML = 0;
        isArr.push(Screen.innerHTML);
    }

    function backspaceDone() {
        if (isArr.length == 1) {
            Screen.innerHTML = 0;
            isArr[0] = 0;
        } else {
            Screen.innerHTML = Screen.innerHTML.slice(0, -1);
            isArr.pop();
        }
    }

    function swiDone() {
        flag = flag ? 0 : 1;
        let node = this.firstElementChild;
        if (flag == 0) {
            removeClass(node, 'anmate-in');
            addClass(node, 'anmate-out')
            setTimeout(() => { Screen.innerHTML = '' }, 300);
            node.innerHTML = 'off'
        } else {
            removeClass(node, 'anmate-out');
            addClass(node, 'anmate-in')
            setTimeout(() => { Screen.innerHTML = 0 }, 300);
            node.innerHTML = 'on'
        }
        init();
    }

    function addClass(node, name) {
        if (node.className.search(name) !== -1) {
            return
        } else {
            node.className = `${node.className} ${name}`;
            console.log(node.className);

        }
    }

    function removeClass(node, name) {
        let className = node.className;
        if (className.search(name) !== -1) {
            let nameArr = className.split(' ')
            nameArr.pop();
            node.className = nameArr.join(' ');
        }

    }

    function init() {
        fn(NumButs);
        fn(OperatorButs);
        fn(EqualBut);
        fn(ClearBut);
        fn(BackspaceBut);
    };

    let isKeys = document.getElementsByClassName("keys")[0];  // 获取数字和运算符按钮
    let num = isKeys.getElementsByClassName("but"); // 获取数字按钮文本节点对象
    let operator = isKeys.getElementsByClassName("operator"); // 获取运算符文本节点对象
    let equal = isKeys.getElementsByClassName("equal"); // 获取 等于文本节点对象
    let clear = document.getElementsByClassName("clear"); // 获取 清楚文本对象对象
    let backspace = document.getElementsByClassName("backspace");  // 获取回撤文本节点对象
    let Screen = document.getElementsByClassName("screen")[0].firstElementChild; // 获取屏幕对象
    let isArr = [Screen.innerHTML]; // 建立一个数组用来实时储存 屏幕上的数字
    let swi = document.getElementsByClassName("switch");
    let flag = 1;
    let NumButs = new But(num, numDone);
    let OperatorButs = new But(operator, operaDone);
    let EqualBut = new But(equal, equalDone);
    let ClearBut = new But(clear, clearDone);
    let BackspaceBut = new But(backspace, backspaceDone);
    let SwiBtn = new But(swi, swiDone);

    init();
    SwiBtn.bindAc();
})();