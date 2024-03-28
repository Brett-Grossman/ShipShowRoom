import { Ship } from "../models/ship.model.js";

async function getAllShips(req, res) {
    try {
        const allShips = await Ship.find();
        res.json(allShips);
    } catch (error) {
        console.error(error);
        res.status(400).json(error);
    }
}

async function getOneShip(req,res) {
    try {
        const foundShip = await Ship.findById(req.params.id);
        res.json(foundShip);
    } catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

async function createShip(req, res) {
    try {
        const newShip = await Ship.create(req.body);
        res.json(newShip);
    } catch (error) {
        console.error(error);
        if (error.errors) {
            const errors = {};
            for (const [key, value] of Object.entries(error.errors)) {
                errors[key] = value.message;
            }
            res.status(400).json({ errors });
        } else {
            res.status(500).json({ message: 'Server error' });
        }
    }
}



async function updateOneShip (req,res){
    const options = {
        rew: true,
        runValidators: true,
    };
    try {
        const updatedShip = await Ship.findByIdAndUpdate(req.params.id,
        req.body, options);
        res.json(updatedShip);
    } catch (error) {
        console.log(error)
        res.status(400).json(error);
    }
}

async function deleteOneShip(req, res) {
    try {
        const deletedShip = await Ship.findByIdAndDelete(req.params.id);
        res.json(deletedShip);
    } catch (error) {
        console.error(error);
        res.status(400).json(error);
    }
}

export {
    createShip,
    getAllShips,
    getOneShip,
    updateOneShip,
    deleteOneShip
};