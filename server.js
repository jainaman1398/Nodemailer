var express=require('express');
var app=express();
var nodemailer=require('nodemailer');

function mail() {
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sastabazaar13@gmail.com',
            pass: '***********'
        }
    });

    var mailOptions = {
        from: 'sastabazaar13@gmail.com',
        to: 'jain.aman1398@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

app.get('/',function (req,res,next) {
    mail();
    res.send("mail sent");
})

app.listen(8080,function () {
    console.log("http://localhost:8080");
})
