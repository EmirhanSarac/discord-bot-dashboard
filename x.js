const request = require('node-superfetch');

class AdvancedTools {
  constructor() {
    this.döviz = this.constructor.döviz;
    this.npm = this.constructor.npm;
    this.dizi = this.constructor.dizi;
    this.söz = this.constructor.söz;
    this.video = this.constructor.video;
    this.tarih = this.constructor.tarih;
    this.duration = this.constructor.duration;
  };

  static async döviz(hepsi) {
    let v = await request.get("https://advanced-api.glitch.me/doviz?key=genelkey");
    if (hepsi) {
      return v.body
    } else if (!hepsi) {
      let veriler = {};
      v.body.forEach(v => {
        veriler[v.birim] = { "birim":v.birim, "isim":v.isim, "alış":v.alış, "satış":v.satış }
      })
      return veriler
    };
  };
  
  static async npm(paket) {
    if (!paket) throw new TypeError("Bilgi almak istediğiniz NPM Paketinin adını yazınız.");
    let v = await request.get("https://advanced-api.glitch.me/npm?ara="+paket);
    return v.body
  };

  static async dizi(dizi) {
    if (!dizi) throw new TypeError("Bilgi almak istediğiniz dizinin adını yazınız.");
    let v = await request.get("https://advanced-api.glitch.me/dizi?key=genelkey&ara="+dizi);
    return v.body
  };

  static async söz(sanatçı, şarkı) {
    if (!sanatçı) throw new TypeError("Sözlerini görmek istediğiniz şarkının sanatçıcısının adını yazınız.");
    if (!şarkı) throw new TypeError("Sözlerini görmek istediğiniz şarkının adını yazınız.");
    let v = await request.get("https://advanced-api.glitch.me/soz?key=genelkey&ara="+sanatçı+"-"+şarkı);
    return v.body.sözler
  };

  static async video(video) {
    if (!video) throw new TypeError("Bilgi almak istediğiniz videonun adını yazınız.");
    let v = await request.get("https://advanced-api.glitch.me/video?ara="+video);
    return v.body
  };
  
  static tarih(trh, format) {
    
  const x = {
    aylar: {
      "0": "Ocak",
      "1": "Şubat",
      "2": "Mart",
      "3": "Nisan",
      "4": "Mayıs",
      "5": "Haziran",
      "6": "Temmuz",
      "7": "Ağustos",
      "8": "Eylül",
      "9": "Ekim",
      "10": "Kasım",
      "11": "Aralık"
    },    
    günler: {
      "0": "Pazar",
      "1": "Pazartesi",
      "2": "Salı",
      "3": "Çarşamba",
      "4": "Perşembe",
      "5": "Cuma",
      "6": "Cumartesi",
    }
  };
    
    if (!trh) throw new TypeError("Lütfen Türkçe'ye çevirilecek tarihi yazınız.");
    
    const t = new Date(trh);
    const tarih = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds()));
    const yıl = tarih.getFullYear();
    const ay = tarih.getMonth();
    const sayıGün = tarih.getDate() < 10 ? "0"+tarih.getDate() : tarih.getDate();
    const gün = tarih.getDay();
    const saat = tarih.getHours() < 10 ? "0"+tarih.getHours() : tarih.getHours()+3;
    const dakika = tarih.getMinutes() < 10 ? "0"+tarih.getMinutes() : tarih.getMinutes();
    const saniye = tarih.getSeconds() < 10 ? "0"+tarih.getSeconds() : tarih.getSeconds();
    const tamSaat = `${saat}:${dakika}:${saniye}`;
    
    if (format) {
      const f = format.replace("S", saat).replace("D", dakika).replace("s", saniye).replace("G", sayıGün).replace("A", ay < 10 ? "0"+(ay+1) : (ay+1)).replace("a", x.aylar[ay]).replace(new RegExp("Y", "i"), yıl).replace("g", x.günler[gün])
      return f
    } else if (!format) {
      return `${sayıGün} ${x.aylar[ay]} ${yıl} ${x.günler[gün]} ${tamSaat}`
    };
    
  };
  
  static duration(trh) {
		if(!trh) throw new TypeError("Lütfen tarihi yazınız.");
    if (new Date(trh).getSeconds() === new Date().getSeconds()) throw new Error("Lütfen şuandan farklı bir tarih yazınız. \nSaniyenin bile farklı olmadığı tıpa tıp aynı tarihin şuanın duration haline getirebileceğim tek kısmı saniyedir ve saniyede de kesin olarak 0 yazacaktır.");
		const xx = new Date(trh);
    const x = new Date(Date.UTC(xx.getFullYear(), xx.getMonth(), xx.getDate(), xx.getHours(), xx.getMinutes(), xx.getSeconds()));
		const y = new Date();
    const ms = y.getTime() - x.getTime();
    
    const saniye = (y.getSeconds() - x.getSeconds() < 0) ? (x.getSeconds() - y.getSeconds()) : (y.getSeconds() - x.getSeconds()); 
    const dakika = (y.getMinutes() - x.getMinutes() < 0) ? (x.getMinutes() - y.getMinutes()) : (y.getMinutes() - x.getMinutes());
    const saat = (y.getHours() - x.getHours() < 0) ? (x.getHours() - y.getHours()) : (y.getHours() - x.getHours());
    const gün = parseInt((y - x) / (24 * 60 * 1000 * 60));
    const hafta = parseInt(gün / 7);
    const ay = parseInt(hafta / 4);
    const yıl = parseInt(ay / 12);
    
    let z = `${yıl} yıl ${ay} ay ${hafta} hafta ${gün} gün ${saat} saat ${dakika} dakika ${saniye} saniye önce`;
      if (yıl === 0 && ay === 0 && hafta === 0 && gün === 0 && saat === 0 && dakika === 0) {
        z = `${saniye} saniye önce`;
        return z
      }
      if (yıl === 0 && ay === 0 && hafta === 0 && gün === 0 && saat === 0) {
        z = `${dakika} dakika ${saniye} saniye önce`;
        return z
      }
      if (yıl === 0 && ay === 0 && hafta === 0 && gün === 0) {
        z = `${saat} saat ${dakika} dakika ${saniye} saniye önce`;
      }
      if (yıl === 0 && ay === 0 && hafta === 0) {
        z = `${gün} gün ${saat} saat ${dakika} dakika ${saniye} saniye önce`;
        return z
      }
      if (yıl === 0 && ay === 0) {
        z = `${hafta} hafta ${gün} gün ${saat} saat ${dakika} dakika ${saniye} saniye önce`;
        return z
      }
      if (yıl === 0) {
        z = `${ay} ay ${hafta} hafta ${gün} gün ${saat} saat ${dakika} dakika ${saniye} saniye önce`;
        return z
      }
    return z
	};

};

module.exports = new AdvancedTools();