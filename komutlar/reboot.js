const {RichEmbed} = require("discord.js");
//const ayarlar = require('../ayarlar.json')// [package required: discord.js]
exports.run = async (client, message, args, level) => {
  //if(message.author.id !== "486817385051979786") return message.reply(`bu komutu sadece Bot Sahibi kullanabilir!`);
  // EMBED
  let embed = new RichEmbed()
  .setColor("RANDOM")
  .setTitle("» Bot yeniden başlatılıyor...")
  await message.channel.send(embed); // send the embed
  // unload all commands before shutting down
  
  console.log("Bot yeniden başlıyor...");

  // you can always leave out this code // (cmd part)
  client.commands.forEach( async cmd => {
    await client.unloadCommand(cmd);
  }); // end of cmd function

  // shut down the bot
  process.exit(1);
}; // end of code

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reeboot", "reset", "yenile", "yeniden-başlat"],
  permLevel: 5,
    kategori: "yapımcı",
 
};

exports.help = {
  name: "reboot",
  description: "Botu yeniden başlatır.",
  usage: "reboot",
 
};