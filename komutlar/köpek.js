const Discord = require('discord.js');
const superagent = require('superagent');

exports.run = async (client, message, args) => {

    let {body} = await superagent
    .get(`https://random.dog/woof.json`)

    let dogembed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle("Köpek")
    .setImage('body.file')

    message.channel.send(dogembed);
  message.react('617413726768988160')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['köpek'],
    kategori: 'eğlence',
  permLevel: 0
};

exports.help = {
  name: 'köpek',
  description: 'Rastgele Köpek Fotoğrafları Gösterir.',
  usage: 'köpek'
};
