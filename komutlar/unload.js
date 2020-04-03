const Discord = require('discord.js')
//const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
  
 //if(message.author.id !== "486817385051979786") return message.reply(`bu komutu sadece Bot Sahibi kullanabilir!`);

  let command;
  if (client.commands.has(args.slice(0).join(' '))) {
    command = args.slice(0).join(' ');
  } else if (client.aliases.has(args.slice(0).join(' '))) {
    command = client.aliases.get(args.slice(0).join(' '));
  }
  if (!args[0]) return message.reply("Bir komut ismi yazmalısın!")
  if (!command) {
	return message.reply("Botta `" + args.slice(0).join(' ') + "` isminde bir komut bulunmuyor!");
  } else {
    message.channel.send("`" + command + "` ismindeki komut devre dışı bırakılıyor...")
      .then(m => {
        client.unload(command)
          .then(() => {
            m.edit("`" + command + "` ismindeki komut başarıyla devre dışı bırakıldı!");
          })
          .catch(e => {
            m.edit(`\`${command}\` isimli komut devre dışı bırakılırken bir hata oluştu! \n**Hata:** \n\`\`\`js\n${e.stack}\n\`\`\``);
          });
      });
  }
    
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 5,
    kategori: "yapımcı"
}

exports.help = {
	name: 'unload',
  category: 'admin',
	description: 'Belirtilen bir komutu devre dışı bırakır.',
	usage: 'unload <komut adı>'
}
