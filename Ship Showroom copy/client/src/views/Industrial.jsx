import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundI from '../Images/BackgroundI.jpg'
import Raft from '../Images/Raft.webp'
import Arrasta from '../Images/Arrasta.jpg'

const Industrial = () => {

    const [Ship, setShip] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/ships")
            .then((res) => {
                console.log(res.data);
                setShip(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    const industrialShips = Ship.filter(ship => ship.shipFocus === "Industrial");

    return(
        <div className="container" style={{backgroundImage: `url(${BackgroundI})`}}>
            <div className="row" >
                <Link to="/" className="col-md btn btn-secondary">Back to the Main Showroom</Link>
                <Link to="/ship/fighter" className="col-md btn offset-sm-1 btn-secondary">Want to see Fighter Ships?</Link>
                <Link to="/ship/create" className="col-md offset-md-2 btn btn-primary">New Ship Post</Link>
            </div>
                <h1>What are Industrial class ships in Star Citizen?</h1>
                <p className="fs-4 text-light" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
                    Space ships designed for mining, cargo transport, 
                    and salvage operations are often versatile vessels 
                    equipped with specialized tools and systems
                    tailored for these tasks. These ships are typically 
                    built with robust hulls capable of withstanding the 
                    rigors of deep space exploration and the demands of
                    mining operations. Equipped with advanced mining 
                    equipment such as laser drills, tractor beams, 
                    and ore processing facilities, these vessels can 
                    extract valuable resources from asteroids and 
                    celestial bodies. Additionally, their spacious 
                    cargo holds allow them to store and transport 
                    large quantities of mined materials across vast 
                    distances, contributing to interstellar trade 
                    and commerce. Furthermore, these ships are outfitted 
                    with salvage equipment and automated systems 
                    designed to recover and repurpose components 
                    from derelict spacecraft, offering opportunities 
                    for scavenging valuable technology and materials 
                    from space wreckage. Overall, these multi-functional 
                    space ships play a crucial role in the interstellar 
                    economy, resource extraction, and exploration endeavors 
                    across the cosmos.</p>
                <div className="row" style={{ borderTop: '1px solid white' }}>
                    <div className="col-md-6">
                        <img src={Raft} alt="Argo Raft" className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                    <img src={Arrasta} alt="RSI Arrasta" className="img-fluid"/>
                    </div>
                </div>
                <h1 style={{ borderTop: '1px solid white' }}>Here is what citizens of the 'Verse think!</h1>
                <table className="text-light" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderCollapse: 'collapse' }}>
    <thead>
        <tr>
            <th className="text-light" style={{ borderRight: '1px solid white' }}>Ship</th>
            <th className="text-light" style={{ borderRight: '1px solid white' }}>Manufacturer</th>
            <th className="text-light" style={{ borderRight: '1px solid white' }}>Picture</th>
            <th className="text-light" style={{ borderRight: '1px solid white' }}>What the Citizen Thinks</th>
        </tr>
    </thead>
    <tbody>
        {
            industrialShips.map((ship, index) => (
                <tr key={index} style={{ borderBottom: '1px solid white' }}>

                    <td style={{ borderRight: '1px solid white' }}>{ship.shipModel}</td>
                    <td style={{ borderRight: '1px solid white' }}>{ship.shipManufacturer}</td>
                    <td style={{ borderRight: '1px solid white' }}>
                        <img src={ship.shipPicture} alt="Ship Picture" className="col-md-10"/>
                    </td>
                    <td style={{ borderRight: '1px solid white' }}>{ship.shipReview}</td>
                    <td>
                        <Link to={`/ship/${ship._id}/details`}>ship Details</Link>
                        |
                        <Link to={`/ship/${ship._id}/update`}>Edit</Link>
                    </td>
                </tr>
            ))
        }
    </tbody>
</table>
        </div>
    )
}

export default Industrial;