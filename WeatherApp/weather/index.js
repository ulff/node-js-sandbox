const request = require('request');

const convertToCelcius = inFarenheit => Math.round((inFarenheit - 32) / 1.8);

module.exports = {
  getWeather: (lat, lng, callback) => {
    request({
      url: `https://api.darksky.net/forecast/7f4794101eeb3890663c6ddb02c0da22/${lat},${lng}`,
      json: true
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: convertToCelcius(body.currently.temperature),
          apparentTemperature: convertToCelcius(body.currently.apparentTemperature)
        });
      } else {
        callback('Unable to fetch forecast');
      }
    });
  }
};
