import { useMemo, useState } from "react";

const expensiveCalc = (count)=>{
    return count * count;
}
function UseMemo(){
    const [count,setCount] = useState(0);
    const ec = useMemo(()=>expensiveCalc(count),[count])

    return(
        <div style={{textAlign:'center'}}>
            <p>Count : {count}</p>
            <p>Calcualtion : {ec}</p>
            <button onClick={()=>setCount(count+1)}>Increase Count</button>
        </div>
    )
}
export default UseMemo;