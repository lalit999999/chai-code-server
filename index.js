// make a express server

import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send({
        message: 'Hello from ExCloud VPS 🚀!',
        success: true
    });
});

app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});