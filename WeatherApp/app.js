const yargs = require('yargs');
const geocode = require('./geocode');
const weather = require('./weather');

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

geocode.geocodeAddress(argv.address, (errorMessage, geocodeResults) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(geocodeResults.address);
    weather.getWeather(geocodeResults.lat, geocodeResults.lng, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`It's currently ${weatherResults.temperature} ℃. It feels like ${weatherResults.apparentTemperature} ℃.`);
      }
    });
  }
});
