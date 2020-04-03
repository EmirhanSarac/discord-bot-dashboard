const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", client.ayarlar.dbltoken)
.then(response => {
var check = response.body.voted;
if(check == 1) {
   message.channel.send('Kapak Laf Yükleniyor..').then(message => {
   var espriler = ['Aslında ben seni olduğun gibi kabul ederdim de; sen olmamışsın sıkıntı orada…','Eskiden altını çizdiklerimin şimdi ise üstünü çiziyorum.','Küfür etmeyi bende sevmiyorum ama şerefsizlik yapana teşekkür edemem.','Tabağına yiyebileceğin kadar yemek, hayatına sevebileceğin kadar insan al. İsrafın lüzumu yok.','Matematikte kötüsün ama çıkarlarını hesaplamada çok iyisin.','Sokak lambası gibi olma ey yar kime yandığın belli olsun.','İyileştirir diye medet umduklarımız tekrar tekrar yaralıyor bizi.','Şerefin kadar konuş desem ömür boyu susacak insanlar tanıyorum.','Belki tavırların beni en ağır küfürlere tahrik eder ama benim yüzümdeki o iplemez gülüş senin gelmişini geçmişini tatmin eder.','Sen hayata at gözlükleriyle bakmaya devam edersen, birilerinin çüş demesi zoruna gitmesin.','Şu saatten sonra sende Fırtına kopsa; bende yaprak oynamaz.','Bir zamanlar toz konduramadıklarım, şimdi kirden görünmez olmuş.'];
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
  } 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kapak', 'kapak-söz', 'laf-çak','kapak-laf','kapak-sözler'],
    kategori: 'eğlence',
  permLevel: 0
};

exports.help = {
  name: 'Kapak Söz',
  description: 'Kapak söz atar',
  usage: 'kapak'
};