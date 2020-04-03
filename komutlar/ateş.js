

const Discord = require('discord.js');
exports.run = (client, message, args) => {
  const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", client.ayarlar.dbltoken)
.then(response => {
var check = response.body.voted;
if(check == 1) {  
    let guild = message.guild
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Kime ateş edeceksen etiketlemelisin.').catch(console.error);
    message.channel.send('Ateş ediliyor....')
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit(`${Random[kafasınasık]}`));
    var Random = [
    'Reiz sen ne yaptın? Adam öldü.',
    'Cazibene dayanamayıp adam kendini öldürdü.',
    'Adam yoğun bakımda, Kaç.',
        'Iskaladın tekrar dene.',
    ];
    var kafasınasık = Math.floor(Math.random() * Random.length);
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
  aliases: ['ateş','ateşet'],
  kategori: 'eğlence',
    permLevel: 0
};

exports.help = {
    name: 'ateş-et',
    description: 'İstediğiniz kişinin kafasına sıkar.',
    usage: 'ateş-et <@kullanıcı>]'
};