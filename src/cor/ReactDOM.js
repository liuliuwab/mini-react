import React from './React.js'
const ReactDOM ={
    createRoot(constainer){
        return {
            render(App){
                React.render(App, constainer)
        }
      }
    }
}
export default ReactDOM