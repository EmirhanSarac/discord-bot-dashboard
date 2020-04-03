const Discord = require("discord.js");
const { createCanvas, loadImage } = require("canvas");
const canvas = createCanvas(950, 280);
const ctx = canvas.getContext("2d");
const request = require('node-superfetch');

exports.run = async (client, message, args) => {
  
 const Canvas= require('canvas')
    , Image = Canvas.Image
    , Font = Canvas.Font
    , path = require('path');
  let uye = message.mentions.users.first() || message.author;
   
  let gkisi = client.users.get(uye.id);
  const ktarih = new Date().getTime() - gkisi.createdAt.getTime();
   ctx.font = "italic 43px Arial";
ctx.textalign = "center";
   const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/621045237137276929/621045305089064980/arka.png');
 const { body } = await request.get(gkisi.avatarURL || gkisi.defaultAvatarURL);
 const pp =await Canvas.loadImage(body);
const çerçeve = await Canvas.loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgwNVUB_DkJ-RliBWJ0Ru0sO2f3w4gsKQU4VVCE1tYacpqGOVS");
 
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
 ctx.drawImage(çerçeve, 685,15 , 250, 250);
ctx.drawImage(pp, 700,30 , 220, 220);

  var kontrol;
  if (ktarih > 1296000000) kontrol =  ctx.fillStyle = "#12ff51";
  if (ktarih < 1296000000) kontrol =  ctx.fillStyle = "#fa3455";
  var kontrol2;
  if (ktarih > 1296000000) kontrol2=  ctx.fillText("Bu Kullanıcı Güvenli", 10, 180);
  if (ktarih < 1296000000) kontrol2=  ctx.fillText( "Bu Kullanıcı Şüpheli", 10, 180);
 ctx.fillStyle = "#FFFFFF";
    ctx.font = "italic 50px Arial";

  ctx.fillText(`${gkisi.tag}`,10,120);
 
  
  const sorgu = new Discord.Attachment(canvas.toBuffer(), "GÜVENLİK-SORGU.png");
  message.channel.send(sorgu);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['güvenlik-sorgu','güvenliksorgu','güvenilirliksorgu','güvenilirlik-sorgu'],
    kategori: 'kullanıcı',
  permLevel: 0
};

exports.help = {
  name: 'güvenliksorgu',
  isim: 'güvenliksorgu',


  description: 'Güvenliğinnizi / Seçtiğiniz kişinin güvenliğini sorgular.',
  usage: 'güvenliksorgu [@kişi]'
};