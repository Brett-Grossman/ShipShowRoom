import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Background from "../Images/Background.jpg";

const ShipDetails = ({ ship }) => {
    const navigate = useNavigate();

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/ships/${ship._id}`)
            .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log("Error deleting ship review!", err);
            });
    };

    return(
<div className="container" style={{
    backgroundImage: `url(${Background})`,
    paddingBottom: '50px',
    paddingTop: '20px',
    paddingLeft: '15px',
    paddingRight: '15px'
    }}>

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