const Discord = require('discord.js');
var Jimp = require('jimp');

module.exports.run = async (client, message, args) => {
  
    const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", client.ayarlar.dbltoken)
.then(response => {
var check = response.body.voted;
if(check == 1) {
  var user = message.mentions.users.first() || message.author;
      message.channel.startTyping();
        var user = message.mentions.users.first() || message.author;
        if (!message.guild) user = message.author;

        Jimp.read(user.avatarURL, (err, image) => {
            image.resize(295, 295)
            image.greyscale()
            image.gaussian(1)
            Jimp.read("https://cdn.discordapp.com/attachments/444475700871823361/517270320021766145/hapishane.png", (err, avatar) => {
                avatar.resize(295, 295)
                image.composite(avatar, 0, 0).write(`./img/hapishane/${client.user.id}-${user.id}.png`);
                setTimeout(function() {
                    message.channel.send(new Discord.Attachment(`./img/hapishane/${client.user.id}-${user.id}.png`));
                  message.react('617413726768988160')
                }, 1000);
          message.channel.stopTyping();
            });
        });
      } else {
        let embed = new Discord.RichEmbed()
              .setTitle('HATA')
              .setColor('RANDOM')
              .setDescription(`${client.emojis.get(client.emojiler.hayır)} **Hata**, bu komutu kullanmak için **12 saat aralıkla** **[BURADAN](https://discordbots.org/bot/${client.user.id}/vote)**  botu oylamanız gerekmektedir. Onaylanması **1-4** dakikayı bulabilir, lütfen bekleyin. `)
            message.channel.send(embed)
              return }});
    }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
    kategori: 'efekt',
  permLevel: 0
};

exports.help = {
  name: 'hapishane',
  description: 'Hapishane efekti',
  usage: 'hapishane'
};