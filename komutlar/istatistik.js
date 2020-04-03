const Discord = require('discord.js');
const moment = require('moment');
const os = require('os');
let cpuStat = require("cpu-stat");
const { stripIndents } = require('common-tags');
require('moment-duration-format');

exports.run = async (bot, message, args) => {
  
  const db = require('quick.db');
  
  
  
 
     var s = 'tr'
  var a = bot.commands.get('istatistik').help.name
    if(db.has(`dil_${message.guild.id}`) === true) {
        var s = 'en'
        var a = bot.commands.get('istatistik').help.enname
    }
    const dil = bot[s]
    const o = a
 
  
  var m = await message.channel.send(`${dil.wait}`)
  var osType = await os.type();

		if (osType === 'Darwin') osType = 'macOS'
		else if (osType === 'Windows') osType = 'Windows'
		else osType = os.type();
  
    //--------------------------//
  
    var osBit = await os.arch();
  
    if (osBit === 'x64') osBit = '64 Bit'
    else if (osBit === 'x82') osBit = '32 Bit'
    else osBit = os.arch();
  
    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const duration = moment.duration(bot.uptime).format(`${dil.stat.uptime}`);
      
      setTimeout(() => {
        const s = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`${bot.user.username} | ${dil.stat.istatistik}`, bot.user.avatarURL)
        .addField(`${dil.stat.pingshead}`, `${dil.stat.pings}`.replace("{ping1}", new Date().getTime() - message.createdTimestamp).replace("{ping2}", bot.ping), true)
        .addField(`${dil.stat.uptimehead}`, `${duration}`, true)
        .addField(`${dil.stat.data}`, stripIndents`
   **${dil.stat.voice}** ${bot.voiceConnections.size.toLocaleString()}
        **${dil.stat.users}**  ${bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
        **${dil.stat.guilds}** ${bot.guilds.size.toLocaleString()}
        **${dil.stat.channels}** ${bot.channels.size.toLocaleString()}
        `, true)
        .addField(`${dil.stat.surums.version}`, stripIndents`
        **${dil.stat.surums.bot}** v${bot.ayarlar.versiyon}
        **${dil.stat.surums.discord}** v${Discord.version}
        **${dil.stat.surums.node}** ${process.version}
        `, true)
        .addField(`${dil.stat.bellek}`, `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024).toLocaleString()} MB`, true)
        .addField(`${dil.stat.isletim}`, `${osType} ${osBit}`, true)
        
        .addField(`${dil.stat.islemci}`, `\`\`\`xl\n${os.cpus().map(i => `${i.model}`)[0]}\n\`\`\``)
        return m.edit(s)
   
        }, 3000)
        
    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['i','info'],
    permLevel: 0,
    kategori: "bot",
 
  };
  
  exports.help = {
    name: 'istatistik',
    description: 'Botun istatistiklerini gösterir.',
    usage: 'istatistik',
  
  };
