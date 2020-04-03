const qrcode = require("qrcode");
const tempy = require("tempy");
const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  const snekfetch = require("snekfetch");
  snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
  .set("Authorization", client.ayarlar.dbltoken)
  .then(response => {
  var check = response.body.voted;
  if(check == 1) {
    const qrOutput = tempy.file({ extension: "png" });
    message.channel.startTyping();
    if (args.length > 0) {
        qrcode.toFile(qrOutput, args.join(" "), { margin: 1 }, (error) => {
            if (error) throw new Error(error);
            message.channel.stopTyping();
            message.channel.send({
                files: [{
                    attachment: qrOutput,
                    name: "qr.png"
                }]
            });
      
        });
    }else{
        message.channel.stopTyping();
        message.reply("Bir QR kodu oluşturmak için bir argüman girmeniz gerekir!");
            
    }
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
    aliases: ["qrkod","qr"],
    kategori: 'eğlence',
    permLevel: 0
};

exports.help = {
    name : "qr", 
    usage: "qrkod <yazı>",
    description: "qrkod"
};