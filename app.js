const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

// Route to get superhero by name
app.get("/:token/getByName/:name", async (req, res) => {
    const { name, token } = req.params;
    try {
        const response = await axios.get(
            `https://superheroapi.com/api/${token}/search/${name}`
        );
        res.json(response.data);
    } catch (error) {
        console.error(`Error fetching data by name: ${error.message}`);
        res.status(error.response ? error.response.status : 500).json({
            message: error.message
        });
    }
});

// Route to get superhero by ID
app.get("/:token/getById/:id", async (req, res) => {
    const { id, token } = req.params;
    try {
        const response = await axios.get(
            `https://superheroapi.com/api/${token}/${id}`
        );
        res.json(response.data);
    } catch (error) {
        console.error(`Error fetching data by ID: ${error.message}`);
        res.status(error.response ? error.response.status : 500).json({
            message: error.message
        });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
