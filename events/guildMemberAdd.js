
const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const chalk = require('chalk')
module.exports = async member => {
 
   let client = member.client;
  const ayarlar = client.ayarlar
  
  //if (!client.users.get(client.user.id).hasPermission("SEND_MESSAGES")) return message.reply(`Yeterli izinlere sahip değilim! \n**İhtiyacım Olan Yetki:** \n\`Mesaj Gönder\``)
  

  
let prefix;
  
if (db.has(`prefix_${member.guild.id}`) === true) {
  prefix = db.fetch(`prefix_${member.guild.id}`)
}
  
if (db.has(`prefix_${member.guild.id}`) === false) {
  prefix = client.ayarlar.prefix
}
  
  
  
  
  if (member.bot) return;
  
  
    let tag = await db.fetch(`tagB_${member.guild.id}`);
    var tagK = await db.fetch(`tagKanal_${member.guild.id}`);
    var tagKD = await `${member.guild.channels.get(db.fetch(`tagKanal_${member.guild.id}`)) ? "var" : "yok"}`;
  if (db.has(`tagB_${member.guild.id}`) === true) {
member.setNickname(`${tag} ${member.user.username}`)
  

  if(db.has(`tagKanal_${member.guild.id}`) === true) {
    if(tagKD === "var") {
      member.guild.channels.get(tagK).send(`**${member.user.tag}** adlı kullanıcıya \`${db.fetch(`tagB_${member.guild.id}`)}\` olarak ayarlanmış olan tag verilerek kullanıcının ismi sunucu için \`${member.nickname || `${db.fetch(`tagB_${member.guild.id}`)} ${member.user.username}`}\` olarak ayarlanmıştır!`)
  }}};

  if (db.has(`sayac_${member.guild.id}`) === true) {
    if (db.has(`sKanal_${member.guild.id}`) === true) {
    const channel = db.fetch(`sKanal_${member.guild.id}`)

    if(db.has(`üyelikk_${member.id}`)) {
    const embed = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setDescription(`<a:yesil:690267180801065251> Gold üye belirdi. \`${member.user.tag}\`, Ayağa kalkın \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.members.size}\` Kişi Kaldı <a:yesil:690267180801065251>`)
    if (!member.guild.channels.get(channel)) return

    member.guild.channels.get(channel).send(embed)
   
   } else
   
    member.guild.channels.get(channel).send(`<a:acik:690266274336342068> <a:giris:617377064898527241> **${member.user.tag}** Sunucuya katıldı! \`${db.fetch(`sayac_${member.guild.id}`)}\` üye olmamıza son \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.members.size}\` üye kaldı!`)
    }};
  
  

  
};
