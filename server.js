const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for frontend requests from Live Server (http://localhost:5500) or any port
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

// Middleware to parse incoming JSON & urlencoded form requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// POST Endpoint: /contact
app.post('/contact', (req, res) => {
    try {
        const { name, email, phone, message } = req.body;

        // Output contact details to the terminal console
        console.log('====================================');
        console.log('📩 New Contact Submission Received:');
        console.log(`Name:    ${name || 'N/A'}`);
        console.log(`Email:   ${email || 'N/A'}`);
        console.log(`Phone:   ${phone || 'N/A'}`);
        console.log(`Message: ${message || 'N/A'}`);
        console.log('====================================');

        // Return JSON success payload to the client
        return res.status(200).json({
            status: "success",
            message: "Message received! We will contact you soon."
        });
    } catch (error) {
        console.error('Error handling contact submission:', error);
        return res.status(500).json({
            status: "error",
            message: "An error occurred while processing your message."
        });
    }
});

// Start Node.js Express server
app.listen(PORT, () => {
    console.log(`🚀 Fruit Punch Server running on http://localhost:${PORT}`);
});