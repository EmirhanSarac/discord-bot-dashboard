const Discord = require("discord.js");
var Jimp = require('jimp');
const request = require('request');
var mcPort = 25565
var ayarlar = require('../ayarlar.json')
var prefix = ayarlar.prefix;
exports.run = async (client, message, args) => {
  const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", client.ayarlar.dbltoken)
.then(response => {
var check = response.body.voted;
if(check == 1) {
    var user = message.mentions.users.first() || message.author;
    if (!message.guild) user = message.author;
  let mesaj = args.slice(1).join(' '); 
  	if (args[0] === 'avatar') {
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/avatar/' + mesaj
 if (mesaj.length < 1) return message.reply('bir oyuncu adı belirtmelisin.');
 if (mesaj == member) {
    message.reply('kullanıcı değil, bir oyuncu adı belirtmelisin :/')
 } else {
 const mcbody = new Discord.RichEmbed()
   .setColor('RED')
   .setTitle('Oyuncu: ' + mesaj)
   .setImage(body)
 message.channel.send(mcbody);
}
       }
  	if (args[0] === 'vücut') {
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.reply('bir oyuncu adı belirtmelisin.');
 if (mesaj == member) {
    message.reply('kullanıcı değil, bir oyuncu adı belirtmelisin :/')
 } else {
 const mcbody = new Discord.RichEmbed()
   .setColor('RED')
   .setTitle('Oyuncu: ' + mesaj)
   .setImage(body)
 message.channel.send(mcbody);
}
       }
  	if (args[0] === 'kafa') {
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/head/' + mesaj
 if (mesaj.length < 1) return message.reply('bir oyuncu adı belirtmelisin.');
 if (mesaj == member) {
    message.reply('kullanıcı değil, bir oyuncu adı belirtmelisin :/')
 } else {
 const mcbody = new Discord.RichEmbed()
   .setColor('RED')
   .setTitle('Oyuncu: ' + mesaj)
   .setImage(body)
 message.channel.send(mcbody);
}
       }
  	if (args[0] === 'skin') {
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/skin/' + mesaj
 if (mesaj.length < 1) return message.reply('bir oyuncu adı belirtmelisin.');
 if (mesaj == member) {
    message.reply('kullanıcı değil, bir oyuncu adı belirtmelisin :/')
 } else {
 const mcbody = new Discord.RichEmbed()
   .setColor('RED')
   .setTitle('Oyuncu: ' + mesaj)
   .setImage(body)
 message.channel.send(mcbody);
}
       }
    	if (args[0] === 'sunucu') {
     var url = 'http://mcapi.us/server/status?ip=' + args[1] + '&port=' + mcPort;
		let reason = args.slice(1).join(' ');
        request(url, function (err, response, body) {
            if (err) {
                console.log(err);
                return message.channel.sendEmbed(new Discord.RichEmbed().setTitle('Hata!').addField('Sunucu bilgileri alınırken beklenmedik bir hatayla karşılaştık.').setThumbnail("https://cdn.pixabay.com/photo/2013/07/12/19/25/minecraft-154749_960_720.png").setAuthor("XERESSA").setFooter('').setColor("RED").setTimestamp());
            }
            body = JSON.parse(body);
            var status = '**〉** Sunucu » **' + reason + '**\n\n**〉** Sunucu şu anda aktif mi » **Hayır**\n\n**〉** Bu IP adresi bir sunucuya ait değil veya sunucu şu anda kapalı.';
            if (body.online) {
			status = '**〉** Sunucu adı » **' + reason + '**\n\n**〉** Sunucu şu anda aktif mi » **Evet**\n\n**〉** Sunucu versiyonu » **'+ body.server.name +'**\n\n';
                if (body.players.now) {
                    status += '**〉** Aktif oyuncu sayısı » **' + body.players.now + '/'+ body.players.max +'**\n\n**〉** Açıklama » **' + body.motd +'**';
					} else {
						status += '**〉** Şu anda sunucuda kimse yok.';
                }
            }
            message.channel.sendEmbed(new Discord.RichEmbed().setDescription(status).setThumbnail('https://cdn.pixabay.com/photo/2013/07/12/19/25/minecraft-154749_960_720.png').setColor('RED').setFooter('' + body.motd + ''));
        });
 
}
  
    if (!args[0]) return message.channel.send('Lütfen bilgisini almak istedediğiniz işlemi yazın; işlemler ``kafa``,``skin``,``vücut``,``avatar``,``sunucu`` şeklinde olmalıdır; ``!!minecraft kafa Huahwi``');
    if (args[0] > 8) return message.channel.send('Lütfen bilgisini almak istedediğiniz işlemi yazın; işlemler ``kafa``,``skin``,``vücut``,``avatar``,``sunucu`` şeklinde olmalıdır; ``!!minecraft kafa Huahwi``');
  
  } else {
        let embed = new Discord.RichEmbed()
              .setTitle('HATA')
              .setColor('RANDOM')
              .setDescription(`${client.emojis.get(client.emojiler.hayır)} **Hata**, bu komutu kullanmak için **12 saat aralıkla** **[BURADAN](https://discordbots.org/bot/${client.user.id}/vote)**  botu oylamanız gerekmektedir. Onaylanması **1-4** dakikayı bulabilir, lütfen bekleyin. `)
            message.channel.send(embed)
              return }})
  
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mc'],
    permLevel: 0,
    kategori: "eğlence"
  };
  
  exports.help = {
    name: 'minecraft',
    description: 'Avatariniza Balance Efekti Ekler.',
    usage: 'minecraft <rakam>'
  };
