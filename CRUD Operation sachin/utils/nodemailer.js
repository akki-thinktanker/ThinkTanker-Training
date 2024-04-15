const nodemailer = require("nodemailer");

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(" ")[0];
    this.url = url
    this.from = `Akash Nai <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === "production") {
      return nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  // Send the email
  async send(subject, message) {

    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: subject,
      text: message,
      url: this.url,
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send(`Welcome ${this.firstName}`, `Welcome to Akki's CRUD`);
  }

  async sendPasswordReset() {
    await this.send(
      "passwordReset",
      `Your password reset token (valid for only 10 minutes) : Here is the URL: ${this.url}`
    );
  }
};
