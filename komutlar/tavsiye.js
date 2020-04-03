const Discord = require('discord.js')
const id = '617420409436110869'

exports.run = (client, message, args) => {
    const bildiri = args.join(" ")
    if (!args[0]) {
        const embed = new Discord.RichEmbed()
            .setDescription(`Lütfen geçerli bir bildiri yazın. Eğer boş/gereksiz bildiri gönderirseniz bottan engellenirsiniz.`)
            .setTimestamp()
            .setColor("RANDOM")
        message.channel.send({embed})
        return
    }
  
    const embed = new Discord.RichEmbed()
        .setDescription(`Bildiriniz başarıyla bot geliştiricisine iletilmiştir ${client.emojis.get(client.emojiler.evet)}`)
        .setTimestamp()
        .setColor("RANDOM")
    message.channel.send({embed})
    
    message.channel.createInvite({maxAge: 0}).then(async (invite) => {
        const embed = new Discord.RichEmbed()
            .addField(`Bildiren Kişi`, message.author.tag)
            .addField(`Bildirinin Yapıldığı Sunucu`, message.guild.name)
            .addField(`Bildirinin Yapıldığı Sunucunun Davet Linki`, invite.url)
            .addField(`Bildiri`, bildiri)
            .setColor("RANDOM")
            .setTimestamp()
        client.channels.get(id).send({embed})
      message.react('639954634227580958')
    })
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rapor', 'raporla', 'tavsiye', 'tavsiyeet', 'tavsiyet', 'öner', 'öneri', 'bildir'],
    permLevel: 0,
  kategori: "bot"
}

exports.help = {
    name: 'tavsiye',
    description: 'Bot geliştiricisine hataları raporlamayı/tavsiye vermeyi/öneri iletmeyi sağlar.',
    usage: 'tavsiye [bildiri]'
}