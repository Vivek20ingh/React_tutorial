import React from "react";

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello React</h1>
    //     </div>
    // )

    return React.createElement(
        'div', 
         {id:'hello', className:'mon'} ,
         React.createElement('h1',null,'Hello Vivek'));
}
export default Hello;