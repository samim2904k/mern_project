import { useCallback, useState } from "react";
import NewButton from "./NewButton";

function UseCallBack(){
    console.log('Count increment');
    const [count,setCount] = useState(0);
    const [click,setClick] = useState(0);
    const increment = useCallback(()=>{
        setClick(click+1)
    },[click])
    return(
        <div style={{textAlign:'center'}}>
            <p>Count : {count}</p>
            <p>Click : {click}</p>
            <button onClick={()=>setCount(count+1)}>Increase Count</button>
            < NewButton text={'increment'} handleClick={increment} />
        </div>
    )
}
export default UseCallBack;