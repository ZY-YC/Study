import React from 'react'//创建组件 虚拟DOM元素 生命周期
import ReactDOM from 'react-dom'//把创建好的组件和虚拟DOM元素在页面上展示


import './class创建组件'
import './calss实例方法和静态方法'
import './extends继承'
import './继承-公共方法'
// import './components/PersonActive'

class PersonActive extends React.Component {
    constructor(){
        //构造器
        //由于PersonActive 继承了React.Component 这个父类 所以i 自定义构造器时 必须调用super()
        super();
        this.state = {
            msg:'Hello'
        }
    }
    render() {
        console.log("1");

        //在class关键字创建的组件中，如果想使用 外界传过来的props参数 不需要接收 直接this.props.****ike

        //注意：在class组件内部 this表示 当前组件的实例对象
        return <div>
            <h3>{this.state.msg}</h3>
            {this.props.name}---{this.props.age}</div>
    }
}
const user={
    name:'ZY',
    age: 20,
    gender:'男'
};
ReactDOM.render(<div>
        123

        <PersonActive name={user.name} age={user.age}></PersonActive>
        <hr/>
    </div>,document.getElementById('app')
);
