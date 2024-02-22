import express, { Router, json } from 'express';
const router = Router();
import cors from 'cors';
import { createTransport } from 'nodemailer';

const app = express();
app.use(cors());
router.use(cors());
app.use(json());
app.use('/', router);
app
  .listen(3001, () => {
    console.log('Server is running on port 3001');
  })
  .on('error', err => console.log('Error while setting up the sever', err));

app.get('/', (req, res) => {
  res.send('Hello world');
});

const contactEmail = createTransport({
  service: 'gmail',
  auth: {
    user: 'adamsuper148@gmail.com',
    pass: 'ktqatzxduhovzsci',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

console.log('contactEmail', contactEmail);

contactEmail.verify(err => {
    if(err) console.log(err)
    else console.log('Contact email server is ready to send emails')
});

router.post('/contact', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const mail = {
        from: name,
        to: 'adamsuper148@gmail.com',
        subject: "Contact Form Submission - Portfolio",
        html:  ` <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, error => {
        if(error) {
            res.json(error)
            console.log('error: ', res.json(error));
        } else {
            res.json({ code: 200, status: 'Message sent', body: {} });
            console.log('message sent mtfc!')
        }
    })
});