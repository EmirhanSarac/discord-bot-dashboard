const Discord = require('discord.js')
const Pokedex = require('pokedex-api')
const pokedex = new Pokedex()
 
exports.run = async (client, message, args) => {
  
  const db = require('quick.db');
  
 
  
        if (!args[0]) {
                const embed = new Discord.RichEmbed()
                        .setDescription('Lütfen bir pokemon adı veya id girin')
                        .setColor("RANDOM")
                message.channel.send({embed})
                return
        }
       
        try {
                const pokeponum = args.join(" ")
                const pokemon = await pokedex.getPokemonByName(encodeURIComponent(pokeponum));
                const pokepon = pokemon[0]
                const embed = new Discord.RichEmbed()
                        .setAuthor(`${pokepon.name} | Pokemon bilgileri`, `https://i.imgur.com/5NO19vd.png`)
                        .addField('Pokédex Numarası', pokepon.number)
                        .addField('Tür', pokepon.species)
                        .addField('Tip', pokepon.types.join(', '))
                        .addField('Normal Yetenekler', pokepon.abilities.normal.join(', ') || 'Bulunamadı')
                        .addField('Gizli Yetenekler', pokepon.abilities.hidden.join(', ') || 'Bulunamadı')
                        .addField('Yumurta Grubu', pokepon.eggGroups.join(', '))
                        .addField('Cinsiyet', pokepon.gender.length ? `Erkek: %${pokepon.gender[0]} | Kadın: %${pokepon.gender[1]}` : 'Bulunamadı')
                        .addField('Boy', pokepon.height)
                        .addField('Ağırlık', pokepon.weight)
                        .setThumbnail(pokepon.sprite)
                        .setColor("RANDOM")
                message.channel.send({embed})
                message.react('617413726768988160')
        } catch (err) {
                const embed = new Discord.RichEmbed()
                        .setDescription('Pokemon bulunamadı')
                        .setColor("RANDOM")
                message.channel.send({embed})
        }
}
 
exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['pokedex'],
        permLevel: 0,
        kategori: 'eğlence',
}
 
exports.help = {
        name: 'pokemon',
        description: 'Belirtilen Pokemon hakkında bilgi verir.',
        usage: 'pokemon <pokemon ismi/pokemon id numarası>',

}