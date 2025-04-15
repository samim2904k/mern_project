import { useState } from "react";

function HandleFormState(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(`Name - ${name}\nEmail - ${email}\nPassword - ${password}\n`)
        alert(`Name - ${name}\nEmail - ${email}\nPassword - ${password}\n`)
        setName('')
        setEmail('')
        setPassword('')
    }

    return(
             <form style={{ display:'flex',flexDirection:'column',width:'300px',margin:'auto',textAlign:'center'}} onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" placeholder="Enter your name" onChange={(event)=>setName(event.target.value)}/><br />
                <input type="email" name="email" id="email" placeholder="Enter your email" onChange={(event)=>setEmail(event.target.value)}/><br />
                <input type="password" name="password" id="password" placeholder="Enter your password" onChange={(event)=>setPassword(event.target.value)}/><br />
                <input type="submit" value="Submit" />
            </form>
       
    )
}
export default HandleFormState;