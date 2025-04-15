import { useEffect, useState } from "react";

function ArrayUseEffect(){
    const colorArr = ['blue','green','red','purple'];
    const [backColor,setBackColor]=useState('grey');

    useEffect(()=>{
        document.getElementById('btn').style.backgroundColor = backColor;
    })

    return(
        <>
            <button id="btn" onClick={()=>setBackColor(colorArr[Math.floor(Math.random() * colorArr.length)])}> Change Color </button>
        </>
    )
}

export default ArrayUseEffect;