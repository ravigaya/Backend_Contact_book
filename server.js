
import express from 'express';
import dotenv from 'dotenv';
import contactRouter from './Routes/contactsRoutes.js'; 
dotenv.config(); // Load environment variables from .env file


const app = express();
const port = process.env.PORT || 3000;

// Use the contacts router
app.use('/contacts', contactRouter);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

console.log("This is the main file");
