const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyD-ybD_xr35nnGGB3gYDx41yZCm-_T0XHA`;

const convertToCelcius = inFarenheit => Math.round((inFarenheit - 32) / 1.8);

axios.get(geocodeUrl)
  .then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to find that address.');
    }
    const lat = response.data.results[0].geometry.location.lat;
    const lng = response.data.results[0].geometry.location.lng;
    const weatherUrl = `https://api.darksky.net/forecast/7f4794101eeb3890663c6ddb02c0da22/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
  })
  .then((response) => {
    const temperature = convertToCelcius(response.data.currently.temperature);
    const apparentTemperature = convertToCelcius(response.data.currently.apparentTemperature);
    console.log(`It's currently ${temperature} ℃. It feels like ${apparentTemperature} ℃.`);
  })
  .catch((error) => {
    if (error.code === 'ECONNREFUSED') {
      console.log('Unable to connect to Google servers.');
    } else {
      console.log(error.message);
    }
  });
  