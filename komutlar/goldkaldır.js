const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
 
  let nesne = args[0]
  if (!nesne) return message.reply('Herhangi bir ID belirtiniz.')
  
  db.delete(`üyelikk_${nesne}`)
  
  message.channel.send(`:white_check_mark: **${nesne}** ID'li kişi, özel üyelik sisteminden kaldırıldı.`)
  if (message.client.users.get(''+nesne+'').send(`<a:gri:690267571768786974> \`Gold üyeliğinizin süresi doldu\` <a:gri:690267571768786974>`)){
 
} else return
  message.client.channels.get('649340846197571584').send(`<a:gri:690267571768786974> \`${nesne}\` ID'li Kullanıcının Gold Üyeliği Silindi <a:gri:690267571768786974>`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gold-kaldır'],
    kategori: 'yapımcı',
  permLevel: 5
};
exports.help = {
  name: 'gold-üye-kaldır',

  description: 'Gold üye siler.',
  usage: 'gold-üye-kaldır'
};