// console.log('ok')

//ES6 中 class关键字 是为了实现面向对象编程的的新形式

function Person (name,age) {
    this.name = name;
    this.age =age;
}

Person.info = 'aaa';

Person.prototype.say = function(){
    console.log("这是实例方法");
};
Person.show = function() {
    console.log("这是Person的静态方法")
};
const p1 = new Person('王所多',18);
console.log(p1);
p1.say();
Person.show();//静态方法挂载在构造函数


//----------------------静态-分界线--------------------------

console.log('---------------------------------');
//创建了一个动物类
class Animal{
    //这是类中的构造器
    //每一个类中都有一个构造器,如果我们程序员没有手动设置构造器，那么，可以认为类内部有个隐形的、看不见的 空构造类
    //构造器的作用：就是，每当new 这个类的时候，必然会优先执行构造器中的代码
    constructor(name,age) {
        this.name = name;
        this.age =age;
    }
    static info = 'eee';//用的不多
    jiao(){
        console.log("这是动物的实例方法");


    }
    static show() {//用的不多
        console.log("动物的静态方法")
    }


}

const a1 = new Animal('大华',3);
a1.jiao();
Animal.show();


//注意： 在class 的{} 区间内 只能写 构造器 静态方法 静态属性 实例方法
//注意： class关键字内部 还是用原来的配方来实现的，所以说 我们把class关键字 称作 语法糖






