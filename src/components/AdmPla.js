import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
export default function AdmPla() {
    const navigate = useNavigate();
    const params = useParams()
    const [Nom, setNom] = useState("")
    const [Age, setAge] = useState(0)
    const [Poste, setPoste] = useState("")
    const [Title, setTitle] = useState(0)
    useEffect(() => {
        if (params.id) {
            setTitle("Edit");
            let p = JSON.parse(localStorage.getItem("players") || "[]")
            for (let i = 0; i < p.length; i++) {
                if (p[i].id == params.id) {
                    setNom(p[i].Nom);
                    setAge(p[i].Age);
                    setPoste(p[i].Poste);
                }
            }
        }
        else {
            setTitle("Add");
        }
    }, [])
    const handleClick = () => {
        if (params.id) {
            let data = {
                id: params.id,
                Nom: Nom,
                Age: Age,
                Poste: Poste,
            };
            let p = JSON.parse(localStorage.getItem("players") || "[]")
            for (let i = 0; i < p.length; i++) {
                if (p[i].id == params.id) {
                    p[i] = data;
                }
            }
            localStorage.setItem("players", JSON.stringify(p))
            navigate("/aff")
        } else {
            let data = {
                Nom,
                Age,
                Poste,
            };
            let playId = JSON.parse(localStorage.getItem("playId") || "1")
            data.id = playId
            let players = JSON.parse(localStorage.getItem("players") || "[]")
            players.push(data)
            console.log(players);
            localStorage.setItem("players", JSON.stringify(players))
            localStorage.setItem("playId", JSON.stringify(playId + 1))
        }
    };
    return (
        <div>
            <div className="hero overlay" style={{ backgroundImage: 'url("assets/images/bg_3.jpg")' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mx-auto text-center">
                            <h1 className="text-white">{Title} Player</h1>
                        </div>
                        <div className="col-lg-3 mx-auto text-center">
                            <div className="site-section">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-7"></div>
                                        <form action="#">
                                            <div className="form-group">
                                                <label style={{color:'#ffffff',fontStyle:'italic',float:'left',fontSize:'18px',fontWeight:'bold'}}>Nom:</label>
                                                <input type="text" className="form-control" value={Nom} placeholder="Nom" onChange={(e) => setNom(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label style={{color:'#ffffff',fontStyle:'italic',float:'left',fontSize:'18px',fontWeight:'bold'}}>Age:</label>
                                                <input type="number" className="form-control" value={Age} placeholder="Age" onChange={(e) => setAge(e.target.value)} />
                                            </div>
                                            <div className="form-group">
                                                <label style={{color:'#ffffff',fontStyle:'italic',float:'left',fontSize:'18px',fontWeight:'bold'}}>Poste:</label>
                                                <input type="text" className="form-control" value={Poste} placeholder="Poste" onChange={(e) => setPoste(e.target.value)} />
                                            </div>
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
