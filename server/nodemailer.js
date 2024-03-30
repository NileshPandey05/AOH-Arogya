const nodemailer = require('nodemailer');
require('dotenv').config()

const transportor = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    auth:{
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
})

const mailSender = async(email, title, body) =>{
    let mail = await transportor.sendMail({
        from:"Remainder | Hackathon",
        to:`${email}`,
        subject:`${title}`,
        html:`${body}`
    })
}

module.exports = mailSender;