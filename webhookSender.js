const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 5000;

// Middleware to parse JSON data
app.use(bodyParser.json());

app.post('/trigger-event', async (req, res) => {
    const eventPayload = {
        event_type: 'example_event',
        message: 'Something happened!',
    };

    const subscriberUrl = 'http://localhost:8000/webhook-receiver';

    try {
        await axios.post(subscriberUrl, eventPayload);
        console.log('Webhook Sent Successfully');
        res.json({ success: true });
    } catch (error) {
        console.error('Error sending webhook:', error.message);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Webhook Sender listening at http://localhost:${port}`);
});
