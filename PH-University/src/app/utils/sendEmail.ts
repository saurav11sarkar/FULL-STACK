import nodemailer from 'nodemailer';
import { config } from '../config';

export const sendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: config.ENV === 'production', // true for port 465, false for other ports
    auth: {
      user: 'virat18sarkar@gmail.com',
      pass: 'yiih vdgh mvrh dmqo',
    },
  });
  await transporter.sendMail({
    from: 'virat18sarkar@gmail.com', // sender address
    to, // list of receivers
    subject: 'Reset your password within 10 mins!', // Subject line
    text: '', // plain text body
    html, // html body
  });
};
