import { useEffect, useState } from "react";

function UseEffect(){
    const [click,setClick] = useState(0);
    useEffect(()=>{
        console.log(`You have clicked ${click} times`);
        document.title = `You have clicked ${click} times`;
    })
    return(
        <div style={{fontSize:'20px',textAlign:'center'}}>
            <p>{click}</p>
            <button className="btn btn-primary" onClick={()=>setClick(click+1)}>Click me</button>
        </div>
    )
}
export default UseEffect;