const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

const guildId = process.env.GUILD_ID;
const channelId = process.env.CHANNEL_ID;

client.once('ready', () => {
  console.log("BOOTING UP! 100%, 🤖 I am now ready to configure!");
});

client.on('message', msg => {
  console.log(msg);
  if (msg.guild.id === guildId && msg.channel.id === channelId) {
    
  }
});

client.login(process.env.BOT_TOKEN); 