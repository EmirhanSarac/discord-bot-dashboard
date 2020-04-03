const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
//Yashinu (Akame Owner)
exports.run = async(client, message, args) => {
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Bu komutu kullanabilmek için `Yönetici` iznine sahip olmalısın!')
  
  let panel = await db.fetch(`sunucupanel_${message.guild.id}`)
  if(args[0] === "sil" || args[0] === "kapat") {
    db.delete(`sunucupanel_${message.guild.id}`)
    try {
      await message.guild.channels.find(x => (x.name).includes("• Sunucu Panel")).delete()
      await message.guild.channels.find(x => (x.name).includes("Toplam Üye •")).delete()
      await message.guild.channels.find(x => (x.name).includes("Aktif Üye •")).delete()
      await message.guild.channels.find(x => (x.name).includes("Botlar •")).delete()
      await message.guild.channels.find(x => (x.name).includes("Rekor Aktiflik •")).delete()
    } catch(e) { }
    message.channel.send(`Ayarlanan sunucu paneli başarıyla devre dışı bırakıldı!`)
   return 
  }

  if(panel) return message.channel.send(`Bu sunucuda panel zaten ayarlanmış! Devredışı bırakmak için;  \`${prefix}sunucupanel sil\``)
  
  message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Sunucu Panel').setDescription('Gerekli dosaylar kurulsun mu?').setFooter('Onaylıyorsanız 15 saniye içerisinde "evet" yazmalısınız.'))
  .then(() => {
    message.channel.awaitMessages(response => response.content === 'evet', {
      max: 1,
      time: 15000,
      errors: ['time'],
    }) 
    .then((collected) => { 
      try {
        let role = message.guild.roles.find("name", "@everyone");
        message.guild.createChannel(`${client.user.username} • Sunucu Panel`, 'category', [{id: message.guild.id, deny: ['CONNECT']}]);
        message.guild.createChannel(`Toplam Üye • ${message.guild.memberCount}`, 'voice').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `${client.user.username} • Sunucu Panel`))).then(c => {
          c.overwritePermissions(role, {
            CONNECT: false,
          });
        })
        message.guild.createChannel(`Aktif Üye • ${message.guild.members.filter(off => off.presence.status !== 'offline').size}`, 'voice').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `${client.user.username} • Sunucu Panel`))).then(c => {
          c.overwritePermissions(role, {
            CONNECT: false,
          });
        })
        message.guild.createChannel(`Botlar • ${message.guild.members.filter(m => m.user.bot).size}`, 'voice').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `${client.user.username} • Sunucu Panel`))).then(c => {
          c.overwritePermissions(role, {
            CONNECT: false,
          });
        })
        message.guild.createChannel(`Rekor Aktiflik • ${message.guild.members.filter(off => off.presence.status !== 'offline').size}`, 'voice').then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === `${client.user.username} • Sunucu Panel`))).then(c => {
          c.overwritePermissions(role, {
            CONNECT: false,
          });
        })
     
        db.set(`sunucupanel_${message.guild.id}`, message.guild.members.filter(off => off.presence.status !== 'offline').size)
        message.channel.send(`Sunucu panel için gerekli kanallar oluşturulup, ayarlamalar yapıldı!  \`(Oda isimlerini değiştirmeyin, çalışmaz!)\``)
      } catch(e) {
        console.log(e.stack);
      }
    });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sunucu-panel",'panel','panel-kur'],
  permLevel: 3
};

exports.help = {
  name: 'sunucupanel',
  description: 'Sunucu istatistiklerini gösteren panel kurar ve otomatik olarak günceller.',
  usage: 'sunucupanel',
  kategori: 'ayarlar'
};