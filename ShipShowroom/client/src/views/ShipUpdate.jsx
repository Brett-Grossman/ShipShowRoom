import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Background from '../Images/Background.jpg';

const ShipUpdate = ({ ship }) => {
    const [shipFocus, setShipFocus] = useState(ship.shipFocus || "");
    const [shipModel, setShipModel] = useState(ship.shipModel || "");
    const [shipManufacturer, setShipManufacturer] = useState(ship.shipManufacturer || "");
    const [shipPicture, setShipPicture] = useState(ship.shipPicture || "");
    const [shipReview, setShipReview] = useState(ship.shipReview || "");

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const shipManufacturerOptions = [
        'Anvil Aerospace', 'Aegis Dynamics', 'Roberts Space Industries (RSI)',
        'Origin Jumpworks', 'Drake Interplanetary', 'Consolidated Outland', 'Esperia',
        'MISC (Musashi Industrial & Starflight Concern)', 'Argo Astronautics',
        'Kruger Intergalactic', 'Tumbril Land Systems', 'Vanduul', 'Banu', 'Xi\'an',
        'Greycat Industrial'
    ];

    const shipFocusHandler = (e) => {
        setShipFocus(e.target.value);
    };

    const shipModelHandler = (e) => {
        setShipModel(e.target.value);
    };

    const shipManufacturerHandler = (e) => {
        setShipManufacturer(e.target.value);
    };

    const shipPictureHandler = (e) => {
        setShipPicture(e.target.value);
    };

    const shipReviewHandler = (e) => {
        setShipReview(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/ships/${ship._id}`, {
            shipFocus,
            shipManufacturer,
            shipModel,
            shipPicture,
            shipReview
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch(err => {
            console.log(err);
            setErrors(err.response ? err.response.data.errors : { general: 'An error occurred while updating the ship.' });
        });
    };

    return (
        <div style={{backgroundImage: `url(${Background})`}}>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="shipFocus" className="form-label text-light">Ship Focus</label>
                    <select id="shipFocus" name="shipFocus" value={shipFocus} onChange={shipFocusHandler} className="form-select">
                        <option value="">Select Focus</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Fighter">Fighter</option>
                    </select>
                    {errors.shipFocus && <p className="text-danger">{errors.shipFocus}</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="shipModel" className="form-label text-light">Ship Model</label>
                    <input type="text" id="shipModel" name="shipModel" value={shipModel} onChange={shipModelHandler} className="form-control"/>
                    {errors.shipModel && <p className="text-danger">{errors.shipModel}</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="shipManufacturer" className="form-label text-light">Ship Manufacturer</label>
                    <select id="shipManufacturer" name="shipManufacturer" value={shipManufacturer} onChange={shipManufacturerHandler} className="form-select">
                        <option value="">Select Manufacturer</option>
                        {shipManufacturerOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                    {errors.shipManufacturer && <p className="text-danger">{errors.shipManufacturer}</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="shipPicture" className="form-label text-light">Ship Picture (Image URL)</label>
                    <input type="text" id="shipPicture" name="shipPicture" value={shipPicture} onChange={shipPictureHandler} className="form-control"/>
                    {errors.shipPicture && <p className="text-danger">{errors.shipPicture}</p>}
                </div>

                <div className="mb-3">
                    <label htmlFor="shipReview" className="form-label text-light">Ship Review</label>
                    <textarea id="shipReview" name="shipReview" value={shipReview} onChange={shipReviewHandler} className="form-control"/>
                    {errors.shipReview && <p className="text-danger">{errors.shipReview}</p>}
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default ShipUpdate;