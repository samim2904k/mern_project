import { useState } from "react";

function HandleState(){
    const [count,setCount] = useState(0);

    return(
        <>
            <p style={{textAlign:"center"}}>Count : {count}</p>
            <button className="btn btn-primary" onClick={()=>setCount(count+1)} style={{marginLeft:'42%'}}> Increment </button>
            <button className="btn btn-danger" onClick={()=>setCount(count-1)} style={{marginLeft:'1%'}}> Decrement </button>
        </>
        
    )
}

export default HandleState;