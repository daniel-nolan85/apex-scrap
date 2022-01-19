const nodemailer = require('nodemailer');

exports.contactFormEmail = (req, res) => {
  const { name, email, subject, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    auth: {
      user: 'nolancode20@gmail.com',
      pass: 'Lennon1027',
    },
    secure: true,
  });

  let mailOptions = {
    from: email,
    to: 'nolancode20@gmail.com',
    subject: subject,
    html: `
      <h3>Information</h3>
      <ul>
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
      </ul>

      <h3>Message</h3>
      <p>${message}</p>
      `,
  };

  transporter.sendMail(mailOptions, (err, response) => {
    if (err) {
      res.send(err);
    } else {
      res.send('Success');
    }
  });
  // transporter.close();
};
