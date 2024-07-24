import React from "react";

const Contact = () => {
    return (
        <div className="content" id="contact">
        <h1>Contact Me</h1>

        <p> 
            If you would like to get in touch, please reach out via email: 
             <a href="mailto:giorgosmotsias@outlook.com"> giorgosmotsias@outlook.com</a>,
            or fill out the form below.
        </p>

        <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Submit</button>
        </form>
        </div>
    );   
};

export default Contact;
