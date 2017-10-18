var http = require("http");

var callback = function (req, res) { // req -> request object; res -> response object
  var eq = req.url.replace("/","");;

  if(eq.indexOf("favicon") >=0 ) return;

  var r = eq + " = " + eval(eq) + "\n";
   res.writeHead(200, {'Content-Type': 'text/plain'}); // send response header
   res.end(r); // send response body
}

var server = http.createServer(callback) // create an http server
server.listen(8080, "127.0.0.1"); // make server listen to port 1234
console.log("Server running at: "+ "http://127.0.0.1:1234");



var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'luiscnchl@gmail.com',
        pass: 'hottes09'
    }
});

const mailOptions = {
  from: 'luiscnchl@gmail.com', // sender address
  to: 'lcanchol@asu.edu', // list of receivers
  subject: 'Assignment 3 Email', // Subject line
  html: '<p>Your button works</p>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log(info);
});
