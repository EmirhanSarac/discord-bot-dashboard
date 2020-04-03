
const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const chalk = require('chalk')

module.exports = async message => {
  
  let client = message.client;
  
  const ayarlar = client.ayarlar
  
  //if (!client.users.get(client.user.id).hasPermission("SEND_MESSAGES")) return message.reply(`Yeterli izinlere sahip değilim! \n**İhtiyacım Olan Yetki:** \n\`Mesaj Gönder\``)
  
  if (!message.guild) return;
  
let prefix;
  
if (db.has(`prefix_${message.guild.id}`) === true) {
  prefix = db.fetch(`prefix_${message.guild.id}`)
}
  
if (db.has(`prefix_${message.guild.id}`) === false) {
  prefix = client.ayarlar.prefix
}
  
  var args = message.content.split(' ').slice(1)
  
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  
  /*if (client.commands.has(command) === false) {
      const embed = new Discord.RichEmbed()
					.setDescription(`Bu komut Bot Sahibi tarafından devre dışı bırakılmış!`)
					.setColor("RANDOM")
				message.channel.send({embed})
    }*/
  
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
   } else if (client.english.has(command)) {
    cmd = client.english.get(command);
    }
  
  var dill = 'tr'
	if(db.has(`dil_${message.guild.id}`) === true) {
		var dill = "en"
	}
	const dil = client[dill]
  if(db.has(`yasakK_${message.guild.id}`) === true) {
  if(db.fetch(`yasakK_${message.guild.id}`).includes(cmd.help.name)) return message.channel.send('Bu komut bu sunucuda **yasaklanmıştır!**')
  
}
  let veri = await db.fetch(`botbakım`)
if(veri) {
 if(message.author.id !== "282453998529806338") {
 
 let codeming = new Discord.RichEmbed()
 .setTitle('Bakımdayız :x:')
 .setDescription('Bot,şu an kurucu tarafından bakıma alındı.')
 .addField('Bakım Sebebi:', veri)
 .setColor('RED')
message.channel.send(codeming).then(m => m.delete(10000))
 return
 } 
  
}
  
   //const embed22 = new Discord.RichEmbed()
 //.setColor('RANDOM')
// .setDescription(`**${message.guild.name}** Adlı sunucuda **${message.author.tag}** adlı kullanıcı **${cmd.help.name}** komutunu kullandı.`)
  //client.guilds.get('627204002676736031').channels.get('657976342989766677').send(embed22)
  
// if (db.has(`yasak_${message.guild.id}_${cmd.help.name}`)){
 //   return message.channel.send(client.emojis.get(client.emojiler.hayır) + ' Bu komut sunucuda **yasaklanmıştır!**')
// }
// if (db.has(`yasak_${message.guild.id}_${cmd.help.name}`)){
 //   return message.channel.send(client.emojis.get(client.emojiler.hayır) + ' Bu komut sunucuda **yasaklanmıştır!**')
// }
 

db.add(`komutklnm_${message.author.id}`, 1)
  
  db.add(`sunucuxp_${message.guild.id}`, 1)
  
  var y = db.fetch(`sunucuxp_${message.guild.id}`);
  
  if (y === 50) {
    db.set(`premium_${message.guild.id}`, "aktif")
    let e = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Tebrikler ${message.guild.name}!`)
    .setDescription(`Sunucu Puanı başarıyla **${y}** puana ulaştı! Premium mod aktif edildi!`)
    message.channel.send(e)
    message.guild.owner.send(e)
  }
  
  if (cmd) {
    

    
    if (db.has(`karalist_${message.author.id}`) === true) {
      if (!client.users.get('282453998529806338')) {
     
       
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("Sen botun komutlarını kullanamazsın! Çünkü botun kara listesindesin!")
    message.channel.send({embed: embed})

    return
      }
  };
   
  let i = await db.fetch(`ktr_${message.guild.id}`);
    let sunucu = db.fetch(`ktr_${message.guild.id}`);
    let logkanal = await db.fetch(`log_${message.guild.id}`)
    if (i){
       if (message.member.hasPermission("ADMINISTRATOR")) {
    }  else
      if
        (!sunucu){
         
        } else
  if(!db.has(`üyelikk_${message.member.id}`)) {
if(message.channel.id !== sunucu) return message.channel.send(`Hey!, <@${message.author.id}> Burası komut kanalı değil. <#`+ sunucu+`> kanalına giderek komutlarımı ordan kullanabilirsin.`)
  .then
(message.delete())    
  .then(message => message.delete(10000));
  } else
   
       if(db.has(`üyelikk_${message.member.id}`)) {
if(message.channel.id !== sunucu) return message.channel.send(`<a:mavi:632272730200473600> Kral, <@${message.author.id}> Burası komut kanalı değil. <#`+ sunucu+`> kanalına giderek komutlarımı ordan kullanabilirsin. <a:mavi:632272730200473600>`)
  .then
(message.delete())    
  .then(message => message.delete(10000));
    }
       } 
      //if (ayarlar.sahip.includes(message.author.id)) return;
    
    if (cmd.conf.enabled === false) {
      if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.official_sahip.includes(message.author.id)) {
        const embed = new Discord.RichEmbed()
					.setDescription(`Bu komut şuanda sunucularda kullanıma kapalıdır! (Yapım aşamasındadır)`)
					.setColor("RANDOM")
				message.channel.send({embed})
				return
      }
    }
    
    if (cmd.conf.bakim === false) {
      //if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.official_sahip.includes(message.author.id)) {
        const embed = new Discord.RichEmbed()
					.setDescription(`Bu komut bakımdadır.`)
					.setColor("RANDOM")
				message.channel.send({embed})
				/*return
      }*/
    }
    
    if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu komutu kullanabilmek için Mesajları Yönet iznine sahip olmalısın!`)
          .setColor("RANDOM")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("KICK_MEMBERS")) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu komutu kullanabilmek için Üyeleri At iznine sahip olmalısın!`)
					.setColor("RANDOM")
				message.channel.send({embed})
				return
			}
		}
    if (cmd.conf.permLevel === 3) {
			if (!message.member.hasPermission("BAN_MEMBERS")) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu komutu kullanabilmek için Üyeleri Yasakla iznine sahip olmalısın!`)
					.setColor("RANDOM")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 4) {
			if (!message.member.hasPermission("ADMINISTRATOR")) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu komutu kullanabilmek için Yönetici iznine sahip olmalısın!`)
					.setColor("RANDOM")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 5) {
			if (!ayarlar.sahip.includes(message.author.id) && !ayarlar.official_sahip.includes(message.author.id)) {
				const embed = new Discord.RichEmbed()
					.setDescription(`Bu komutu sadece Bot Sahibi kullanabilir!`)
					.setColor("RANDOM")
				message.channel.send({embed})
				return
			}
		}
      
    cmd.run(client, message, args, dil, dill);
    
  }
  
};

