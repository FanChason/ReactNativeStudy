import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";

const template = `<div>
        <span>hello world</span>
    </div>`

const flag = 0;
export default class ES6Test extends Component {


    render() {
        return (
            <View style={styles.container}>
                <Text>ES6</Text>
                {/*<Text>{template}</Text>*/}
            </View>
        )
    }

    /****************** var ****************/

    /*
    * 在ES6之前，我们都是用var关键字声明变量。
    * 无论声明在何处，都会被视为声明在函数的最顶部(不在函数内即在全局作用域的最顶部)。
    * 这就是函数变量提升
    * */
    aa() {
        if (flag) {
            var test = 'hello man';
            console.log(test);
        } else {
            console.log(test);
        }
    }

    aa1() {
        var test // 变量提升，函数最顶部
        if (flag) {
            test = 'hello man'
        } else {
            //此处访问 test 值为 undefined
            console.log(test)
        }
        //此处访问 test 值为 undefined
    }

    /****************** var ****************/

    /****************** let ****************/

    /*
    * let 的作用域是在它所在当前代码块，但不会被提升到当前函数的最顶部。
    */
    bb() {
        if (flag) {
            let test = 'hello man'
        } else {
            //test 在此处访问不到
            try {
                console.log(test)
            } catch (e) {
                console.log(e) // ReferenceError: test is not defined
            }
        }
    }

    /****************** let ****************/

    /****************** const ****************/
    cc() {
        const name = 'lux'
        // name = 'joe' // 再次赋值此时会报错
        /* Attempt to assign to const or readonly variable
         Inspection info: Checks JavaScript referenced variables and fields to be valid ones. The validation works in JavaScript, html or jsp files.
         */
    }

    cc1() {
        const student = {name: 'cc'}
        console.log(student)

        // 没毛病
        student.name = 'yy'

        console.log(student)
        // 如果这样子就会报错了
        // student  = { name: 'yy' }
    }

    cc2() {
        try {
            // TDZ(暂时性死区)
            console.log(value) // 报错? 没有报错啊
            let value = 'lala'
            console.log(value)
        } catch (e) {
            console.log(e)
        }

    }

    /****************** cosnt ****************/

    /****************** 面试题 ****************/
    dd() {
        var funcs = []
        for (var i = 0; i < 10; i++) {
            funcs.push(function () {
                console.log(i)
            })
        }
        funcs.forEach(function (func) {
            func()
        })
    }

    /*
    * ES5知识，我们可以利用“立即调用函数”解决这个问题
    */
    dd1() {
        var funcs = []
        for (var i = 0; i < 10; i++) {
            funcs.push(
                (function (value) {
                    return function () {
                        console.log(value)
                    }
                })(i)
            )
        }
        funcs.forEach(function (func) {
            func()
        })
    }

    /*
    * 再来看看es6怎么处理的
    */
    dd2() {
        const funcs = []
        for (let i = 0; i < 10; i++) {
            funcs.push(function () {
                console.log(i)
            })
        }
        funcs.forEach(func => func())
    }

    /****************** 面试题 ****************/

    /****************** 字符串 ****************/
    /******* 模板字符串 ********/
    ee() {
        //ES5
        var name = 'lux'
        console.log('hello' + name)
        //es6
        const name2 = 'lux'
        console.log(`hello ${name2}`) //hello lux
    }

    /******* 模板字符串 ********/

    ee1() {
        // ES5
        var msg = "Hi \
    man! \
        "
        console.log(msg);

        // ES6
        var msg1 = `Hi
        man!`
        console.log(msg1);

    }

