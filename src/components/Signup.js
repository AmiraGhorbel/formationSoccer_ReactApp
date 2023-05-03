import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Signup() {
    const [FirstName, setFirstName] = useState("")
    const [LastName, setLastName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const nav=useNavigate()
    const handleClick = () => {
        let data = {
            FirstName:FirstName,
            LastName:LastName,
            Email:Email,
            Password:Password,
        };
        let userId = JSON.parse(localStorage.getItem("userId") || "1")
        data.id = userId
        let users = JSON.parse(localStorage.getItem("users") || "[]")
        users.push(data)
        console.log(users);
        localStorage.setItem("users", JSON.stringify(users))
        localStorage.setItem("userId", JSON.stringify(userId + 1))
        nav('/login')
    }
  return (
    <div>
      <div className="hero overlay" style={{ backgroundImage: 'url("assets/images/bg_3.jpg")' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mx-auto text-center">
                            <h1 className="text-white">signup</h1>
                        </div>
                        <div className="col-lg-3 mx-auto text-center">
                            <div className="site-section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7"></div>
                                        <form action="#">
                                            <div className="form-group">
                                                <label style={{color:'#ffffff',fontStyle:'italic',float:'left',fontSize:'18px',fontWeight:'bold'}}>First Name:</label>
                                                <input type="text" className="form-control" value={FirstName} placeholder="FirstName" onChange={(e) => setFirstName(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label style={{color:'#ffffff',fontStyle:'italic',float:'left',fontSize:'18px',fontWeight:'bold'}}>Last Name:</label>
                                                <input type="text" className="form-control" value={LastName} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label style={{color:'#ffffff',fontStyle:'italic',float:'left',fontSize:'18px',fontWeight:'bold'}}>Email:</label>
                                                <input type="text" className="form-control" value={Email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label style={{color:'#ffffff',fontStyle:'italic',float:'left',fontSize:'18px',fontWeight:'bold'}}>Password:</label>
                                                <input type="password" className="form-control" value={Password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <input type="button" className="btn btn-primary py-3 px-5" defaultValue="Add" onClick={handleClick} />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
