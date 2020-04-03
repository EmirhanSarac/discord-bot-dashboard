const request = require('request-promise-native');

exports.run = async (Bastion, message, args) => {
  try {
    if (args.length < 1) {

      return message.reply("<:ak:617145990742278144> Lütfen GİF'in ne hakkında olacağını belirtin; ``!!rastgelegif <atılacak gif ismi>``");
    }

    let options = {
      url: 'http://api.giphy.com/v1/gifs/search',
      qs: {
        q: encodeURI(args.join('+')),
        api_key: 'dc6zaTOxFJmzC',
        limit: 10,
        offset: 0
      },
      json: true
    };

    let response = await request(options);

    if (response.data.length) {
      message.channel.send({
        embed: {
          color: 15105570,
          image: {
            url: response.data[Math.floor(Math.random() * response.data.length)].images.original.url
          },
        }
      }).catch(e => {
        console.log(e);
      });
    }
    else {
      return Bastion.emit('hata', '', Bastion.i18n.error(message.guild.language, 'bulunamadı', 'görsel'), message.channel);
    }
  }
  catch (e) {
    if (e.response) {
      return Bastion.emit('hata', e.response.statusCode, e.response.statusMessage, message.channel);
    }
    console.log(e);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rastgele-gif','rast-gele-gif'],
    kategori: 'eğlence',
  permLevel: 0
};

exports.help = {
  name: 'rastgelegif',
  description: "Mesajınızla ilgili gifleri Giphy'da aratır.",
  usage: 'rastgelegif <aranacak gif>'
};