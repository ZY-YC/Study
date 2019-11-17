// console.log('ok')

//ES6 中 class关键字 是为了实现面向对象编程的的新形式

function Person (name,age) {
    this.name = name;
    this.age =age;
}

const p1 = new Person('王所多',18);
console.log(p1);



//-----------------------分界线--------------------------

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
    static info = 'eee';


}

const a1 = new Animal('大华',3);
console.log(a1);
console.log(Animal.info);//info是 Animal 的静态属性
