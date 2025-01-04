
# Aero-Cast-Bot

This project creates a Telegram bot that provides current weather information based on the city name provided by the user. When a user sends a city name, the bot fetches the weather data and replies with the temperature and weather status.


## Installation

### Windows

  * [Download Node Js](https://nodejs.org/en)
  * [Download Git](https://git-scm.com/downloads/win)

### Cloning this repo

```
  > https://github.com/kumar7505/Telegram-Bot.git
  > cd Telegram_Bot
```

Install my-project with npm

```bash
  npm i
```
    
  
## API usage

The Weather-Forecast uses  the weatherstack API to get the current weather. weatherstack API is free to use for smaller-scale applications. Large applications with bigger user bases may need to opt into one of the paid plans in order to satisfy the higher call–per-minute needs. The free tier comes with the following restrictions:

* 250 calls per month
* No support
## API Reference

#### Get weather of a City

```http
  GET https://api.weatherstack.com/current?access_key=API_KEY&query=CITY_NAME
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `CITY_NAME` | `string` | **Required**. Any City name |



## API Responses

This is he response that will be given by the weatherstack API:

```
    "location": {
        "name": "New York",
        "country": "United States of America",
        "region": "New York",
        "lat": "40.714",
        "lon": "-74.006",
        "timezone_id": "America/New_York",
        "localtime": "2019-09-07 08:14",
        "localtime_epoch": 1567844040,
        "utc_offset": "-4.0"
    }
```


```
    "current": {
        "observation_time": "12:14 PM",
        "temperature": 13,
        "weather_code": 113,
        "weather_icons": [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
        ],
        "weather_descriptions": [
            "Sunny"
        ],
        "wind_speed": 0,
        "wind_degree": 349,
        "wind_dir": "N",
        "pressure": 1010,
        "precip": 0,
        "humidity": 90,
        "cloudcover": 0,
        "feelslike": 13,
        "uv_index": 4,
        "visibility": 16
    }
}
