import { Router } from "express";
import { createShip, getAllShips, getOneShip, deleteOneShip, updateOneShip } from "../controllers/ship.controller.js";


const router = Router();


router.route("/ships")
    .post(createShip)
    .get(getAllShips);

router.route("/ships/:id")
    .get(getOneShip)
    .delete(deleteOneShip)
    .put(updateOneShip);

export default router;