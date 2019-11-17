import React from 'react'//创建组件 虚拟DOM元素 生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟DOM元素在页面上展示

//导入Hello组件
//默认，如果不做单独的配置的话，不能省略.jsx后缀名
import  Hello from './components/Hello'
//@符号 表示项目根目录中src这一层父目录
const dog={
    name:'大黄',
    age:3,
    gender:'雄',
};
ReactDOM.render(<div>
        {/*<Hello name={dog.name} age={dog.age} gender={dog.gender}></Hello>*/}
        <Hello {...dog}></Hello>

    </div>,document.getElementById('app')
);


//ES6里面的展开运算符
// var o2 = {
//
//     age:22,
//     address:'中国北京',
//     phone:'12345555'
// };
//
// var o1 ={
//     name:'zs',
//     ...o2,
// };