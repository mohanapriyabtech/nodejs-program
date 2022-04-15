var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mohanapriyavidhun0105@gmail.com',
    pass: 'mohanapriyavidhun'
  }
});

var mailOptions = {
  from: 'mohanapriyavidhun0105@gmail.com',
  to: 'jawahar2k2@gmail.com',
  subject: 'Test mail',
  text: 'test mail'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});