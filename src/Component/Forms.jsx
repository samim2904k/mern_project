import { useState } from "react";

function Forms(){
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        phone:'',
        age:''
    })

    const handleChange=(event)=>{
        const {name,value} = event.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);
        alert('Form submitted');
    }
    return(
        <div style={{textAlign:'center'}}> 
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="name" placeholder="Enter name" value={formData.name} onChange={handleChange}/><br/>
                <input type="email" name="email" id="email" placeholder="Enter email" value={formData.email} onChange={handleChange}/><br/>
                <input type="password" name="password" id="password" placeholder="Enter password" value={formData.password} onChange={handleChange}/><br/>
                <input type="text" name="phone" id="phone" placeholder="Enter phone" value={formData.phone} onChange={handleChange}/><br/>
                <input type="text" name="age" id="age" placeholder="Enter age" value={formData.age} onChange={handleChange}/><br/>
                <input type="submit" value="submit" name="btn" />
            </form>
        </div>
    )
}
export default Forms;