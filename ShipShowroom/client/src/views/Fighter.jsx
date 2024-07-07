import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import BackgroundF from '../Images/BackgroundF.jpg';
import Gladius from '../Images/Gladius.webp';
import HammerHead from '../Images/HammerHead.png';
import { Modal, Button } from 'react-bootstrap';
import ShipForm from './ShipForm';
import ShipDetails from "./ShipDetails";
import ShipUpdate from "./ShipUpdate";

const Fighter = () => {
    const [Ship, setShip] = useState([]);
    const [showFormModal, setShowFormModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedShip, setSelectedShip] = useState(null);

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

    const fighterShips = Ship.filter(ship => ship.shipFocus === "Fighter");

    const handleShowDetailsModal = (ship) => {
        setSelectedShip(ship);
        setShowDetailsModal(true);
    };
    
    const handleShowEditModal = (ship) => {
        setSelectedShip(ship);
        setShowEditModal(true);
    };

    return (
        <div className="container" style={{
            backgroundImage: `url(${BackgroundF})`,
            paddingBottom: '50px',
            paddingTop: '20px',
            paddingLeft: '15px',
            paddingRight: '15px'
        }}>
            <div className="row">
                <Link to="/" className="col-md btn btn-secondary">Back to the Main Showroom</Link>
                <Link to="/ship/industrial" className="col-md offset-sm-1 btn btn-secondary">Want to see Industrial class Ships?</Link>
                <Button onClick={() => setShowFormModal(true)} className="col-md offset-md-2 btn btn-primary">New Ship Post</Button>
            </div>
            <h1>What are fighter class ships in Star Citizen?</h1>
            <p className="fs-4 text-light" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
                Great fighter spacecraft are epitomes of advanced engineering and combat prowess, 
                boasting formidable capabilities in both offense and defense. These vessels 
                are meticulously crafted with robust armor, capable of withstanding 
                punishing assaults in the unforgiving expanse of space. Their firepower 
                stands as a testament to technological superiority, often equipped with 
                state-of-the-art weaponry systems that strike fear into adversaries. 
                From rapid-firing energy cannons to devastating ballistic armaments, 
                these ships are designed to dominate the battlefield. Moreover, their 
                missile payloads are awe-inspiring, offering a diverse array of ordinance 
                options tailored to any combat scenario. In the vast cosmos, these elite 
                fighters represent the pinnacle of military might, serving as guardians 
                of their respective factions and champions of interstellar supremacy.
            </p>
            <div className="row">
                <div className="col-md-6">
                    <img src={Gladius} alt="Ageis Gladius" className="img-fluid"/>
                </div>
                <div className="col-md-6">
                    <img src={HammerHead} alt="Ageis Hammerhead" className="img-fluid"/>
                </div>
            </div>
            <h1 style={{ borderTop: '1px solid white',backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>Here is what citizens of the 'Verse think!</h1>
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
                        fighterShips.map((ship, index) => (
                            <tr key={index} style={{ borderBottom: '1px solid white' }}>
                                <td style={{ borderRight: '1px solid white' }}>{ship.shipModel}</td>
                                <td style={{ borderRight: '1px solid white' }}>{ship.shipManufacturer}</td>
                                <td style={{ borderRight: '1px solid white' }}>
                                    <img src={ship.shipPicture} alt="Ship Picture" className="col-md-10"/>
                                </td>
                                <td style={{ borderRight: '1px solid white' }}>{ship.shipReview}</td>
                                <td>
                                    <Link onClick={() => handleShowDetailsModal(ship)}>Ship Details</Link>
                                    |
                                    <Link onClick={() => handleShowEditModal(ship)}>Edit</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            
            {/* Modal for the ShipForm */}
            <Modal show={showFormModal} onHide={() => setShowFormModal(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Create New Ship</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ShipForm />
                </Modal.Body>
            </Modal>

            {/* Modal for the ShipDetails */}
            <Modal show={showDetailsModal} onHide={() => setShowDetailsModal(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Here are the Ship Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedShip && <ShipDetails ship={selectedShip} />}
                </Modal.Body>
            </Modal>

            {/* Modal for the ShipUpdate */}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Update Ship Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedShip && <ShipUpdate ship={selectedShip} />}
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Fighter;