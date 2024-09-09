import React, { useState } from "react"; 
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_tf2j322',          
            'template_pw5mmcs',         
            {
                from_name: formData.name,    
                reply_to: formData.email,    
                message: formData.message   
            },                            
            'i4B9QdB0wieMhAvPd'              
        ).then((result) => {
            alert("Your message has been sent successfully!");
            console.log(result.text);
        }).catch((error) => {
            alert("An error occurred while sending the message.");
            console.log(error.text);
        });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="content" id="contact">
            <h1>Contact Me</h1>

            <p> 
                If you would like to get in touch, please reach out via email: 
                <a href="mailto:giorgosmotsias@outlook.com"> giorgosmotsias@outlook.com</a>, or fill out the form below.
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