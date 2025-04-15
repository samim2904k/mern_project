import { useNavigate } from "react-router-dom";

function UseNavigate(){
    const navigate = useNavigate();
    let isLoggedIn = true;
    if(isLoggedIn){
        navigate('/home');
    }else{
        return(
            <div>
                <p>This is Use navigate component .</p>
            </div>
        )
    }
}
export default UseNavigate;