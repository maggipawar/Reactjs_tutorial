import React, { useState } from 'react';
export function User(){
   const [data,setData]=useState('Ganesh');
    function apple(){
        setData('Pawar');
    }
    return(
        <div>
            <p>{data}</p>
            <button onClick={apple}>Click Me</button>
        </div>
    )
}