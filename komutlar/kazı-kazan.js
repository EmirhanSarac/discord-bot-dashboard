const Discord = require("discord.js");
const fs = require("fs");
const { stripIndents } = require('common-tags');
const slots = ['🔧', '💎', '💰', '💵', '💳'];
const db = require('quick.db');
exports.run = async (client, message, args) => {
  
  const db = require('quick.db');
  

  
    let para = await db.fetch(`paracık_${message.author.id}`);
 
  
  
 


    if (para < 150) {
      message.channel.send(`Bu oyunu oynayabilmek için en az \`150 TL\` olması gerekir.`)
  } else if (para > 150) {

    


  
  var sans = ["11", "15", "20", "24", "28", "31", "39", "45", "49", "54", "58", "63", "67", "77", "73", "84", "80", "83", "96", "94", "99", "150", "270"];
    var miktar = sans[Math.floor((Math.random() * sans.length))];
       
		const slotOne = slots[Math.floor(Math.random() * slots.length)];
		const slotTwo = slots[Math.floor(Math.random() * slots.length)];
		const slotThree = slots[Math.floor(Math.random() * slots.length)];
		if (slotOne === slotTwo && slotOne === slotThree) {

      db.add(`paracık_${message.member.id}`, miktar)
       
     
		var kazandin = new Discord.RichEmbed()
		.setColor("GREEN")
		.setDescription(`Kazandın ve hesabına **${miktar}TL** eklendi`)
    return message.channel.send(kazandin)
   

		}

     
 

		var kaybettin = new Discord.RichEmbed()
		.setColor("RED")
		.setDescription(`Kaybettin ve hesabından **${miktar}TL** eksildi`)
    db.add(`paracık_${message.member.id}`, -miktar)
    return message.channel.send(kaybettin);	
    
  } else if (para = 150) {

    


  
    var sans = ["11", "15", "20", "24", "28", "31", "39", "45", "49", "54", "58", "63", "67", "77", "73", "84", "80", "83", "96", "94", "99", "150", "270"];
      var miktar = sans[Math.floor((Math.random() * sans.length))];
         
      const slotOne = slots[Math.floor(Math.random() * slots.length)];
      const slotTwo = slots[Math.floor(Math.random() * slots.length)];
      const slotThree = slots[Math.floor(Math.random() * slots.length)];
      if (slotOne === slotTwo && slotOne === slotThree) {
  
        db.add(`paracık_${message.member.id}`, miktar)
         
       
      var kazandin = new Discord.RichEmbed()
      .setColor("GREEN")
      .setDescription(`Kazandın ve hesabına **${miktar}TL** eklendi`)
      return message.channel.send(kazandin)
     
  
      }
  
       
   
  
      var kaybettin = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(`Kaybettin ve hesabından **${miktar}TL** eksildi`)
      db.add(`paracık_${message.member.id}`, -miktar)
      return message.channel.send(kaybettin);	
      
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kazıkazan-oyna","kazı-kazan"],
  permLevel: 0,
  kategori: "oyun",
};

exports.help = {
  name: "kazıkazan",
  description: "Kazı kazan oynarsınız ve rastgele para çıkarırsınız.",
  usage: "kazıkazan",
};