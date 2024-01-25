function creatTextNode(text){
    return{
        type:"TEXT_ELEMENT",
        props:{
            nodeValue:text,
            children:[]
        }
    }
}
function createElement(type, props, ...children) {
    return{
        type: type,
        props: {
            ...props,
            children: children.map(child => 
                typeof child === 'object' ? child : creatTextNode(child))
        }
    }
}
function render(virtualDom, container){
    const dom = virtualDom.type === 'TEXT_ELEMENT'?document.createTextNode(virtualDom.props.nodeValue):document.createElement(virtualDom.type)
    Object.keys(container).forEach((child)=>{
        virtualDom[child] = virtualDom[child]
    })
    virtualDom.props.children.forEach((child)=>render(child, dom))
    container.appendChild(dom);
}

const React = {
    createElement,
    render
}
export default React