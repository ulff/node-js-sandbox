const request = require('request');

module.exports = {
  geocodeAddress: (address, callback) => {
    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyD-ybD_xr35nnGGB3gYDx41yZCm-_T0XHA`,
      json: true
    }, (error, response, body) => {
      if (error) {
        callback('Unable to connect to Google servers.');
      } else if (body.status === 'ZERO_RESULTS') {
        callback('Unable to find that address.');
      } else if (body.status === 'OK') {
        callback(undefined, {
          address: body.results[0].formatted_address,
          lat: body.results[0].geometry.location.lat,
          lng: body.results[0].geometry.location.lng
        });
      }
    });
  }
};