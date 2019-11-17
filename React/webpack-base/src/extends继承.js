// console.log("ok")

class Person{
    constructor(name,age) {
        this.name = name;
        this.age = age;

    }
}
class American extends  Person{}
class Chinese extends Person{}
const a1 = new American('jack',32);
const c1 = new Chinese('张三',20);
console.log(a1,c1);


