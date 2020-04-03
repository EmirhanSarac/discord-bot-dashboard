const Discord = require('discord.js');
const request = require('node-superfetch');
const db = require('quick.db');
const { stripIndents } = require('common-tags');
const snekfetch = require("snekfetch");

const ark = ["renk", "color"]
const arm = ["resim", "image"]
const reset = ['sıfırla', 'reset']
const saydam = ['saydamlaştır', 'saydam']
const award = ['ödül', 'ödüller', 'award', 'reward', 'prize']

exports.run = async (client, msg, args) => {
    
    if (db.has(`lvl2_${msg.author.id}`) === true) {
  if (db.has(`lvll_${msg.guild.id}`) === true) {
    	
        if(ark.includes(args[0])) {
    if(reset.includes(args[1])) {
                        if(!db.has(`${msg.author.id}.renk`)) {
                                const embed = new Discord.RichEmbed()
                                        .setDescription("Renk değiştirilmemiş neyi sıfırlayacaksın!")
                                        .setColor("RANDOM")
                                msg.channel.send({embed})
                                return
                        }
                        db.delete(`${msg.author.id}.renk`)
                        const embed = new Discord.RichEmbed()
                                .setDescription("Renk başarıyla sıfırlandı!")
                                .setColor("RANDOM")
                        msg.channel.send({embed})
                        return
                }
                if(!args[1]) {
                        const embed = new Discord.RichEmbed()
                                .setDescription("Bir renk kodu veya `sıfırla` yazmalısın!")
      .setFooter("Başına # koymayınız!")
                               .setColor("RANDOM")
                        msg.channel.send({embed})
                        return
                }
                if(args[1].length !== 6) {
                        const embed = new Discord.RichEmbed()
                                .setDescription("Renk kodları 6 hane olur!")
      .setFooter("Başına # koymayınız!")
                                .setColor("RANDOM")
                        msg.channel.send({embed})
                        return
                }
                        
                db.set(`${msg.author.id}.renk`, `#${args[1]}`)
    
    var Canvas = require('canvas')
                var canvas = Canvas.createCanvas(150, 150)
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = `#${args[1]}`;
                ctx.fill()
                ctx.fillRect(0, 0, 150, 150)
                const embed = new Discord.RichEmbed()
                        .setAuthor("Ayarlanan Renk: #{renk}".replace("{renk}", args[1].toUpperCase()))
                        .setImage(`attachment://renk.png`)
                        .setColor("RANDOM")
                msg.channel.send({embed, files:[{attachment:canvas.toBuffer(),name:"renk.png"}]})
                return
        }
        if(arm.includes(args[0])) {
                if(reset.includes(args[1])) {
                        if(!db.has(`${msg.author.id}.resim`)) {
                                const embed = new Discord.RichEmbed()
                                        .setDescription("Ayarlı bir resim yok neyi sıfırlayacaksın!")
                                        .setColor("RANDOM")
                                msg.channel.send({embed})
                                return
                        }
                        db.delete(`${msg.author.id}.resim`)
                        const embed = new Discord.RichEmbed()
                                .setDescription("Resim başarıyla sıfırlandı!")
                                .setColor("RANDOM")
                        msg.channel.send({embed})
                        return
                }
                if(!args[1]) {
                        const embed = new Discord.RichEmbed()
                                .setDescription("Ayarlamak istediğiniz resmin linkini veya `sıfırla` yazınız!")
      .setFooter("NOT: Resim linki http veya https ile başlamalı!")
                                .setColor("RANDOM")
                        msg.channel.send({embed})
                        return
                }
                if(!args[1].startsWith('http')) {
                        const embed = new Discord.RichEmbed()
                                .setDescription("Resim linki http veya https ile başlamalı!")
                                .setColor("RANDOM")
                        msg.channel.send({embed})
                        return
                }

                db.set(`${msg.author.id}.resim`, args[1])
                const embed = new Discord.RichEmbed()
                        .setAuthor("Resim başarıyla ayarlandı!")
                        .setImage(args[1])
                        .setColor("RANDOM")
                msg.channel.send({embed})
                return
        }
  
  if (award.includes(args[0])) {
    
    if (!msg.member.hasPermission("MANAGE_ROLES")) {
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription("Bu komutu kullanabilmek için **Rolleri Yönet** iznine sahip olmalısın!")
      msg.channel.send({embed})
      return
    }
    
    if(reset.includes(args[1])) {
                        if(!db.has(`roll_${msg.guild.id}`)) {
        if (!db.has(`rollss_${msg.guild.id}`)) {
                                const embed = new Discord.RichEmbed()
                                        .setDescription("Rol ödülleri sistemi sıfırlanamıyor çünkü bu sistem aktif edilmemiş!")
                                        .setColor("RANDOM")
                                msg.channel.send({embed})
                                return
                        }}
                        db.delete(`roll_${msg.guild.id}`)
      db.delete(`rollss_${msg.guild.id}`)
                        const embed = new Discord.RichEmbed()
                                .setDescription("Rol ödülleri sistemi başarıyla sıfırlandı!")
                                .setColor("RANDOM")
                        msg.channel.send({embed})
                        return
                }
    
    let r = msg.mentions.roles.first();
    
    if (!r) {
      const embed = new Discord.RichEmbed()
                                .setDescription("Bir rolü etiketleyiniz veya `sıfırla` yazınız!")
                                .setColor("RANDOM")
                        msg.channel.send({embed})
                        return
    }
    
    if (!args[2]) {
      const embed = new Discord.RichEmbed()
                                .setDescription(`Lütfen **${r.name}** rolünü almak için kaçıncı seviyede olmak gerektiğini yazınız!`)
        .setFooter("Sayı biçiminde yazınız.")
                                .setColor("RANDOM")
                        msg.channel.send({embed})
                        return
    }
    
    if (isNaN(args[2])) {
      const embed = new Discord.RichEmbed()
                                .setDescription(`Lütfen **${r.name}** rolünü almak için kaçıncı seviyede olmak gerektiğini sayı biçiminde yazınız!`)
                                .setColor("RANDOM")
                        msg.channel.send({embed})
                        return
    }
    
  db.set(`roll_${msg.guild.id}`, r.id)
  db.set(`rollss_${msg.guild.id}`, args[2])
  
    const embed = new Discord.RichEmbed()
                                .setDescription("Rol ödülleri sistemi başarıyla aktif edildi!")
                                .setColor("RANDOM")
                        msg.channel.send({embed})
                        return
  }
  
  let u = msg.mentions.users.first() || msg.author;

        if(u.bot === true) {
                const embed = new Discord.RichEmbed()
                        .setDescription("Botların seviyesi bulunmamaktadır!")
                        .setColor("RANDOM")
                msg.channel.send(embed)
                return
        }
  
  var g = "95"
  
  var Canvas = require('canvas')
        var canvas = Canvas.createCanvas(750, 300)
        var ctx = canvas.getContext('2d');
        const avatarURL = u.displayAvatarURL
        const { body } = await request.get(avatarURL);
        const avatar = await Canvas.loadImage(body);
        if(db.has(`${u.id}.resim`)) {
                const rs = await request.get(db.fetch(`${u.id}.resim`));
                const resim = await Canvas.loadImage(rs.body);
                ctx.drawImage(resim, 0, 0, 750, 300);
    
    var g = "55"
    
        }
  
  if(saydam.includes(args[0])) {
                if(reset.includes(args[1])) {
                        if(!db.has(`${msg.author.id}.saydam`)) {
                                const embed = new Discord.RichEmbed()
                                        .setDescription("Saydamlık zaten standart halinde!")
                                        .setColor("RANDOM")
                                msg.channel.send({embed})
                                return
                        }
                        db.delete(`${msg.author.id}.saydam`)
                        const embed = new Discord.RichEmbed()
                                .setDescription("Saydamlık başarıyla sıfırlandı!")
                                .setColor("RANDOM")
                        msg.channel.send({embed})
                        return
                }
                if(!args[1]) {
                        const embed = new Discord.RichEmbed()
                                .setDescription("Ayarlamak istediğiniz dereceyi veya `sıfırla` yazınız! \n**Dereceler:** `1`, `2`, `3`, `4`, `5`")
                                .setColor("RANDOM")
                        msg.channel.send({embed})
                        return
                }
    if(isNaN(args[1])) {
                        const embed = new Discord.RichEmbed()
                                .setDescription("Ayarlamak istediğiniz dereceyi veya `sıfırla` yazınız! \n**Dereceler:** `1`, `2`, `3`, `4`, `5`")
                                .setColor("RANDOM")
                        msg.channel.send({embed})
                        return
                }

    if (args[1] > 5 || args[1] < 1) {
        const embed = new Discord.RichEmbed()
                                .setDescription("Saydamlık derecesi için `5`ten fazla bir seçenek yok! \n**Dereceler:** `1`, `2`, `3`, `4`, `5`")
                                .setColor("RANDOM")
                        msg.channel.send({embed})
                        return
    };
    
                db.set(`${msg.author.id}.saydam`, args[1])
                const embed = new Discord.RichEmbed()
                        .setDescription("Siyah katmanın saydamlığı başarıyla değiştirildi!")
                        .setColor("RANDOM")
                msg.channel.send({embed})
                return
    
  };
  
  if (db.has(`${msg.author.id}.saydam`) === true) {
    
    if (db.fetch(`${msg.author.id}.saydam`) === "1") {
      
      var g = "40"
      
    };
    
    if (db.fetch(`${msg.author.id}.saydam`) === "2") {
      
      var g = "30"
      
    };
    
    if (db.fetch(`${msg.author.id}.saydam`) === "3") {
      
      var g = "20"
      
    };
    
    if (db.fetch(`${msg.author.id}.saydam`) === "4") {
      
      var g = "10"
      
    };
    
    if (db.fetch(`${msg.author.id}.saydam`) === "5") {
      
      var g = "0"
      
    };
    
  };
  
  ctx.fillStyle = "rgba(0, 0, 0, 0."+g+")";
  ctx.fill()
        ctx.fillRect(25, 20, 700, 260)  
  
  
  
        ctx.fillStyle = "rgba(0, 0, 0, 0.30)";
        ctx.fill()
        ctx.fillRect(0, 0, 750, 300)
  
        var re = db.has(`${u.id}.renk`) ? db.fetch(`${u.id}.renk`) : "#84a0ed";
  //	ctx.fillStyle = db.varMı(`${u.id}.renk`) ? db.veri(`${u.id}.renk`) : "#84a0ed";
  
  var xp = db.fetch(`puancik_${u.id + msg.guild.id}`);
  var lvl = db.fetch(`seviye_${u.id + msg.guild.id}`);  
  
        let sira = ''
        const sorted = msg.guild.members.filter(u => !u.user.bot).array().sort((a, b) => { return db.fetch(`seviye_${b.user.id + msg.guild.id}`) - db.fetch(`seviye_${a.user.id + msg.guild.id}`) });
        const top10 = sorted.splice(0, msg.guild.members.size)
        const mappedID = top10.map(s => s.user.id);
        for(var i = 0; i < msg.guild.members.size; i++) {
                if(mappedID[i] === u.id) {
                        sira += `${i + 1}`
                }
        }

        const Durum = u.presence.status;
        var Durmm = ''

                if (Durum === 'online') { var Durmm = 'green' }
                if (Durum === 'offline') { var Durmm = 'grey' }
                if (Durum === 'dnd') { var Durmm = 'red' }
                if (Durum === 'idle') { var Durmm = 'yellow' }

             

        var de = 1.6
        ctx.beginPath()
        ctx.fillStyle = "#999999";
        ctx.arc(257 + 18.5, 147.5 + 18.5 + 36.25, 18.5, 1.5 * Math.PI, 0.5 * Math.PI, true);
        ctx.fill();
        ctx.fillRect(257 + 18.5, 147.5 + 36.15, 250 * de, 37.5);
        ctx.arc(257 + 18.5 + 250 * de, 147.5 + 18.5 + 36.25, 18.75, 1.5 * Math.PI, 0.5 * Math.PI, false);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = `${re}`;
        ctx.arc(257 + 18.5, 147.5 + 18.5 + 36.25, 18.5, 1.5 * Math.PI, 0.5 * Math.PI, true);
        ctx.fill();
        ctx.fillRect(257 + 18.5, 147.5 + 36.25, xp * de, 37.5);
        ctx.arc(257 + 18.5 + xp * de, 147.5 + 18.5 + 36.25, 18.75, 1.5 * Math.PI, 0.5 * Math.PI, false);
        ctx.fill();
        ctx.fillStyle = `${re}`;
        ctx.font = '28px Impact';
        ctx.textAlign = "right";
        ctx.fillText(`Sıralama #${sira} | Seviye ${lvl || 0}`, 670, 70);
        ctx.font = '20px Impact';
        ctx.textAlign = "right";
        ctx.fillText(`${xp || 0} / 250 XP`, 670, 100);
  ctx.fillStyle = `#bfbfbf`;
  ctx.font = '28px Impact';
        ctx.textAlign = "left";
        ctx.fillText(`${u.tag}`, 270, 150)
        ctx.beginPath();
        ctx.lineWidth = 8;
        ctx.beginPath();
                ctx.lineWidth = 8;
                ctx.arc(55 + 75, 77 + 75, 70, 0, 2 * Math.PI, false);
                ctx.strokeStyle = Durmm;
                ctx.stroke();
                ctx.clip();
  ctx.fill()
        ctx.lineWidth = 8;
        ctx.arc(55 + 80, 80 + 80, 80, 0, 2 * Math.PI, false);
        ctx.clip();
        
        ctx.drawImage(avatar, 55, 77, 145, 145);
    
        msg.channel.send({files:[{attachment:canvas.toBuffer(),name:"seviye.png"}]})
    //ctx.drawImage(avatar, 85, 66, 150, 150);
    } else 
       if (msg.channel.send(`Hey <@${msg.author.id}>, Seviye sistemi açık değil. Yetkililerden açmasını iste. `).then(message => message.delete(5000))) {
        msg.delete()
      } else return;

      
  
  
    } else  if (msg.channel.send(`Hey <@${msg.author.id}>, Siteden kendi seviye sistemini açman gerek.`).then(message => message.delete(5000))){
	 msg.delete()
	} else return;

   
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["level", "rank", "xp", "puan"],
  permLevel: 0,
    kategori: "seviye"
};

exports.help = {
  name: 'seviye',
  description: 'Seviyenizi ve XP\'nizi gösterir.',
  usage: 'seviye [@kullanıcı/renk/resim] [renk kodu/resim URLsi/sıfırla]'
};