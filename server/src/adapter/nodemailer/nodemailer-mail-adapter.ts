import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "078e3f13de6d3b",
    pass: "64ee4d8281f70a"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData){

      await transport.sendMail({
    from: 'gscorrea Feedget <teste@feedget.com>',
    to: 'Gabriel Corrêa <gscorrea95@gmail.com',
    subject,
    html: body,
  });

  }

}