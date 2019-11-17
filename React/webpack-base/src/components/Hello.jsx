import React from 'react'//创建组件 虚拟DOM元素 生命周期

//创建并导出Hello
export default function Hello(props) {
    return <div>这是Hello组件--{props.name}--{props.age}---{props.gender}</div>
}



//把组件暴露出去
// export default  Hello