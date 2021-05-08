import express from 'express'
const app = express()
import nodemailer from 'nodemailer'

const sender = 'chronobroker@gmail.com'
const pass = 'CYNT2020'
const sendMail = (msg) => {
  // const transporter = nodemailer.createTransport({
  //   sendmail: true,
  //   newline: 'unix',
  //   path: '/usr/sbin/sendmail'
  // })
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: sender,
      pass,
    }
  })

  return new Promise((resolve, reject) => {
    transporter.sendMail({
      from: sender,
      to: 'canbork@gmail.com',
      subject: 'New contact form message',
      html: msg
    }, (err, info) => {
      if (err) {
        return reject(err);
      }
      resolve(info)
    }
  )
  })
}

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.get('/', (req, res) => {
  // Validate, sanitize and send
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
    const info = await sendMail(msg)
    console.log(info)
    res.send('Mail sent!')
  } catch (err) {
    res.status(500).send('Mail failed!')
    console.log(err)
  }
  
})


export default {
  path: '/api/mail',
  handler: app
}