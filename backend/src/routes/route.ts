import { Router } from "express";

const router = Router();

router.post('/user-create', (req, res) => {
    console.log('Hello world')
});

router.all('*', (req, res) => {
    res.status(404).send('404 Page Not Found');
});

export { router };