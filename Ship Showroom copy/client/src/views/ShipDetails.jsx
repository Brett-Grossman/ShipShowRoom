import { useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom'
import { Link } from "react-router-dom";
import axios from "axios";
import Background from "../Images/Background.jpg"

const ShipDetails = () => {
    const [ship, setShip] = useState({});
    const {id} = useParams();
    const Navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/ships/${id}`)
            .then((res) => {
                console.log(res.data);
                setShip(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    },[id])

    const deleteHandler = () => { 
        axios.delete(`http://localhost:8000/api/ships/${id}`)
            .then((res) => {
                console.log(res.data);
                Navigate("/");
        })
            .catch((err) => {
                console.log("Error deleting ship review!", err);
        });
    }

    return(
<div className="container" style={{backgroundImage: `url(${Background})`}}>
    <Link to={"/"} className="col-md btn btn-secondary">Back to the Main Showroom</Link>

    <div className="row" >
        <div className="col" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
            <label htmlFor="shipFocus" className="text-light">Ship Category:</label>
            <p className="text-light">{ship.shipFocus}</p>
        </div>
    </div>

    <div className="row">
        <div className="col" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
            <label htmlFor="shipModel" className="text-light">Model:</label>
            <p className="text-light">{ship.shipModel}</p>
        </div>
    </div>

    <div className="row">
        <div className="col" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
            <label htmlFor="shipManufacturer" className="text-light">Manufacturer:</label>
            <p className="text-light">{ship.shipManufacturer}</p>
        </div>
    </div>

    <div className="row">
        <div className="col" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
            <label htmlFor="shipPicture" className="text-light">{ship.shipModel}:</label>
            <img src={ship.shipPicture} alt="Ship" className="col-md-10"/>
        </div>
    </div>

    <div className="row">
        <div className="col" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
            <label htmlFor="shipReview" className="text-light">What this citizen thought:</label>
            <p className="text-light" >{ship.shipReview}</p>
        </div>
    </div>

    <div className="row">
        <div className="col">
            <button onClick={(e)=>deleteHandler(ship._id)}>Delete Review from The Ship Showroom?</button>
        </div>
    </div>
</div>
    )
}

export default ShipDetails;