import express from 'express';
import cors from 'cors';
import realtorRoutes from './routes/realtorRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json("Hey, this is the backend of saveon");
});

app.use('/realtors', realtorRoutes);

app.listen(8080, () => {
    console.log("Connected to backend");
});