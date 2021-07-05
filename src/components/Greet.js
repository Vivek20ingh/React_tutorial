import React from 'react'

// function Greet()
// {
//     return <h1>Hello Vivek</h1>
// }
const Greet =(props)=>{
    // console.log(propos);
    const {name, dev}=props;
   return (
    <div>
        <h1>Hello {name} {dev} </h1>
        {/* {propos.children} */}
    </div>
   )
}

export default Greet;