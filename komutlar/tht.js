const Discord = require("discord.js");
const { createCanvas, loadImage } = require("canvas");
const canvas = createCanvas(1080, 720);
const ctx = canvas.getContext("2d");
const request = require('node-superfetch');

exports.run = async (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
 const Canvas= require('canvas')
    , Image = Canvas.Image
    , Font = Canvas.Font
    , path = require('path');
  let uye = message.author;
   
  let gkisi = client.users.get(uye.id);
  const ktarih = new Date().getTime() - gkisi.createdAt.getTime();
   ctx.font = "italic 43px Arial";
ctx.textalign = "center";
   const background = await Canvas.loadImage('https://i.hizliresim.com/P7AYvQ.png');
 const { body } = await request.get(gkisi.avatarURL || gkisi.defaultAvatarURL);
 const pp =await Canvas.loadImage(body);

  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
 
ctx.drawImage(pp, 20,30 , 80, 80);


  ctx.fillText( `${mesaj}`, 20, 180);
 ctx.fillStyle = "BLACK";
    ctx.font = "italic 50px Arial";

  ctx.fillText(`${gkisi.tag}`,120,70);
 
  
  const sorgu = new Discord.Attachment(canvas.toBuffer(), "tweet.png");
  if(message.channel.send(sorgu).catch(err => console.log(err))){

    
  }

  
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['twitter','tweet','twit'],
    kategori: 'eğlence',
  permLevel: 0
};

exports.help = {
  name: 'tweet',
  isim: 'tweet',


  description: 'Tweet atar (fake).',
  usage: '<prefix>twitter mesaj'
};