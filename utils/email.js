const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMIAL_USERNAME,
    },
    // Activate in gmail "less secure app" option
  });
  // 2) Define the email options
  const mailOptions = {
    from: 'Adam Kosak <adam.kosak84@gmail.com',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  // 3) Actually send teh email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
