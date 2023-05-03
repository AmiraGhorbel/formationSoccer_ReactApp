import React from 'react'

export default function addMatch() {
    const handleClick = () => {
        console.log("sssss");
        
    };
    const changeTeamOne = (event) => {
        console.log(event.target.value);
    }
    return (
        <div>
            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7"></div>
                        <form action="#">
                            <div className="form-group">
                                <label>Team1:</label>
                                <input type="text" className="form-control" placeholder="Team1" />
                            </div>
                            <div className="form-group">
                            <label>Team2:</label>
                                <input type="text" className="form-control" placeholder="Team2" />
                            </div>
                            <div className="form-group">
                            <label>Score1:</label>
                                <input type="text" className="form-control" placeholder="score1" />
                            </div>
                            <div className="form-group">
                            <label>Score2:</label>
                                <textarea name className="form-control" id cols={30} rows={10} placeholder="score2" defaultValue={""} />
                            </div>
                            <div className="form-group">
                                <input type="button" className="btn btn-primary py-3 px-5" defaultValue="Calculer" onClick={handleClick} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
