import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export default function (req: Request, res: Response) {
  //require('dotenv').config()

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  //const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'rezendepauloh@gmail.com',
      //pass: process.env.password,
      pass: 'password',
    },
    secure: true,
  });

  const mailData = {
    from: 'rezendepauloh@gmail.com',
    to: 'rezendepauloh@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
