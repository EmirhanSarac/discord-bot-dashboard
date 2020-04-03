const Discord = require("discord.js");
const instagram = require("user-instagram");
exports.run = (client, message, args) => {
   var x = args.slice(0).join(' ')
     const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", client.ayarlar.dbltoken)
.then(response => {
var check = response.body.voted;
if(check == 1) { 
   if (!x) return message.reply("Kullanıcı Adı Girmelisin!")

  let kullanici = args.join(" ");
  if (!kullanici) return message.reply(`❌ Bir Kullanıcı İsmi Girmelisin!`);
  instagram("https://www.instagram.com/" + kullanici).then(data => {
    const biocuk = data.bio.length === 0 ? "Yok" : data.bio;
    const isimcik = data.fullName.length === 0 ? "Yok" : data.fullName;
    var gizlimi;
    var onaylimi;
    if (data.isPrivate === false) gizlimi = "Hayır";
    if (data.isPrivate === true) gizlimi = "Evet";
    if (data.isVerified === false) onaylimi = "Hayır";
    if (data.isVerified === true) onaylimi = "Evet";
    const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(`${data.avatarHD}`)
      .addField("🔱 Kullanıcı İsmi: ", `${kullanici}`)
      .addField("👦 Tam İsmi: ", isimcik)
      .addField("👥 Takipçi Sayısı: ", `${data.subscriberCount}`)
      .addField("🔃 Takip Ettiği Kişi Sayısı: ", `${data.subscribtions}`)
      .addField("🏰 Gönderi Sayısı: ", `${data.postCount}`)
      .addField("📑 Kullanıcı Biografisi: ", biocuk)
      .addField("🔐 ID: ", `${data.id}`)
  

      .addField("🎭 Gizli Profil Mi: ", `${gizlimi}`)
      .addField("💯 Onaylı Hesapmı: ", `${onaylimi}`)
      .addField("🌐 Hesabın Linki: ", `${data.profileLink}`)
       .addField("Profil Linki", `${data.avatar}`)
      .setFooter(`İnstagram Bilgi Sistemi`)
      .setTimestamp();

   if (message.channel.send(embed)){
     
   } else message.channel.send('Bir hata oluştı. Kullanıcı adını doğru giriniz.')
  }) 
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
  guildOnly: false,
    kategori: 'kullanıcı',
  aliases: ["instagram-bilgi", "instagram-info"],
  permLevel: 0
};
exports.help = {
  name: "instagram",
  description: "Belirlenen Instagram Hesaplarinin bilgilerini verir!",
  usage: "instagram <instagram-ismi>"
};