import { useRef } from "react";

function UCcomponent(){
    const nameRef = useRef();
    const emailRef = useRef();
    const ageRef = useRef();
    const phoneRef = useRef();
    const passwordRef = useRef();
    const show=()=>{
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const age = ageRef.current.value;
        const phone = phoneRef.current.value;
        const password = passwordRef.current.value;
        alert(`${name}-${email}-${age}-${phone}-${password}`);
        removeValue();
    }

    const removeValue = () =>{
        nameRef.current.value = null;
        emailRef.current.value = null;
        ageRef.current.value = null;
        phoneRef.current.value = null;
        passwordRef.current.value = null;
    }

    return(
        <div style={{ display:'flex',flexDirection:'column',width:'300px',margin:'auto',textAlign:'center',marginTop:'5%'}}>
            <input type="text" className="form-control" placeholder="Enter Name" ref={nameRef}/><br />
            <input type="text" className="form-control" placeholder="Enter email" ref={emailRef}/><br />
            <input type="text" className="form-control" placeholder="Enter age" ref={ageRef}/><br />
            <input type="text" className="form-control" placeholder="Enter phone" ref={phoneRef}/><br />
            <input type="text" className="form-control" placeholder="Enter password" ref={passwordRef}/><br />
            <button className="btn btn-info" onClick={show}>Click me</button>
        </div>
    )

}
export default UCcomponent;