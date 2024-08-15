import { Router } from "express";
import { CheckAvailabilityControllers } from "./checkAvailability.controller";

const router = Router();

//check time slot availability
router.get("/", CheckAvailabilityControllers.checkAvailability);

export const CheckAvailabilityRoutes = router;
