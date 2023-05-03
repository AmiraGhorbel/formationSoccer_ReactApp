import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const navigate = useNavigate();
  const handleClick = () => {
    let data = {
      Email: Email,
      Password: Password,
    };
    console.log(Email)
    let users = JSON.parse(localStorage.getItem("users") || "[]")
    for (let i = 0; i < users.length; i++) {
      if (users[i].Email === Email && users[i].Password === Password) {
        console.log("Email et Password correct");
        navigate('/')
      } else if (users[i].Email === Email && users[i].Password !== Password) {
        console.log("Password incorrect");
      } else if (users[i].Email !== Email && users[i].Password === Password) {
        console.log("Email incorrect");
      }
    }
  }
  return (
    <div>
      <div className="hero overlay" style={{ backgroundImage: 'url("assets/images/bg_3.jpg")' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center">
              <h1 className="text-white">Login</h1>
            </div>
            <div className="col-lg-3 mx-auto text-center">
              <div className="site-section">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7"></div>
                    <form action="#">
                      <div className="form-group">
                        <label style={{ color: '#ffffff', fontStyle: 'italic', float: 'left', fontSize: '18px', fontWeight: 'bold' }}>Email:</label>
                        <input type="text" className="form-control" value={Email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label style={{ color: '#ffffff', fontStyle: 'italic', float: 'left', fontSize: '18px', fontWeight: 'bold' }}>Password:</label>
                        <input type="password" className="form-control" value={Password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <input type="button" className="btn btn-primary py-3 px-5" defaultValue="Login" onClick={handleClick} />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="containerr">
        <div className="row">
          <div className="col-lg-3 col-md-2" />
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-key">
              <i className="fa fa-key" aria-hidden="true" />
            </div>
            <div className="col-lg-12 login-title">
              Login
            </div>
            <div className="col-lg-12 login-form">
              <div className="col-lg-12 login-form">
                <form>
                  <div className="form-groupp">
                    <label className="form-control-labell">EMAIL</label><br></br>
                    <input type="text" className="text form-controll" />
                  </div>
                  <div className="form-groupp">
                    <label className="form-control-labell">PASSWORD</label><br></br>
                    <input type="password" className="pass form-controll"/>
                  </div>
                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-6 login-btm login-text">
                      {/* Error Message */}
                    </div>
                    <div className="col-lg-6 login-btm login-button">
                      <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-2" />
          </div>
        </div>
      </div>

    </div>
  )
}
