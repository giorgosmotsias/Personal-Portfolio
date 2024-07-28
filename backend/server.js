const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

//Millware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

//post request
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    const emailPassword = process.env.EMAIL_PASSWORD;

    const transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'giorgosmotsias@outlook.com',
            pass: emailPassword
        }
    });

    const mailOptions = {
        from: email,
        to: 'giorgosmotsias@outlook.com',
        subject: `Contact form submission from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

