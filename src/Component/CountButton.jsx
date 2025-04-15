import ZustandLib from "./ZustandLib";

function CountButton(){
    const {count,increment,decrement,reset} = ZustandLib();

    return(
        <div style={{textAlign: 'center'}}>
            <p>Count : {count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>0</button>
        </div>
    )
}

export default CountButton;