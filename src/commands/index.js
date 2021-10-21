const guildId = process.env.GUILD_ID;
const channelId = process.env.CHANNEL_ID;

//array of eightball replies
const eightBall = [
	'As I see it, yes.',
	'Ask again later.',
	'You\'d rather not know.',
	'Concentrate and ask again.',
	'Don\'t count on it.',
	'it is certain',
	'Don\'t count on it.',
	'It is not clear'
];

module.exports = async (msg) => {
	// said message will show up in our console
	console.log(msg);
	// listening on certain server and channel
	if (msg.guild.id === guildId && msg.channel.id === channelId) {
		// if someone posts 'test'
		if (msg.content.toLowerCase() === 'test') {
			// then reply with 🔽
			await msg.channel.send('fuck off! already.');
			// shows msg in console 🔽
			console.log('Bing Bong! msg sent!');
		}
		//if someone gives command of "!8boll " then you get a reply from the eightball array
		let regex = /^!8bot\s.+/i;
		if (regex.exec(msg.content)) {
			const i = Math.floor(Math.random()*eightBall.length);
			const reply = eightBall[i];
			await msg.reply(reply);
		}
	}
};
