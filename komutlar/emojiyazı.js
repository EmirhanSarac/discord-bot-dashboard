const Discord = require('discord.js');

const mapping = {
    ' ': '   ',
    '0': ':zero:',
    '1': ':one:',
    '2': ':two:',
    '3': ':three:',
    '4': ':four:',
    '5': ':five:',
    '6': ':six:',
    '7': ':seven:',
    '8': ':eight:',
    '9': ':nine:',
    '!': ':grey_exclamation:',
    '?': ':grey_question:',
    '#': ':hash:',
    '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
	mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});


exports.run = function(client, message, args) {
  const snekfetch = require("snekfetch");
  snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
  .set("Authorization", client.ayarlar.dbltoken)
  .then(response => {
  var check = response.body.voted;
  if(check == 1) {
	if (args.length < 1) return message.reply('<a:h_:591907035553988638> **|**  Lütfen bir mesaj belirt. **Doğru Kullanım**: c!emojiyazı <mesaj>')
		
	message.channel.send(args.join(' ').split('').map(c => mapping[c] || c).join(' '));
message.react('617413726768988160')
} else {
  let embed = new Discord.RichEmbed()
        .setTitle('HATA')
        .setColor('RANDOM')
        .setDescription(`${client.emojis.get(client.emojiler.hayır)} **Hata**, bu komutu kullanmak için **12 saat aralıkla** **[BURADAN](https://discordbots.org/bot/${client.user.id}/vote)**  botu oylamanız gerekmektedir. Onaylanması **1-4** dakikayı bulabilir, lütfen bekleyin. `)
      message.channel.send(embed)
        return }});
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['emojiy'],
  permLevel: 0 ,
    kategori: 'eğlence'
};

exports.help = {
  name: 'emojiyazı', 
  description: 'Mesajınızı emoji haline getirir',
  usage: 'emojiyazı <mesaj>'
};
