const Discord = require(`discord.js`); 
const db = require(`quick.db`);
module.exports.run = async (client, message, args) => {

    var user = message.mentions.users.first() || message.author;

    let onay = await db.fetch(`memberBadge_${user.id}`);
    let yetkili = await db.fetch(`memberBadge2_${user.id}`);
    let destekçi = await db.fetch(`memberBadge3_${user.id}`);
    let mod = await db.fetch(`memberBadge4_${user.id}`);
    let paraR = await db.fetch(`memberBadge6_${user.id}`);
  let gold = await db.fetch(`üyelikk_${user.id}`, 'üyelik');
let web = await db.fetch(`webp_${user.id}`, 'webp');
    let evet = await client.emojis.get(client.emojiler.evet);
    let hayır = await client.emojis.get(client.emojiler.hayır);

    let onayE = await client.emojis.get(client.emojiler.onayRozet);
    let yetkiliE = await client.emojis.get(client.emojiler.yetkiliRozet);
    let modE = await client.emojis.get(client.emojiler.modRozet);
    let destekçiE = await client.emojis.get(client.emojiler.destekçiRozet);
    let paraE = await client.emojis.get(client.emojiler.paraROZET);
  let goldE = await client.emojis.get(client.emojiler.gold);
    let webE = await client.emojis.get(client.emojiler.mutlu);
    let sayfa = [`**${user.tag} || Rozetler**

 ${yetkiliE} **Yetkili rozeti:** ${yetkili == `https://cdn.discordapp.com/attachments/474685686075621376/480845736347435009/401723658491527168.png` ? `${evet} Alınmış` : `${hayır} Alınmamış`}
   
    ${modE} **Moderatör rozeti:** ${mod == `https://cdn.discordapp.com/attachments/474685686075621376/480845735647117312/401724520806875139.png` ? `${evet} Alınmış` : `${hayır} Alınmamış`}

    ${onayE} **Onay rozeti:** ${onay == `https://cdn.discordapp.com/attachments/474685686075621376/480845736347435015/401725450470031362.png` ? `${evet} Alınmış` : `${hayır} Alınmamış`}

    ${destekçiE} **Destekçi rozeti:** ${destekçi == `https://cdn.discordapp.com/attachments/474685686075621376/480845737006202881/401725034453925889.png` ? `${evet} Alınmış` : `${hayır} Alınmamış`}
   
    ${paraE} **Yıldırım rozeti:** ${paraR == `https://cdn.discordapp.com/attachments/531535859594297364/533260601162465280/paraR.png` ? `${evet} Alınmış` : `${hayır} Alınmamış`}

  ${goldE} **Gold rozeti:** ${gold ? `${evet} Alınmış` : `${hayır} Alınmamış`}

  ${webE} **Panel rozeti:** ${web ? `${evet} Alınmış` : `${hayır} Alınmamış`}
    `];

    const profilE = new Discord.RichEmbed()
    .setColor(`RANDOM`)
   
    .setDescription(sayfa)
    .setTimestamp()
    .setFooter(`Komut ${message.author.tag} tarafından kullanıldı`)
  message.channel.send(profilE)
    
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rozetlerim"],
  permLevel: 0,
  kategori: "profil"
};

module.exports.help = {
  name: "rozetler",
  description: "Rozetlerinizi veya bir başkasının rozetlerini görürsünüz",
  usage: "rozetler"
};