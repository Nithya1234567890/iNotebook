const mongoose = require("mongoose");
const express = require('express');
const cors=require('cors');
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'))

const startServer = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/inotebook");
        
        app.listen(port, () => {
            console.log(`Example app listening on port http://localhost:${port}`);
            console.log("Connected to MongoDB successfully");
        });

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        // Exit the process if unable to connect to MongoDB
        process.exit(1);
    }
};

module.exports=startServer
