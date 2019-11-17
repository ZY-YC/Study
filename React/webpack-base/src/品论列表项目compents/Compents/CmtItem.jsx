import React from "react"
//第一层封装： 分离
// const itemStyle = {border : '1px solid #ccc', margin:'10px', padding:'10px', boxShadow:'0 0 10px #ccc', margin:'10px',padding:'10px'};
// const userStyle = {fontSize:'14px'};
// const contentStyle = {fontSize:'12px'};
//

//第二层封装 合并
// const styles = {
// //     item :{border : '1px solid #ccc', margin:'10px', padding:'10px', boxShadow:'0 0 10px #ccc', margin:'10px',padding:'10px'},
// //     user : {fontSize:'14px'},
// //     content: {fontSize:'12px'}
// // };

//第三层：抽离为单独的样式表模块
// import styles from '../css/styles'
import cssObj from '../css/CmtItem.css'
console.log(cssObj);


// export default function CmtItem(props) {
//     return <div key={props.id} style={styles.item}>
//         <h1 style={styles.user}>评论人：{props.user}</h1>
//         <h5 style={styles.content}>评论内容： {props.content}</h5>
//     </div>
// }
export default function CmtItem(props) {
    return <div key={props.id} className={cssObj.cmtbox}>
        <h1 className={cssObj.title}>评论人：{props.user}</h1>
        <h5 className={cssObj.content}>评论内容： {props.content}</h5>
    </div>
}