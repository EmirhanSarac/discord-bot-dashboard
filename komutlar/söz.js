const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message, args) => {
  
  var s = [
      'Herkes kendi kaderinin demircisidir',
      'Belki hiç bir şey yolunda gitmedi ama hiçbir şey de beni yolumdan etmedi!',
      'Gül biraz; bunca keder, bunca gözyaşı dinsin, gül biraz; şu gök kubbe kahkahanı işitsin. Her gidenin ardından koşmaya değmez hayat, gelecekleri bekle, gidecek varsın gitsin.',
      'Aşk davaya benzer, cefa çekmek de şahide. Şahidin yoksa davayı kazanamazsın ki!',
      'İnsan geride bıraktıklarını özler, sahip olduğundan sıkılır, ulaşamadığına tutulur. Genelde ulaşılmaz olan hep aşk olur.',
      'Salatalığın kabuğunu soymak, onun hıyar olduğu gerçeğini değiştirmez.',
      'Bu kadar yürekten çağırma beni. Bir gece ansızın gelebilirim. Beni bekliyorsan, uyumamışsan, sevinçten kapında ölebilirim.',
      'Nankör insan her şeyin fiyatını bilen hiçbir şeyin değerini bilmeyen kimsedir.',
      'Biz birbirimize dönmüş iki ayna gibiyiz. İçimizde binlerce olsa da görüntümüz bir biz sadece birbirimizi görürüz…',
      'Gittiğin yerde boşluk dolduran değil, gittiğin zaman boşluğu doldurulamayan ol.',
      'Eğer aç ve kimsesiz bir köpeği alıp bakar ve rahata kavuşturursanız sizi ısırmaz. İnsan ve köpek arasındaki temel fark budur.',
      'Bir ilişkiyi kadın başlatır, kadın bitirir. Ama başlatan ve bitiren aynı kadın olmayabilir.',
      'Bir tohum verdin çiçeğini al. Bir çekirdek verdin ağacını al. Bir dal verdin ormanını al. Dünyamı verdim sana bende kal.',
      'Yalnızca kültürlü insanlar öğrenmeyi sever cahiller ders vermeyi tercih eder.',
      'Birisinin havaya attığı aşk oku kalbinize öylece saplanıp kalsa çok uzun bir zaman sevip hala kavuşamasanız ve aşk oku kalbinize saplanan kişi şuanda sizi dostunuz olarak görmekte oysaki bir zamanlar sizin aşk okunuzda onun kalbine saplanmış o da sizi sevmiş ama olamamışsınız sonrada o kişi sizi unutup gitmiş tam olarak dost olarak bile görmüyormuş artık düşünsenize ? Hayat ne kadar da acı diymi.'
    ];
    var su = s[Math.floor((Math.random() * s.length))];
  
    if (su === 'Birisinin havaya attığı aşk oku kalbinize öylece saplanıp kalsa çok uzun bir zaman sevip hala kavuşamasanız ve aşk oku kalbinize saplanan kişi şuanda sizi dostunuz olarak görmekte oysaki bir zamanlar sizin aşk okunuzda onun kalbine saplanmış o da sizi sevmiş ama olamamışsınız sonrada o kişi sizi unutup gitmiş tam olarak dost olarak bile görmüyormuş artık düşünsenize ? Hayat ne kadar da acı diymi.') {
    
      s = 'Birisinin havaya attığı aşk oku kalbinize öylece saplanıp kalsa çok uzun bir zaman sevip hala kavuşamasanız ve aşk oku kalbinize saplanan kişi şuanda sizi dostunuz olarak görmekte oysaki bir zamanlar sizin aşk okunuzda onun kalbine saplanmış o da sizi sevmiş ama olamamışsınız sonrada o kişi sizi unutup gitmiş tam olarak dost olarak bile görmüyormuş artık düşünsenize ? Hayat ne kadar da acı diymi. \n\nBu sözdeki gibi sevip kavuşamayan var onlara yakalım bugün de 🚬 \n\nBu söze göre seven kişinin kalp durumu: \n❤️💘💕💗💔🖤 \nKalp yavaş yavaş ölmüş...'
    
    }
  
    const minnossudem = new Discord.RichEmbed()
    .setDescription(`${su}`)
    .setColor("RANDOM")
    return message.channel.send(minnossudem)
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
    kategori: 'eğlence',

};

exports.help = {
  name: 'söz',
  category: "kullanıcı",
  description: 'Rastgele güzel sözler atar.',
  usage: 'söz'
};