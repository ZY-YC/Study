import React from "react";
//导入评论项子组件
import cssObj from '../css/CmtList.css'
import CmtItem from "./CmtItem";
//如果在引用某个包的时候 这个包被安装到了node_modules目录的时候
//则 可以省略 node 这一层目录 直接以包名开始引入自己的模块或样式
import bootcss from 'bootstrap/dist/css/bootstrap.css'

export default  class CmtList extends React.Component{
    constructor() {
        super();
        this.state = {//评论列表数据
            CommentList: [
                {id:1,user:'张三',content:'沙发'},
                {id:2,user:'李四',content:'板凳'},
                {id:3,user:'王五',content:'椅子'},
                {id:4,user:'赵六',content:'砖头'},
                {id:5,user:'田七',content:'泥巴'}
            ]

        }
    }
    // render() {
    //     return <div>
    //         <h1 style={{  color:'red',
    //             fontSize:'35px',
    //             zIndex:3,
    //             fontWeight:200,
    //             textAlign:'center'}}>这是评论列表组件</h1>
    //         {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
    //     </div>
    // }
    render() {
        return <div>
            <h1 className={cssObj.title}>这是评论列表组件</h1>
            <button className={bootcss.btn}>按钮</button>

            {/*<div className="panel panel-primary">*/}

            {/*</div>*/}
            {this.state.CommentList.map(item => <CmtItem {...item} key={item.id}></CmtItem>)}
        </div>
    }
}