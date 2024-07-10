const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors(
    //     {
    //     origin: ["https://library-frontend-ten-blue.vercel.app", "http://localhost:3000"], // Add your frontend domain here
    //     methods: ["POST", "GET", "PUT", "DELETE"],
    //     credentials: true,
    //     allowedHeaders: ['Content-Type', 'Authorization']
    // }
));
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
