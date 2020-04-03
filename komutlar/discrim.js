const Discord = require('discord.js');
const fs = require('fs');

//var ayarlar = require('../ayarlar.json');

exports.run = async (client, msg, args) => {
    const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${msg.author.id}`)
.set("Authorization", client.ayarlar.dbltoken)
.then(response => {
var check = response.body.voted;
if(check == 1) { 
  if(args[0].length > 4) return msg.channel.send('Discrimler 4 basamaklı olur')
  const s = [`asd1`, `asd2`, `asd3`]
  	const discrim = args[0] || msg.author.discriminator;
        const users = client.users.filter(user => user.discriminator === discrim).map(user => user.tag);
        if (users < 1) {
            let embed = {
                color: 'RANDOM',
                description: `${discrim} bulunamadı!`,
              };
            return msg.channel.send({embed});
          
        } else {
       
           msg.channel.send(`

${users.join('\n')}


`, {split: true, code: "md"})

          
}
 } else {
let embed = new Discord.RichEmbed()
      .setTitle('HATA')
      .setColor('RANDOM')
      .setDescription(`${client.emojis.get(client.emojiler.hayır)} **Hata**, bu komutu kullanmak için **12 saat aralıkla** **[BURADAN](https://discordbots.org/bot/${client.user.id}/vote)**  botu oylamanız gerekmektedir. Onaylanması **1-4** dakikayı bulabilir, lütfen bekleyin. `)
    msg.channel.send(embed)
      return }});
}

	exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: ['tag-ara'],
		permLevel: 0,
    kategori: "kullanıcı",
	};
	  
	exports.help = {
		name: 'discrim',
		description: 'İstediğiniz bir discrimi botun ekli olduğu sunucularda arar',
		usage: 'discrim',
    
	};