// console.log("ok")
import React from 'react'
import ReactDOM from 'react-dom'

class Person{
    constructor(name,age) {
        this.name = name;
        this.age = age;

    }
    sayHello(){
        console.log('Hello');
    };
}
class American extends  Person{
    constructor(name,age){
        super(name,age);
    }
}
class Chinese extends Person{
    constructor(name,age,idNumber){
        //在子类中，this只能在super后使用
        super(name,age);
        this.idNumber = idNumber;
    }
}
const a1 = new American('jack',32);
const c1 = new Chinese('张三',20,'130428******');
console.log(a1,c1);



