const Discord = require('discord.js')
const os = require('os')
var speedTest = require('speedtest-net');

exports.run = async (client, message, args) => {
  
  var m = await message.channel.send(`${client.emojis.get(client.emojiler.yukleniyor)} Gerekli veriler hesaplanıyor...`)
  
  var osType = os.type();

  if (osType === 'Darwin') osType = 'macOS'
  else if (osType === 'Windows') osType = 'Windows'
  else if (osType === 'Linux') osType = 'Linux'
  else if (osType === 'Ubuntu') osType = 'Ubuntu'
  else osType = os.type();
    var test = speedTest({maxTime: 1000});
    test.on('data', data => {
const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
.setAuthor('Speed Test | Sonuçlar')
.addField('Anlık İstatistikler', `İndirme: **${data.speeds.download}**
Yükleme: **${data.speeds.upload}**`)
.addField('Normal Olarak Ölçülen İstatistikler', `İndirme: **${data.speeds.originalDownload}**
Yükleme: **${data.speeds.originalUpload}**`)
.addField('Pingler', `Discord API Pingi: **${client.ping}**
Speedtestde Ölçülen Ping: **${data.server.ping}**`)
.addField('Diğer Bilgiler', `İnternet Portunun IP'sı: **Güvenlik Sebebiyle Gizli!**
İşletim Sistemi: **${osType}**
İnternet Sağlayıcısı: **${data.client.isp}**
Host: **${data.server.host}**
Lokasyon: **${data.server.country}**,**${data.client.country}**
Sağlayıcı Lokasyonu: **${data.server.location}**
Sağlayıcı Sponsoru: **${data.server.sponsor}**`)
  return m.edit(embed)
});
 
    test.on('error', err => {
  console.log(err);
});
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "kullanıcı"
};

exports.help = {
  name: 'speedtest',
  description: 'speedtest',
  usage: 'speedtest'
};