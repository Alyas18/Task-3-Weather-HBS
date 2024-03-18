const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = "https://api.weatherapi.com/v1/current.json?key=51a20bc2793045b6b26142621220803&q=" + latitude + ',' + longitude;
    
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to the weather service', undefined);
        } else if (response.body.error) {
            callback(response.body.error.message, undefined);
        } else {
            const weatherData = {
                location: `Capital City: ${response.body.location.name}`,
                longitude: `Longitude: ${response.body.location.lon}°W`,
                latitude: `Latitude: ${response.body.location.lat}°N`,
                forecast: `Weather Condition: ${response.body.current.condition.text}`
            };

            setTimeout(() => {
                callback(undefined, weatherData);
            }, 1000);
        }
    });
};

module.exports = forecast;