const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = async(client, message, args) => {
    let msg = await message.channel.send("Resim aranıyor...");

    let {body} = await superagent 
    .get('https://aws.random.cat/meow');
    if(!{body}) return message.channel.send("Bir hata oluştu. Tekrar deneyiniz.")

    const embed = new Discord.RichEmbed()
    .setColor('GREEN')
    .setDescription("**"+message.author.username+"**, İşte bir kedi !")
    .setImage(body.file)
    .setTimestamp()
    message.channel.send({embed})


    msg.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
    kategori: 'eğlence',
  permLevel: 0
};

exports.help = {
    name: "kedi",
    description: "Bir kedi resmi gönderir.",
    usage: "<prefix>kedi"
};
