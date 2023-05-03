import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Users() {
    const navigate = useNavigate();
    const params=useParams()
    const [users, setUsers]=useState([]);

    useEffect(()=>{
        console.log("test")
        let users = JSON.parse(localStorage.getItem("users") || "[]")
        setUsers(users);
    },[])
    const delateUser=(id)=>{
        let m=JSON.parse(localStorage.getItem("users") || "[]")
        let pos
        for(let i=0;i<m.length;i++){
            if(m[i]===id){
                pos=i;
            }
        }
        m.splice(pos,1);
        localStorage.setItem("users", JSON.stringify(m))
        setUsers(m);

    }
    const navigateToo=()=>{
        navigate("/add")
    }
  return (
    <div>
      <div className="hero overlay" style={{ backgroundImage: 'url("assets/images/bg_3.jpg")' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mx-auto text-center">
                            <h1 className="text-white">Users</h1>
                            </div>
                    </div>
                </div>
            </div>
            <br></br><br></br>
                
                <br></br><br></br>
            <table className="table">
            
                <thead>
                    
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">FirstName</th>
                        <th scope="col">LastName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th> 
                    </tr>
                </thead>
                
                <tbody>
                {users.map((value,key)=>(
                    <tr  key={key}>
                        <td>{value.id}</td>
                        <td>{value.FirstName}</td>
                        <td>{value.LastName}</td>
                        <td>{value.Email}</td>
                        <td>{value.Password}</td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
    </div>
  )
}
