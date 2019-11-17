import React from 'react'
import ReactDOM from 'react-dom'
//导入子组件
import CmtList from './品论列表项目compents/Compents/CmtList'
import BindEvent  from "./品论列表项目compents/Compents/BindEvent";

//评论向子组件
//使用function
// function CmtItem(props) {
//     return <div key={props.id}>
//         <h1>评论人：{props.user}</h1>
//         <h5>评论内容： props.content}</h5>
//     </div>
// }
// //定义父组件 使用class
// class CmtList extends React.Component{
//     constructor() {
//         super();
//         this.state = {//评论列表数据
//             CommentList: [
//                 {id:1,user:'张三',content:'沙发'},
//                 {id:2,user:'李四',content:'板凳'},
//                 {id:3,user:'王五',content:'椅子'},
//                 {id:4,user:'赵六',content:'砖头'},
//                 {id:5,user:'田七',content:'泥巴'}
//             ]
//
//         }
//     }
//     render() {
//         return <div>
//             <h1 >这是评论列表组件</h1>
//             {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
//         </div>
//     }
// }


ReactDOM.render(
    <div>
        <CmtList></CmtList>
        <BindEvent></BindEvent>
    </div>,document.getElementById("app")
);