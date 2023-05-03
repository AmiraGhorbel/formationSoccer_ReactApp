import React, { useState, useEffect } from 'react'

export default function Cartt(props) {
    const [matches, setMatches] = useState([]);
    useEffect(() => {
        console.log(props.value)
        let matches = JSON.parse(localStorage.getItem("matches") || "[]")
        setMatches(matches);
    }, [])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="d-flex team-vs">
                            <span className="score">{props.value.Score1 == props.value.Score2 ?
                                <span><label style={{ color: 'yellow' }}>{props.value.Score1}-{props.value.Score2}</label></span>
                                : props.value.Score1 > props.value.Score2 ?
                                    <span><label style={{ color: 'green' }}>{props.value.Score1}</label>-
                                        <label style={{ color: 'red' }}>{props.value.Score2}</label> </span>
                                    : <span><label style={{ color: 'red' }}>{props.value.Score1}</label>-
                                        <label style={{ color: 'green' }}>{props.value.Score2}</label></span>
                            }
                            </span>
                            <div className="team-1 w-50">
                                <div className="team-details w-100 text-center">
                                    <img src="assets/images/logo_1.png" alt="Image" className="img-fluid" />
                                    <h3>
                                    {props.value.Score1 == props.value.Score2 ?
                                            <span><label className='sss'>{props.value.Team1}</label></span>
                                            : props.value.Score1 > props.value.Score2 ?
                                                <span>
                                                    <label className='sss'>{props.value.Team1}</label> </span>
                                                : <span><label>{props.value.Team1}</label></span>
                                        }
                                    
                                    
                                    
                                     <span>
                                        {props.value.Score1 == props.value.Score2 ?
                                            <span><label>(Drow)</label></span>
                                            : props.value.Score1 > props.value.Score2 ?
                                                <span>
                                                    <label>(win)</label> </span>
                                                : <span><label>(loss)</label></span>
                                        }
                                    </span>
                                    </h3>
                                    <ul className="list-unstyled">
                                        <li>Anja Landry (7)</li>
                                        <li>Eadie Salinas (12)</li>
                                        <li>Ashton Allen (10)</li>
                                        <li>Baxter Metcalfe (5)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-2 w-50">
                                <div className="team-details w-100 text-center">
                                    <img src="assets/images/logo_2.png" alt="Image" className="img-fluid" />
                                    <h3><span>
                                    {props.value.Score1 == props.value.Score2 ?
                                            <span><label className='sss'>{props.value.Team2}</label></span>
                                            : props.value.Score1 > props.value.Score2 ?
                                                <span>
                                                    <label>{props.value.Team2}</label> </span>
                                                : <span><label  className='sss'>{props.value.Team2}</label></span>
                                        }
                                        
                                        
                                        
                                        
                                        {props.value.Score1 == props.value.Score2 ?
                                        <span><label>(Drow)</label></span>
                                        : props.value.Score1 > props.value.Score2 ?
                                            <span>
                                                <label>(loss)</label> </span>
                                            : <span><label>(win)</label></span>
                                    }


                                    </span></h3>
                                    <ul className="list-unstyled">
                                        <li>Macauly Green (3)</li>
                                        <li>Arham Stark (8)</li>
                                        <li>Stephan Murillo (9)</li>
                                        <li>Ned Ritter (5)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button type='button' className='btn btn-info' onClick={() => props.delateParent(props.value.id)}>Delate</button>
            </div>
            <br></br><br></br><br></br><br></br><br></br>
        </div>
    )
}
