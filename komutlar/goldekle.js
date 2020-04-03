const db = require('quick.db')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {

  let user = client.users.get(args.slice(0).join(' '));
  let nesne = args[0]
  if (!nesne) return message.reply('Herhangi bir ID belirtiniz.')
  
  db.set(`üyelikk_${nesne}`, 'üyelik')
  
  message.channel.send(`:white_check_mark: **${nesne}** ID'li kişi, özel üyelik sistemine eklendi.`)
 message.client.channels.get('690279835691516019').send(`<a:kirmizi:690267037745807431> \`${nesne}\` ID'li Kullanıcı Gold Üyeliğe Eklendi <a:kirmizi:690267037745807431>`)
if (message.client.users.get(''+nesne+'').send(`<a:kirmizi:690267037745807431> \`Gold üyeliğiniz aktif edildi\` <a:kirmizi:690267037745807431>`)){
 
} else return
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gold-ekle'],
    kategori: 'yapımcı',
  permLevel: 5
};
exports.help = {
  name: 'gold-üye-ekle',
  description: 'Gold üye ekler',
  usage: 'gold-üye-ekle'
};