const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const { Resend } = require('resend');
const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();
const port = process.env.PORT || 3003;

//Millware
const corsOptions = {
    origin: 'https://www.motsias.com',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

app.get("/", (req, res) => {
    res.send("Welcome to the backend server!");
});

app.post("/contact", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const data = await resend.emails.send({
            from: "onboarding@resend.dev",  
            to: "giorgosmotsias@outlook.com",
            subject: `New message from ${name}`,
            text: `From: ${name} <${email}>\n\nMessage:\n${message}`,
        });
        
        console.log("Email sent successfully:", data);
        res.status(200).json({ message: "Email sent successfully!" });

    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Error sending email" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

