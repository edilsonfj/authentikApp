import { Router } from "express";
import { CustomerController } from "../controllers";

const router = Router();

router.post('/user-create', (req, res) => {
    new CustomerController().createCustomer(req, res);
});

router.all('*', (req, res) => {
    res.status(404).send('404 Page Not Found');
});

export { router };