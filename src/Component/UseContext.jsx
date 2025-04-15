import React , { useContext } from "react";

const ThemeContext = React.createContext('blue');
function UseContext(){
    const theme = useContext(ThemeContext);
    return(
        <div style={{textAlign:'center'}}>
            <button style={{color:theme}}>Click me</button>
        </div>
    )
}
export default UseContext;