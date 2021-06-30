import React from 'react'

// function Greet()
// {
//     return <h1>Hello Vivek</h1>
// }
const Greet =(propos)=>{
    console.log(propos);
   return (
    <div>
        <h1>Hello {propos.name} {propos.dev} </h1>
        {propos.children}
    </div>
   )
}

export default Greet;