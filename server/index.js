import  express  from "express";
import dotenv from 'dotenv';

// import Connection from "./database/db.js";

const app = express();

dotenv.config();

const PORT = 8000;

// Connection();

app.listen(PORT, () => console.log(`Server is running Successfully on PORT ${PORT}`));