    ee2() {
        // 1.includes：判断是否包含然后直接返回布尔值
        const str = 'hahay'
        console.log(str.includes('y')) // true

        // 2.repeat: 获取字符串重复n次
        const str1 = 'he'
        console.log(str1.repeat(3)) // 'hehehe'
        //如果你带入小数, Math.floor(num) 来处理
        // s.repeat(3.1) 或者 s.repeat(3.9) 都当做成 s.repeat(3) 来处理

        // 3. startsWith 和 endsWith 判断是否以 给定文本 开始或者结束
        const str2 = 'hello world!'
        console.log(str2.startsWith('hello')) // true
        console.log(str2.endsWith('!')) // true

        // 4. padStart 和 padEnd 填充字符串，应用场景：时分秒
        setInterval(() => {
            const now = new Date()
            const hours = now.getHours().toString()
            const minutes = now.getMinutes().toString()
            const seconds = now.getSeconds().toString()
            console.log(`${hours.padStart(2, 0)}:${minutes.padStart(2, 0)}:${seconds.padStart(2, 0)}`)
        }, 1000)
    }

    ee3() {
        const address = '北京海淀区'
        const name = 'lala'
        const str = `${name}在${address}上班...`
        console.log(str) // lala在北京海淀区上班...
    }

    /****************** 字符串 ****************/


    /****************** 函数 ****************/
    ff(num) {
        num = num || 200

        //当传入num时，num为传入的值
        //当没传入参数时，num即有了默认值200
        return num
    }

    ff2(num = 200) {
        return num
    }

    /****************** 函数 ****************/

    /****************** 箭头函数 ****************/
    gg() {
        return [1, 2, 3].map(x => x + 1)
    }

    gg2() {
        return [1, 2, 3].map((function (x) {
            return x + 1
        }).bind(this))
    }

    gg3() {
        var people = name => 'hello ' + name
        console.log(people('world'))
    }

    gg4() {
        var people = (name, age) => {
            const fullName = 'hello ' + name
            return fullName
        }
        console.log(people('world'))

        //如果缺少()或者{}就会报错
    }

    gg5() {
        // 请使用ES6重构以下代码

        var calculate = function (x, y, z) {
            if (typeof x != 'number') {
                x = 0
            }
            if (typeof y != 'number') {
                y = 6
            }

            var dwt = x % y
            var result

            if (dwt == z) {
                result = true
            }
            if (dwt != z) {
                result = false
            }

            return result
        }

        console.log(calculate(4, 3, 1))
        console.log(calculate(4, 2, 0))
        console.log(calculate(4, 2, 1))

    }

    gg6() {
        const calculate = (x, y, z) => {
            x = typeof x !== 'number' ? 0 : x
            y = typeof y !== 'number' ? 6 : y
            return x % y === z
        }

        console.log(calculate(4, 3, 1))
        console.log(calculate(4, 2, 0))
        console.log(calculate(4, 2, 1))
    }

    /****************** 箭头函数 ****************/

    /****************** 拓展对象功能 (知识点：Object.assign()浅复制) ****************/
    hh() {
        const objA = {name: 'cc', age: 18}
        const objB = {address: 'beijing'}
        const objC = {} // 这个为目标对象
        const obj = Object.assign(objC, objA, objB)

        // 我们将 objA objB objC obj 分别输出看看
        console.log(objA)   // { name: 'cc', age: 18 }
        console.log(objB) // { address: 'beijing' }
        console.log(objC) // { name: 'cc', age: 18, address: 'beijing' }
        console.log(obj) // { name: 'cc', age: 18, address: 'beijing' }

        console.log('----------------------------')
        // 是的，目标对象ObjC的值被改变了。
        // so，如果objC也是你的一个源对象的话。请在objC前面填在一个目标对象{}

        const objC1 = {}
        const obj1 = Object.assign({}, objC1, objA, objB)
        console.log(objA)   // { name: 'cc', age: 18 }
        console.log(objB) // { address: 'beijing' }
        console.log(objC1) // {}
        console.log(obj1) // { name: 'cc', age: 18, address: 'beijing' }
    }

    /****************** 拓展对象功能 ****************/

    /****************** 更方便的数据访问--解构 ****************/

    /*
    * ES5
    */
    jj() {
        const people = {
            name: 'lux',
            age: 20
        }
        const name = people.name
        const age = people.age
        console.log(name + ' --- ' + age)
    }

