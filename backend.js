const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const express = require('express');
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extender : false}));
var cors = require('cors')

app.use(cors())

var transporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
        type: 'OAuth2', 
        user: 'richardsonjayaaputra@gmail.com', 
        clientId: '505391639353-k1s7qir7kbd1q1thbr8tl3jv0kdam5j8.apps.googleusercontent.com', 
        clientSecret: 'JxknBT81361T9QlLdCnV3-pN', 
        refreshToken: '1/7y27YE6bdzg8dqKGBsjwUB1vdcLWbPZxC_Tqhje_b3r2djwlwOyzIQ9uEbpCbabK' 
    } 
})


app.post('/nodemail',(req,res)=>{
    var email = req.body.input1
    var subject = req.body.input2
    var text = req.body.input3
    var mailOptions = {
        from: 'richardsonjayaaputra@gmail.com',
        to: email,
        subject: subject,
        text: text,
    }
    transporter.sendMail(mailOptions,(err,res2)=>{
        if(err){
            console.log('Error!')
            res.send('Error!')
        }
        else{
            let masuk = true
            console.log('Success!')
            res.send('Success!',{masuk})
        }
    })
})

app.listen(3210,()=>{
    console.log('Connect @port 3210')
})