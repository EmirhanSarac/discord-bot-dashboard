const Discord = require('discord.js');
const funnyWords = require('funny-words');

exports.run = (bot, message) => {
    let args = message.content.split(' ').slice(1).join(" ");
    
    if (!args) return message.channel.send("<a:h_:591907035553988638> Karışım için yazı girmelisin.")
    message.channel.send(funnyWords(args))
  message.react('617413726768988160')
}


module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
    kategori: 'eğlence',
  permLevel: 0
};

module.exports.help = {
  name: 'karıştır',
  description: 'yazdığınız yazıları karıştırır',
  usage: 'karıştır'
};