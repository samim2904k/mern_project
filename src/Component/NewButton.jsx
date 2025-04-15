import { memo } from "react";

function NewButton({text,handleClick}){

    console.log('click increment')
    return(
        <>
            <button onClick={handleClick}>{text}</button>
        </>
    )
}
export default memo(NewButton);