const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

// Example command
if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **Tank** 🚀')
	.setDescription("**ADMIN** \n`Contact : rezkyxd109@gmail.com ` \n`Bot created on : 2023-2-19` \n`tools : ddos game, ddos web, trace location(soon).`\n `Gmail : rezkyxd109@gmail.com`\n ** Developer : RezkyMC **")
	message.channel.send(embed1);
	return;
	}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['admin'],
  permLevel: 0
}

exports.help = {
  name: 'admin',
  description: 'Tank',
  usage: 'admin'
}
