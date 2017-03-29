const moment = require('moment');
const request = require('request');

class Weather {
  constructor(zipCode, apiKey, locKey) {
    this.apiKey = apiKey;
    this.zipCode = zipCode;
    this.locApi = locKey;
  }

  getData(callback) {
    if (this.data) {
      callback(undefined, this.data)
    }
    else {
      this.fetchWeather(callback);
    }
  }

  fetchWeather(callback) {
    let url = 'http://api.openweathermap.org/data/2.5/weather?zip=';
    let tags = '&appid=';
    url = url.concat(this.zipCode.concat(tags.concat(this.apiKey)));
    let options = {
      url: url,
    };

    request(options, (error, response, body) => {
      if (!error) {
        body = JSON.parse(body);
        let name = body.name.split(' ').join('_');

        this.data = {
          city: body.name.trim(),
          weather: body.weather[0].main.trim(),
          temperature: (((body.main.temp-273)*1.8)+32),
          time: moment().format('dddd, MMMM Do YYYY, h:mm a')
        };
        callback(undefined, this.data);
      }
      else {
        callback(new Error(error));
      }
    });
  }
}

module.exports = Weather;