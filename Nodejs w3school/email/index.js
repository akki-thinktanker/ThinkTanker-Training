const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "",
    pass: "",
  },
});

const mailOptions = {
  from: "akki.thinktanker@gmail.com",
  to: "akashnai632@gmail.com",
  subject: "Test email from nodejs",
  text: "let me give it try.",
  html: "<h1>Welcome</h1><p>That was easy!</p>",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) console.log(err);
  else console.log("Email sent: " + info.response);
});
