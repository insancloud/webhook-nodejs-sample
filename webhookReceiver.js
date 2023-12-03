const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

// Middleware to parse JSON data
app.use(bodyParser.json());

app.post('/webhook-receiver', (req, res) => {
    const data = req.body;
    console.log('Received Webhook Data:', data);
    // Process the data and take appropriate actions

    res.send('Webhook Received Successfully');
});

app.listen(port, () => {
    console.log(`Webhook Receiver listening at http://localhost:${port}`);
});
