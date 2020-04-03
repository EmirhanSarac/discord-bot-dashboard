const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
    const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", client.ayarlar.dbltoken)
.then(response => {
var check = response.body.voted;
if(check == 1) {
   message.channel.send('Sanarım oltana balık düştü.').then(message => {
   var espriler = ['Sazan Tuttun! :fish:' ,'Köpek Balığı Tuttun.' ,'Uskumru Tuttun! :fish:' ,'Mezgit Tuttun! :fish:' ,'Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?' ,'Hamsi Tuttun! :fish:' ,'Levrek Tuttun! :fish:' ,'Hiçbirşey Tutamadın Maalesef! :wastebasket:' ,'Alabalık Tuttun! :fish:' ,'Maalesef Balık Oltadan Kaçtı! :wastebasket:' ,'İstavrit Tuttun! :fish:'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
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
  aliases: ['balık tut', 'balık-tut', 'balık-tut', 'balık tut','balık'],
  permLevel: 0,
  kategori: 'eğlence'
};

exports.help = {
  name: 'balıktut',
  description: 'Balık Tutarsın.',
  usage: 'balıktut'
};