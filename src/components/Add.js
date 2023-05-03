import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Add() {
    const navigate = useNavigate();
    const params = useParams()
    const [Team1, setTeam1] = useState("")
    const [Team2, setTeam2] = useState("")
    const [Score1, setScore1] = useState(0)
    const [Score2, setScore2] = useState(0)
    const [Title, setTitle] = useState(0)
    useEffect(() => {
        if (params.id) {
            setTitle("edit");
            let m = JSON.parse(localStorage.getItem("matches") || "[]")
            for (let i = 0; i < m.length; i++) {
                if (m[i].id == params.id) {
                    setTeam1(m[i].Team1);
                    setTeam2(m[i].Team2);
                    setScore1(m[i].Score1);
                    setScore2(m[i].Score2);
                }
            }
        }
        else {
            setTitle("add");
        }
    }, [])
    const handleClick = () => {
        if (params.id) {
            let data = {
                id: params.id,
                Team1: Team1,
                Team2: Team2,
                Score1: Score1,
                Score2: Score2,
            };
            let m = JSON.parse(localStorage.getItem("matches") || "[]")
            for (let i = 0; i < m.length; i++) {
                if (m[i].id == params.id) {
                    m[i] = data;
                }
            }
            localStorage.setItem("matches", JSON.stringify(m))
            navigate("/admin")
        } else {
            let data = {
                Team1,
                Team2,
                Score1,
                Score2,
            };
            let matId = JSON.parse(localStorage.getItem("matId") || "1")
            data.id = matId
            let matches = JSON.parse(localStorage.getItem("matches") || "[]")
            matches.push(data)
            console.log(matches);
            localStorage.setItem("matches", JSON.stringify(matches))
            localStorage.setItem("matId", JSON.stringify(matId + 1))
        }
    };
    return (
        <div>
            <div className="hero overlay" style={{ backgroundImage: 'url("assets/images/bg_3.jpg")' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mx-auto text-center">
                            <h1 className="text-white">{Title} Match</h1>
                        </div>
                        <div className="col-lg-3 mx-auto text-center">
                            <div className="site-section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7"></div>
                                        <form action="#">
                                            <div className="form-group">
                                                <label style={{color:'#ffffff',fontStyle:'italic',float:'left',fontSize:'18px',fontWeight:'bold'}}>Team1:</label>
                                                <input type="text" className="form-control" value={Team1} placeholder="Team1" onChange={(e) => setTeam1(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label style={{color:'#ffffff',fontStyle:'italic',float:'left',fontSize:'18px',fontWeight:'bold'}}>Team2:</label>
                                                <input type="text" className="form-control" value={Team2} placeholder="Team2" onChange={(e) => setTeam2(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label style={{color:'#ffffff',fontStyle:'italic',float:'left',fontSize:'18px',fontWeight:'bold'}}>Score1:</label>
                                                <input type="number" className="form-control" value={Score1} placeholder="score1" onChange={(e) => setScore1(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label style={{color:'#ffffff',fontStyle:'italic',float:'left',fontSize:'18px',fontWeight:'bold'}}>Score2:</label>
                                                <input type="number" className="form-control" value={Score2} placeholder="score2" onChange={(e) => setScore2(e.target.value)} />
                                            </div >
                                            <div className="form-group">
                                                <input type="button" className="btn btn-primary py-3 px-5" defaultValue={Title} onClick={handleClick} />
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
