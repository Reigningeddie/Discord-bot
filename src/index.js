const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.once('ready', () => {
    console.log("BOOTING UP! 100%, I am now ready to configure!");
});

client.login(process.env.BOT_TOKEN);