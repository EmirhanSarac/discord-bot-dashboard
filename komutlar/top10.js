const Discord = require('discord.js');
const client = new Discord.Client();
const { stripIndents, oneLine } = require('common-tags');

exports.run = async (client, message) => {
 
  if (client.guilds.size < 10) return message.reply("Bot `10` tane sunucuda bulunmuyor!")
  
const top = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
message.channel.send(`1. **${top[0].name}**: ${top[0].memberCount}\n2. **${top[1].name}**: ${top[1].memberCount}\n3. **${top[2].name}**: ${top[2].memberCount}\n4. **${top[3].name}**: ${top[3].memberCount}\n5. **${top[4].name}**: ${top[4].memberCount}\n6. **${top[5].name}**: ${top[5].memberCount}\n7. **${top[6].name}**: ${top[6].memberCount}\n8. **${top[7].name}**: ${top[7].memberCount}\n9. **${top[8].name}**: ${top[8].memberCount}\n10. **${top[9].name}**: ${top[9].memberCount}`)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['top10-listesi', 'top10-list'],
  permLevel: 5,
    kategori: "yapımcı"
};

exports.help = {
  name: 'top10',
  category: 'genel',
  description: 'Botun bulunduğu sunuculardan en çok kişiye sahip olan 10 sunucuyu sıralar.',
  usage: 'top10'
};