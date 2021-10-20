const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.once('ready', () => {
    console.log("BOOTING UP! 100%, :robot: I am now ready to configure!");
});

client.on('message', msg => {
    console.log(msg);
});

client.login(process.env.BOT_TOKEN); 