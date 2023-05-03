import React, { useState, useEffect } from 'react'
import Cartt from './Cartt';
export default function Mat() {
    const [matches, setMatches] = useState([]);
    useEffect(() => {
        console.log()
        let matches = JSON.parse(localStorage.getItem("matches") || "[]")
        setMatches(matches);
    }, [])
    const delateMatch=(id)=>{
        let m=JSON.parse(localStorage.getItem("matches") || "[]")
        let pos
        for(let i=0;i<m.length;i++){
            if(m[i].id===id){
                pos=i;
            }
        }
        m.splice(pos,1);
        localStorage.setItem("matches", JSON.stringify(m))
        setMatches(m);

    }
    return (
        <div>
            <div className="site-wrap">
                <div className="hero overlay" style={{ backgroundImage: 'url("assets/images/bg_3.jpg")' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 ml-auto">
                                <h1 className="text-white">World Cup Event</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, molestias repudiandae pariatur.</p>
                                <div id="date-countdown" />
                                <p>
                                    <a href="#" className="btn btn-primary py-3 px-4 mr-3">Book Ticket</a>
                                    <a href="#" className="more light">Learn More</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    {matches.map((match, key) => (
                        <Cartt value={match} delateParent={delateMatch}/>
                    ))}
        </div>
    )
}
