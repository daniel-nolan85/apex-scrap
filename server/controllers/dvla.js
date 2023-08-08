var https = require('follow-redirects').https;

exports.getCarInfo = (req, res) => {
  const { reg } = req.body;

  var options = {
    method: 'POST',
    hostname: 'driver-vehicle-licensing.api.gov.uk',
    path: '/vehicle-enquiry/v1/vehicles',
    headers: {
      'x-api-key': 'F8rc3m3zKomYAFtTiaOzaWa26kHqISD2h3gbnWPa',
      'Content-Type': 'application/json',
    },
    maxRedirects: 20,
  };

  var req = https.request(options, function (response) {
    var chunks = [];

    response.on('data', function (chunk) {
      chunks.push(chunk);
    });

    response.on('end', function (chunk) {
      var body = Buffer.concat(chunks);
      var carInfo = JSON.parse(body.toString());
      res.json(carInfo);
    });

    response.on('error', function (error) {
      console.error(error);
    });
  });

  var postData = JSON.stringify({ registrationNumber: reg });

  req.write(postData);

  req.end();
};
