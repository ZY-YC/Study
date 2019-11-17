import React from 'react'

export default class BindEvent extends React.Component {
    constructor(){
        super();
        //私有
        this.state={
            msg:'hh'
        }
    }
    render() {
        return <div>
            <hr/>
            BindEvent组件
            <hr/>
            <button onClick={()=>this.show()}>按钮</button>
            <input type="text" style={{width:'100%'}} value={this.state.msg} onChange={(e)=>this.change(e)}/>
            <h3>{this.state.msg}</h3>
        </div>
    }
    change(e) {
        //拿到文本框框的值
        this.setState({
            msg:e.target.value
        })
    }
    show() {
        //注意 在react中 如果想为state中的数据重新赋值 不能使用 this.state.**;

        // this.state.msg = '匹配成功，恭喜您，开始您的恋爱之旅';

        this.setState({
            msg:'匹配成功，恭喜您，开始您的恋爱之旅'
        });
        console.log("匹配成功，恭喜您，开始您的恋爱之旅");
    }
}

// function Person() {
//
// }
// Person.prototype.say = function(){};
// Person.prototype.show = function() {};



// btn.onClick = function(){
//
// }
// setTimeout(function(){
//    在setTimeout里this永远指向window
// },1000);

