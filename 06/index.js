var result = 0;
var operations = "";
window.onload = function() {
    document.getElementById("btnList").addEventListener("click", function(e) {
        addOp(e);
    });
    document.getElementById("opList").addEventListener("click", function(e) {
        addOp(e);
    });
}

function addOp(e) {
    if (e.target && e.target.nodeName == "LI") {
        let current_op = e.target.id.replace("btn-", "");
        // console.log(current_op);
        switch (current_op) {
            case "=":
                {
                    try {
                    	//replaced eval with tokenizer and parser
                    	// result = eval(operations);
                    	
	           // console.log(operations);
	            result  = countSuffixExpression(suffixExpression(tokenizer(operations)));
                        if (isNaN(result))
                        		result = "Error";
                        // console.log(result);
                    } catch (e) {
                        result = "Error";
                    }
                    document.getElementById("result").innerHTML = result;
                    break;
                }
            case ("clr"):
                {
                    result = 0;
                    operations = "";
                    break;
                }
            case ("del"):
                {
                    operations = operations.slice(0, -1);
                    break;
                }
            default:
                // console.log(operations)
                if (operations == undefined) {
                    operations = current_op;
                } else {
                    operations += current_op;
                }
        }

        document.getElementById("operations").innerHTML = operations.replace("*", "&times;").replace("/", "&divide;");
    }
}


//Infix to Postfix
function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
    this.printElement = printStack;

    //注意++操作符的位置，它放在this.top的后面，这样新入栈的元素就被放在top的当前位置对应的位置，同时top自加1，指向下一个位置
    function push(element){
        this.dataStore[this.top++] = element;
    }
    //返回栈顶元素，同时top的位置减1
    function pop(){
        return this.dataStore[--this.top];
    }
    //peek()方法返回数组的第top-1个位置的元素，即栈顶元素
    function peek(){
        return this.dataStore[this.top-1];
    }
    //将top的值设置0，即清空一个栈
    function clear(){
        this.top = 0;
    }
    //返回变量top的值即为栈内元素的个数
    function length(){
        return this.top;
    }
    
    //输出栈内元素
    function printStack(){
        while (this.top>0){
            document.writeln(this.pop()+"&nbsp;&nbsp;");
        }
    }
}

function tokenizer(input) {
    let current = 0;
    let tokens = [];
    while (current < input.length) {
        let char = input[current];

        //Test parenthesis
        if (char === '(') {
            tokens.push({
                type: 'paren',
                value: '(',
            });
            current++;
            continue;
        }

        if (char === ')') {
            tokens.push({
                type: 'paren',
                value: ')',
            });
            current++;
            continue;
        }

        let NUMBERS = /[0-9]/;
        if (NUMBERS.test(char)) {

            let value = '';

            while (NUMBERS.test(char)) {
                value += char;
                char = input[++current];
            }
            tokens.push({
                type: 'number',
                value
            });
            continue;
        }


        let OPS = /[\/\+\-\*]/;

        if (OPS.test(char)) {

            let value = '';

            while (OPS.test(char)) {
                value += char;
                char = input[++current];
            }

            tokens.push({
                type: 'ops',
                value
            });
            continue;
        }
    }
    return tokens;
}
/*-------------------栈将中缀表达式转换成后缀表达式-------------------*/

function suffixExpression(tokens){
    var stack = new Stack();
    var outStack = new Array();
    for (var i=0; i<tokens.length; ++i) {
    	

    return outStack;

}
/*-------------------用栈结构求后缀表达式的值-------------------*/

function countSuffixExpression(str){
    var stack = new Stack();
    for (var i=0; i<str.length; i++) {
        if(isNaN(str[i])){
            stack.push( eval( stack.pop() + str[i] + stack.pop()) );
        }else{
            stack.push(str[i])
        }
    }
    return stack.pop();
    // document.write(stack.pop());
}
