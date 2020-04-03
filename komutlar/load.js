exports.run = (client, message, args) => {
    var command = args[0];
  if (!command) return message.reply("Bir komut adı yazmalısın!")
    message.channel.send("`" + command + "` adlı komut yükleniyor...")
      .then(m => {
        client.load(command)
          .then(() => {
            m.edit("`" + command + "` adlı komut başarıyla yüklendi.");
          })
          .catch(e => {
            m.edit("`komutlar` klasöründe `"+command+".js` isminde bir dosya yok!");
          });
      });
};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 5,
    kategori: "yapımcı",

}

exports.help = {
	name: 'load',
	description: 'Yeni eklenen bir komutu bot yeniden başlamaya gerek kalmadan yükler.',
	usage: 'load <komut adı>',
}
