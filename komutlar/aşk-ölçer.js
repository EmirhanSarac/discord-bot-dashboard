const Discord = require('discord.js');

exports.run = (client, message, args) => {
      const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", client.ayarlar.dbltoken)
.then(response => {
var check = response.body.voted;
if(check == 1) {
  //if(message.author.id !== "486817385051979786") return message.reply("Bu komut şuanda güncellenmektedir!")
  
  const db = require('quick.db');
  
 
 
        let member = message.guild.member(message.mentions.users.array()[0] || message.guild.members.get(args[0]))
        let member2 = message.guild.member(message.mentions.users.array()[1] || message.guild.members.get(args[1]))
        var s = message.author
        if(member2) {
                var s = member2.user
        }
        if(!member) {
                const embed = new Discord.RichEmbed()
                        .setDescription('Lütfen bir üyeyi etiketleyiniz')
                        .setColor("RANDOM")
                message.channel.send({embed})
                return
        }
 
        var anasonuc = Math.floor(Math.random() * 101)
        var kalp = ''
        var akalp = ''
        if(Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
                var c = 0
                for(var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
                        kalp += '❤️'
                        c++
                }
                for(var x = c; x < 10; x++) {
                        akalp += `🖤`
                }
        } else {
                var kalp = '🖤'
                var akalp = '🖤🖤🖤🖤🖤🖤🖤🖤🖤'
        }
  var yorum = "Sizi evlendirelim <3"
        if(anasonuc < 80) {
                var yorum = "Biraz daha uğraşırsan bu iş olacak gibi :)"
        }
        if(anasonuc < 60) {
                var yorum = "Eh biraz biraz bir şeyler var gibi."
        }
        if(anasonuc < 40) {
                var yorum = "Azıcıkta olsa bir şeyler hissediyor sana :)"
        }
        if(anasonuc < 20) {
                var yorum =  "Bu iş olmaz sen bunu unut."
        }
  
        const embed = new Discord.RichEmbed()
                .setAuthor(`${member.user.tag} ve ${s.tag}`)
                .setDescription(`Aşk yüzdesi **%${anasonuc}**! \n${kalp}${akalp} \n\n${yorum}`)
                .setColor("RANDOM")
        message.channel.send({embed})
  
  
    
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
  aliases: ["aşk","aşkölçer","aşk-ölçer"],
  permLevel: 0,
    kategori: "eğlence",
  category: "fun"
};

exports.help = {
  name: 'aşk-ölçer',
  description: 'İki kullanıcı arasındaki aşkı ölçer.',
  usage: 'aşk-ölçer <@kullanıcı> veya aşk-ölçer <@kullanıcı> <@kullanıcı>',
};