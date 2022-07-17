const PORT = 8000
const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const nodemailer = require('nodemailer')
const myEmail = 'yourEmail'
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: myEmail,
        pass: 'password'
    }
})

app.post('/submit', (req, res) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (req.query.email.match(mailformat)) {
        var mailOptions = {
            from: myEmail,
            to: myEmail,
            subject: 'New connection!',
            text: 'Email: ' + req.query.email +'\n\nMessage: ' + req.query.message
        }
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error)
                res.json('false')
                return
            } 
            else {
                console.log('Email sent: ' + info.response)
            }
        })
        mailOptions = {
            from: myEmail,
            to: req.query.email,
            subject: 'Congratulations on your new connection!',
            text: 'Nice job making a new connection feel to email this address to contact me anytime.\n\nFrom,\nMatthew Tootoonchi\n\nNote: This email is from an automatic service if you are not the intended recipient please ignore this email.'
        }
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error)
                res.json('false')
                return
            } 
            else {
                console.log('Email sent: ' + info.response)
                res.json('true')
                return
            }
        })
        return
    }
    else {
        res.json('false')
        return
    }
})

app.listen(PORT, () => console.log('Server running on PORT ' + PORT))