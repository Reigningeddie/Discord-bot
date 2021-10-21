const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();
const commandHandler = require('./commands');


client.once('ready', () => {
	console.log('BOOTING UP! 100%, 🤖 I am now ready to configure!');
});


// whenever someone on the server sends message
client.on( 'message', commandHandler );



client.login(process.env.BOT_TOKEN); 