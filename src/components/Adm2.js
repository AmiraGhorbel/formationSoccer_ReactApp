import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header'

export default function Adm2() {
    const navigate = useNavigate();
    const params=useParams()
    const [matches, setMatches]=useState([]);

    useEffect(()=>{
        console.log("test")
        let matches = JSON.parse(localStorage.getItem("matches") || "[]")
        setMatches(matches);
    },[])
    const delateMatch=(id)=>{
        let m=JSON.parse(localStorage.getItem("matches") || "[]")
        let pos
        for(let i=0;i<m.length;i++){
            if(m[i]===id){
                pos=i;
            }
        }
        m.splice(pos,1);
        localStorage.setItem("matches", JSON.stringify(m))
        setMatches(m);

    }
    const fn=(id)=>{
        navigate("/edit/"+id)
    }
    const navigateToo=()=>{
        navigate("/add")
    }
    //
    return (
        <div>
            <div className="hero overlay" style={{ backgroundImage: 'url("assets/images/bg_3.jpg")' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 mx-auto text-center">
                            <h1 className="text-white">Matches</h1>
                            </div>
                    </div>
                </div>
            </div>
            <br></br><br></br>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-dark" onClick={() =>navigate("/addpla")}>Player</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigateToo()}>AddPlayer</button>
                    <button type="button" className="btn btn-dark" onClick={() =>navigate("/admin")}>Match</button>
                    <button type="button" className="btn btn-secondary" onClick={() =>navigate("/add")}>AddMatch</button>
                </div>
                <br></br><br></br>
            <table className="table">
            
                <thead>
                    
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Team1</th>
                        <th scope="col">Team2</th>
                        <th scope="col">Score1</th>
                        <th scope="col">Score2</th>                        
                        <th scope="col">Delate</th>
                        <th scope="col">Edit</th>
                    </tr>
                </thead>
                
                <tbody>
                {matches.map((value,key)=>(
                    <tr  key={key}>
                        <td>{value.id}</td>
                        <td>{value.Team1}</td>
                        <td>{value.Team2}</td>
                        <td>{value.Score1}</td>
                        <td>{value.Score2}</td>
                        <td><button className='btn btn-danger' onClick={()=>delateMatch(value.id)}>Delate</button></td>
                        <td><button className='btn btn-primary' onClick={()=>fn(value.id)}>edit</button></td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}
