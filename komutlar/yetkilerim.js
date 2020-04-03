const Discord = require('discord.js');
const { stripIndents } = require('common-tags');

exports.run = (client, msg, args) => {


let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
    
    //yönetici
    if (msg.member.hasPermission("ADMINISTRATOR")) x = `${client.emojis.get(client.emojiler.Yvar)}`
    if (!msg.member.hasPermission("ADMINISTRATOR")) x = `${client.emojis.get(client.emojiler.Yyok)}`
    
    //Denetim kaydı
    if (msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = `${client.emojis.get(client.emojiler.Yvar)}`
    if (!msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = `${client.emojis.get(client.emojiler.Yyok)}`
    
    //Sunucuyu yönet
    if (msg.member.hasPermission("MANAGE_GUILD")) x3 = `${client.emojis.get(client.emojiler.Yvar)}`
    if (!msg.member.hasPermission("MANAGE_GUILD")) x3 = `${client.emojis.get(client.emojiler.Yyok)}`
    
    //Rolleri yönet
    if (msg.member.hasPermission("MANAGE_ROLES")) x4 = `${client.emojis.get(client.emojiler.Yvar)}`
    if (!msg.member.hasPermission("MANAGE_ROLES")) x4 = `${client.emojis.get(client.emojiler.Yyok)}`
    
    //Kanalları yönet
    if (msg.member.hasPermission("MANAGE_CHANNELS")) x5 = `${client.emojis.get(client.emojiler.Yvar)}`
    if (!msg.member.hasPermission("MANAGE_CHANNELS")) x5 = `${client.emojis.get(client.emojiler.Yyok)}`
    
    //üyeleri at
    if (msg.member.hasPermission("KICK_MEMBERS")) x6 = `${client.emojis.get(client.emojiler.Yvar)}`
    if (!msg.member.hasPermission("KICK_MEMBERS")) x6 = `${client.emojis.get(client.emojiler.Yyok)}`
    
    //üyeleri yasakla
    if (msg.member.hasPermission("BAN_MEMBERS")) x7 = `${client.emojis.get(client.emojiler.Yvar)}`
    if (!msg.member.hasPermission("BAN_MEMBERS")) x7 = `${client.emojis.get(client.emojiler.Yyok)}`
    
    //mesajları yönet
    if (msg.member.hasPermission("MANAGE_MESSAGES")) x8 = `${client.emojis.get(client.emojiler.Yvar)}`
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) x8 = `${client.emojis.get(client.emojiler.Yyok)}`
    
    //kullanıcı adlarını yönet
    if (msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = `${client.emojis.get(client.emojiler.Yvar)}`
    if (!msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = `${client.emojis.get(client.emojiler.Yyok)}`
    
    //emojileri yönet
    if (msg.member.hasPermission("MANAGE_EMOJIS")) x10 = `${client.emojis.get(client.emojiler.Yvar)}`
    if (!msg.member.hasPermission("MANAGE_EMOJIS")) x10 = `${client.emojis.get(client.emojiler.Yyok)}`
    
    //webhookları yönet
    if (msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = `${client.emojis.get(client.emojiler.Yvar)}`
    if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = `${client.emojis.get(client.emojiler.Yyok)}`
    
    const embed = new Discord.RichEmbed()
    .setDescription(`${x} Yönetici\n${x2} Denetim Kaydını Görüntüle\n${x3} Sunucuyu Yönet\n${x4} Rolleri Yönet\n${x5} Kanalları Yönet\n${x6} Üyeleri At\n${x7} Üyeleri Yasakla\n${x8} Mesajları Yönet\n${x9} Kullanıcı Adlarını Yönet\n${x10} Emojileri Yönet\n${x11} Webhook'ları Yönet`)
    msg.channel.send(embed)
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['izinlerim'],
  permLevel: 0,
    kategori: "kullanıcı"
};

exports.help = {
  name: 'yetkilerim',
  description: 'Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.',
  usage: 'yetkilerim'
};