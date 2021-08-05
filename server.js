const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

// Initialize Port
const PORT = process.env.PORT || 5000; 

// Set environment variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// Middleware 
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/', (req, res) => {
    
    // console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'info@datapulse.mx',
            pass: process.env.EMAIL_PASSWORD
        }
    })

    transporter.use('compile', hbs({ 
        viewEngine: 'express-handlebars',
        viewPath: './public/views/'
     }));

    const mailOptions = {
        from: 'info@datapulse.mx',
        to: req.body.email,
        subject: `More than a hunch it's data.`,
        text: 'Thanks for contacting Data Pulse Analytics S.C.',
        // template: 'index'
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})