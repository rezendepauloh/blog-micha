//import { Request, Response } from 'express';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export const config = {
  api: {
    externalResolver: true,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  //require('dotenv').config();
  // console.log('O body:');
  // console.log(req.body);

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'bancadampms@gmail.com',
      //pass: process.env.password,
      pass: 'password',
    },
    secure: true,
  });

  // console.log('O transporter:');
  // console.log(transporter);

  const mailData = {
    from: req.body.email,
    to: 'rezendepauloh@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  };

  // console.log('O mailData:');
  // console.log(mailData);

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
};
