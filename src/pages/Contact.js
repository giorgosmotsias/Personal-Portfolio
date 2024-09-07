import React, { useState } from "react"; 
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3003/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Email sent successfully!');
            } else {
                alert('Failed to send email.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error sending email.');
        }
    };

    return (
        <div className="content" id="contact">
            <h1>Contact Me</h1>

            <p> 
                If you would like to get in touch, please reach out via email: 
                <a href="mailto:giorgosmotsias@outlook.com">giorgosmotsias@outlook.com</a>, or fill out the form below.
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;