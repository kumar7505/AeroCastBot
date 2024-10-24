const axios = require('axios');
const {Telegraf} = require('telegraf');
const TOKEN = "8188467356:AAEmzAy6I8USD0eUjwm8vM-XOv4oTnIyzvo";

// Create a bot that uses 'polling' to fetch new updates
const bot = new Telegraf(TOKEN);
const Url = `https://api.weatherstack.com/current?access_key=${process.env.WEATHER_API}&query=`;
console.log(Url);

const fetchData = async (cityName) => {
    const res = await axios.get(`${Url + cityName}`);
    return res;
  };


bot.start((ctx) => {
    ctx.reply("Hello i`m a bot");
})

bot.on("text", (ok) => {
    console.log(ok.message.text);
});

bot.launch()