    /*
     * ES6
     */
    jj1() {

        // 对象
        const people = {
            name: 'lux',
            age: 20
        }

        const {name, age} = people
        console.log(`${name}---${age}`)

        // 数组
        const arr = ['Tom', 'Jerry']
        const [a,b] = arr // 注意数组是[], 对象是{}
        console.log(`${a}---${b}`)

    }

    /****************** 更方便的数据访问--解构 ****************/

    /****************** 6.Spread Operator 展开运算符 ****************/
    kk() {
        //数组
        const color = ['red', 'yellow']
        const colorful = [...color, 'green', 'pink']
        console.log(colorful) //[red, yellow, green, pink]

        //对象
        const alp = { fist: 'a', second: 'b'}
        const alphabets = { ...alp, third: 'c' }
        console.log(alphabets) //{ "fist": "a", "second": "b", "third": "c"
    }

    kk1() {
        //数组
        const number = [1,2,3,4,5]
        const [first, ...rest] = number
        console.log(rest) //2,3,4,5

        //对象
        const user = {
            username: 'lux',
            gender: 'female',
            age: 19,
            address: 'peking'
        }
        const { username, ...rest1 } = user
        console.log(rest1) //{"address": "peking", "age": 19, "gender": "female"
    }

    /*组合*/
    kk2() {
        const first = {
            a: 1,
            b: 2,
            c: 6,
        }
        const second = {
            c: 3,
            d: 4
        }
        const total = { ...first, ...second }
        console.log(total) // { a: 1, b: 2, c: 3, d: 4 } 当然如果有重复的属性名，右边覆盖左边
    }
    /****************** 6.Spread Operator 展开运算符 ****************/

    /****************** Promise面试题 ****************/
    ll() {
        setTimeout(function() {
            console.log(1)
        }, 0);
        new Promise(function executor(resolve) {
            console.log(2);
            for( var i=0 ; i<10000 ; i++ ) {
                i == 9999 && resolve();
            }
            console.log(3);
        }).then(function() {
            console.log(4);
        });
        console.log(5); // 2 3 5 4 1
    }

    ll1() {
        for (var i = 0; i < 5; i++) {
            console.log(i);
        }
    }

    ll2() {
        for (var i = 0; i < 5; i++) {
            setTimeout(function() {
                console.log(i);
            }, 1000 * i);
        }
    }

    ll3() {
        for (var i = 0; i < 5; i++) {
            (function (i) {
                setTimeout(function () {
                    console.log(i);
                }, i * 1000)
            })(i);
        }
    }

    ll4() {
        for (var i = 0; i < 5; i++) {
            (function () {
                setTimeout(function () {
                    console.log(i);
                }, i * 1000)
            })(i);
        }
    }

    ll5() {
        for (var i = 0; i < 5; i++) {
            setTimeout((function(i) {
                console.log(i);
            })(i), i * 1000);
        }
    }
    /****************** Promise面试题 ****************/

    /****************** Generators****************/
    mm() {
        // 生成器
        function *createIterator() {
            yield 1;
            yield 2;
            yield 3;
        }

        // 生成器能像正规函数那样被调用，但会返回一个迭代器
        let iterator = createIterator();

        console.log(iterator.next().value); // 1
        console.log(iterator.next().value); // 2
        console.log(iterator.next().value); // 3
    }

    mm1() {
        // 生成器
        function *createIterator() {
            yield 1;
            yield 2;
            yield 3;
        }

        // 创建迭代器，让它在别处可用
        let task = createIterator();

        // 启动任务
        let result = task.next();
        console.log(result)

        // 递归使用函数来保持对 next() 的调用
        function step() {

            // 如果还有更多要做的
            if (!result.done) {
                result = task.next();
                console.log(result)
                step();
            }
        }

        // 开始处理过程
        step();
    }
    /****************** Generators ****************/

    componentDidMount() {

        this.mm1();

        // console.log(this.gg())
        // console.log(this.gg2())

        // console.log(this.ff())
        // console.log(this.ff(0))
        // console.log(this.ff(300))
        //
        // console.log(this.ff2())
        // console.log(this.ff2(0))
        // console.log(this.ff2(300))

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});