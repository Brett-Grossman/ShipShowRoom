import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Background from '../Images/Background.jpg';
import { Link } from 'react-router-dom';
import { ModalBody } from 'react-bootstrap';

const ShipForm = ({ onClose }) => {
    const [shipFocus, setShipFocus] = useState("");
    const [shipModel, setShipModel] = useState("");
    const [shipManufacturer, setShipManufacturer] = useState("");
    const [shipPicture, setShipPicture] = useState("");
    const [shipReview, setShipReview] = useState("");

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const shipFocusHandler = (e) => setShipFocus(e.target.value);
    const shipModelHandler = (e) => setShipModel(e.target.value);
    const shipManufacturerHandler = (e) => setShipManufacturer(e.target.value);
    const shipPictureHandler = (e) => setShipPicture(e.target.value);
    const shipReviewHandler = (e) => setShipReview(e.target.value);

    const shipFocusOptions = ['Industrial','Fighter'];
    const shipManufacturerOptions = ['Anvil Aerospace', 'Aegis Dynamics', 'Roberts Space Industries (RSI)', 'Origin Jumpworks', 'Drake Interplanetary', 'Consolidated Outland', 'Esperia', 'MISC (Musashi Industrial & Starflight Concern)', 'Argo Astronautics', 'Kruger Intergalactic', 'Tumbril Land Systems', 'Vanduul', 'Banu', 'Xi\'an', 'Greycat Industrial','Crusader Industries'];

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/ships',{
            shipFocus,
            shipModel,
            shipManufacturer,
            shipPicture,
            shipReview
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            navigate("/");
            onClose(); // Close the modal after submission
        })
        .catch(err => {
            console.log(err);
            setErrors(err.response.data.errors);
        })
    }

    return (
        <ModalBody style={{width:'750px'}}>
            <div className="container" style={{width: '750px', backgroundImage: `url(${Background})`}}>
                <form onSubmit={submitHandler}>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="shipFocus" className="form-label text-light">Ship Focus</label>
                            <select id="shipFocus" className="form-select" name="shipFocus" value={shipFocus} onChange={shipFocusHandler}>
                                <option value="">Select Focus</option>
                                {shipFocusOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                            {errors.shipFocus && <p className="text-danger">{errors.shipFocus}</p>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="shipModel" className="form-label text-light">Ship Model</label>
                            <input type="text" id="shipModel" className="form-control" placeholder="Enter ship name" name="shipModel" value={shipModel} onChange={shipModelHandler}/>
                            {errors.shipModel && <p className="text-danger">{errors.shipModel}</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="shipManufacturer" className="form-label text-light">Ship Manufacturer</label>
                            <select id="shipManufacturer" className="form-select" name="shipManufacturer" value={shipManufacturer} onChange={shipManufacturerHandler}>
                                <option value="">Select Manufacturer</option>
                                {shipManufacturerOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                            {errors.shipManufacturer && <p className="text-danger">{errors.shipManufacturer}</p>}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="shipPicture" className="form-label text-light">Ship Picture</label>
                            <input type="text" id="shipPicture" className="form-control" placeholder="Enter your image URL here" name="shipPicture" onChange={shipPictureHandler}/>
                            {errors.shipPicture && <p className="text-danger">{errors.shipPicture}</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="shipReview" className="form-label text-light">Ship Review</label>
                            <textarea type="text" id="shipReview" className="form-control" style={{height: '120px'}} placeholder="Enter your review here" name="shipReview" value={shipReview} onChange={shipReviewHandler}/>
                            {errors.shipReview && <p className="text-danger">{errors.shipReview}</p>}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </ModalBody>
    );
};

export default ShipForm;