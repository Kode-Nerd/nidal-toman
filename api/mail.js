import express from 'express'
const app = express()
import nodemailer from 'nodemailer'
import cors from 'cors'
import { google } from 'googleapis'

const OAuth2 = google.auth.OAuth2
const oauth2Client = new OAuth2(
  process.env.OAUTH_CLIENT_ID,
  process.env.OAUTH_SECRET,
  process.env.OAUTH_REDIRECT_URL,
)

oauth2Client.setCredentials({
  refresh_token: process.env.OAUTH_REFRESH_TOKEN
})

const sender = process.env.MAIL_SENDER
// const pass = process.env.MAIL_PASS
const sendMail = async (msg, info) => {
  // const transporter = nodemailer.createTransport({
  //   sendmail: true,
  //   newline: 'unix',
  //   path: '/usr/sbin/sendmail'
  // })
  // const transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: sender,
  //     pass,
  //   }
  // })
  try {
    const accessToken = await oauth2Client.getAccessToken()
    
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: sender, 
        clientId: process.env.OAUTH_CLIENT_ID,
        clientSecret: process.env.OAUTH_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken
      },
      tls: {
        rejectUnauthorized: false
      }
    })
    
    return new Promise((resolve, reject) => {
      transporter.sendMail({
        from: sender,
        to: process.env.MAIL_TO || 'info@nidal-toman.de',
        cc: process.env.MAIL_CC,
        bcc: process.env.MAIL_BCC,
        subject: info ? `${info.name} - ${info.email}` : process.env.MAIL_SUBJECT || 'New Contact Form Submission' ,
        html: msg
      }, (err, info) => {
        if (err) {
          return reject(err);
        }
        resolve(info)
      }
      )
    })
  } catch (err) {
    console.log(err)
    throw err
  }
}

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.get('/', (req, res) => {
  // Validate, sanitize and send
  if (req.query.auth === 'Bearer nidal-toman') {
    console.log(
      process.env.OAUTH_CLIENT_ID,
      process.env.OAUTH_SECRET,
      process.env.OAUTH_REDIRECT_URL,
      process.env.OAUTH_REFRESH_TOKEN,
      process.env.MAIL_SENDER,
      process.env.MAIL_TO,
      process.env.MAIL_CC,
      process.env.MAIL_BCC,
      process.env.MAIL_SUBJECT,
    )
  }
  res.send('Mail is ready!')
})

app.post('/', async (req, res) => {
  const { name, email, no, detail, check } = req.body
  const msg = `
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>No: ${no}</p>
    <p>Agreed to policy: ${check}</p>
    <p>Detail: ${detail}</p>
  `

  try {
    const info = await sendMail(msg, { name, email })
    console.log(info)
    res.send('Mail sent!')
  } catch (err) {
    console.log(err)
    res.status(500).send('Mail failed!')
  }
  
})


export default {
  path: '/api/mail',
  handler: app
}