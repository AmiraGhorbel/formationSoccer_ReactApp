import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
export default function Afficher() {
    const navigate = useNavigate();
    const params = useParams()
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        console.log("test")
        let players = JSON.parse(localStorage.getItem("players") || "[]")
        setPlayers(players);
    }, [])
    const delatePlayers = (id) => {
        let p = JSON.parse(localStorage.getItem("players") || "[]")
        let pos
        for (let i = 0; i < p.length; i++) {
            if (p[i] === id) {
                pos = i;
            }
        }
        p.splice(pos, 1);
        localStorage.setItem("players", JSON.stringify(p))
        setPlayers(p);

    }
    const editPlayer = (id) => {
        navigate("/editp/" + id)
    }
    const navigateTo = () => {
        navigate("/addpla")
    }
    return (
        <div>
            <div>
                <div className="hero overlay" style={{ backgroundImage: 'url("assets/images/bg_3.jpg")' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 mx-auto text-center">
                                <h1 className="text-white">Players</h1>
                            </div>
                        </div>
                    </div>
                </div>
                
                <br></br><br></br>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-secondary" onClick={() =>navigate("/addpla")}>Player</button>
                    <button type="button" className="btn btn-dark" onClick={() => navigateTo()}>AddPlayer</button>
                    <button type="button" className="btn btn-secondary" onClick={() =>navigate("/admin")}>Match</button>
                    <button type="button" className="btn btn-dark" onClick={() =>navigate("/add")}>AddMatch</button>
                </div>
                <br></br><br></br>

                <table className="table">
                    <thead>

                        <tr>
                            <th>Id</th>
                            <th>Nom</th>
                            <th>Age</th>
                            <th>Poste</th>
                            <th scope="col">Delate</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>

                    <tbody>
                        {players.map((value, key) => (
                            <tr key={key}>
                                <td>{value.id}</td>
                                <td>{value.Nom}</td>
                                <td>{value.Age}</td>
                                <td>{value.Poste}</td>
                                <td><button className='btn btn-danger' onClick={() => delatePlayers(value.id)}>Delate</button></td>
                                <td><button className='btn btn-primary' onClick={() => editPlayer(value.id)}>Edit</button></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
