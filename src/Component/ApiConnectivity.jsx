import axios from "axios";
import { useEffect, useState } from "react";

function ApiConnectivity(){
    const [users,setUsers] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            // console.log(response.data)
            setUsers(response.data);
        })
        .catch(error=>{
            console.log('error occured while fetching ')
        })
    })
    return(
        <div>
            <table className="table table-bordered table-striped">
                <thead >
                    <tr>
                        <th>Sl No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((element,index)=>{
                            return(
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{element.name}</td>
                                    <td>{element.email}</td>
                                    <td>{element.phone}</td>
                                    <td>{element.company.name}</td>
                                    <td>{element.website}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ApiConnectivity;