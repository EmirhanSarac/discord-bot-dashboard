const Discord = require('discord.js');
const db = require('quick.db');
const fs = require("fs");
module.exports = (client, clientt) => {

client.panel = {};

    client.customCmds = (id, cmd) => {
    
    let komut = cmd['komut']
    let aciklama = cmd['aciklama']
    
    var array = []
	  var kontrol2 = []
    let komutlar = client.cmdd
    
    if(komutlar[id]) {
		for (var i = 0; i < Object.keys(komutlar[id]).length; i++) {
			if(komut === Object.keys(komutlar[id][i])[0].toString()) {
				array.push(JSON.parse(`{"${Object.keys(komutlar[id][i])[0]}": "${aciklama}"}`))
			} else {
				array.push(JSON.parse(`{"${Object.keys(komutlar[id][i])[0]}": "${komutlar[id][i][Object.keys(komutlar[id][i])].replace("\n", "\\n")}"}`))
			}
			kontrol2.push(Object.keys(komutlar[id][i])[0].toString())
		}
		if(!kontrol2.includes(komut)) {
			array.push(JSON.parse(`{"${komut}": "${aciklama}"}`))
			komutlar[id] = array

			fs.writeFile("./komutlar.json", JSON.stringify(komutlar), (err) => {
				console.log(err)
			})

			return
		} else {
			komutlar[id] = array

			fs.writeFile("./komutlar.json", JSON.stringify(komutlar), (err) => {
				console.log(err)
			})

			return
		}
	} else {
		array.push(JSON.parse(`{"${komut}": "${aciklama}"}`))
		komutlar[id] = array

		fs.writeFile("./komutlar.json", JSON.stringify(komutlar), (err) => {
			console.log(err)
		})

		return
	}
    
  };
  
  
client.panel.ayarlarKaydetKullanici = (kullaniciID, kullanici, yeniAyar, req, res) => {
if (yeniAyar['renk']) {
db.set(`${kullanici.id}.renk`, yeniAyar['renk'])
}

if (yeniAyar['resim']) {
db.set(`${kullanici.id}.resim`, yeniAyar['resim'])
  
}
           if (yeniAyar['lvl2'] === 'aktif') {
db.set(`lvl2_${kullanici.id}`, yeniAyar['lvl2'])
}
if (!yeniAyar['lvl2']) {
db.delete(`lvl2_${kullanici.id}`)
}
};
  client.writeSettings = (id, newSettings) => {
    
    if (!client.guilds.get(id)) return
    
    try {
      
      
         if (newSettings['kelimefiltre']) {
           if(db.fetch(`filtre_${id}`).includes(newSettings['kelimefiltre']) === false) {
        db.push(`filtre_${id}`, newSettings['kelimefiltre'])
           }
         
      }
      
     
         if (newSettings['kYasak']) {
        db.push(`yasakK_${id}`, newSettings['kYasak'])
         }
      
      
      
      
if (newSettings['gold'] === 'aktif') {
db.set(`üyelikk_${id}`, newSettings['gold'])
}
if (!newSettings['gold']) {
db.delete(`üyelikk_${id}`)
}
      if (newSettings['küfürEngel'] === 'aktif') {
db.set(`küfürE_${id}`, newSettings['küfürEngel'])
}
if (!newSettings['küfürEngel']) {
db.delete(`küfürE_${id}`)
}
 
if (newSettings['linkEngel'] === 'aktif') {
db.set(`linkE_${id}`, newSettings['linkEngel'])
}
 
if (!newSettings['linkEngel']) {
db.delete(`linkE_${id}`)
}   

if (newSettings['capslockEngel'] === 'aktif') {
db.set(`capsE_${id}`, newSettings['capslockEngel'])
}
if (!newSettings['capslockEngel']) {
db.delete(`capsE_${id}`)
}
      if (newSettings['lvll'] === 'aktif') {
db.set(`lvll_${id}`, newSettings['lvll'])
}
if (!newSettings['lvll']) {
db.delete(`lvll_${id}`)
}
if (newSettings['guvenlik']) {
db.set(`guvenlik1_${id}`, newSettings['guvenlik']);
} 
      if (newSettings['komutkanal']) {
db.set(`ktr_${id}`, newSettings['komutkanal']);
} 
if (newSettings['sohbetdga'] === 'aktif') {
db.set(`ss_${id}`, newSettings['sohbetdga'])
}
if (!newSettings['sohbetdga']) {
db.delete(`ss_${id}`)
} 
      if (newSettings['guvenlik3']) {
db.set(`guvenlik3_${id}`, newSettings['guvenlik3']);
} 
           if (newSettings['gc']) {
db.set(`gc_${id}`, newSettings['gc']);
} 

 
 
     if (newSettings['gresim']) {
db.set(`gcc_${id}`, newSettings['gresim']);
} 
      if (newSettings['resim']) {
db.set(`gc${id}`, newSettings['resim']);
} 
  if (newSettings['modlog']) {
db.set(`log_${id}`, newSettings['modlog']);
}     
if (newSettings['otorol']) {
db.set(`otoR_${id}`, newSettings['otorol'])
}
      
if (newSettings['otoRK']) {
db.set(`otoRK_${id}`, newSettings['otoRK'])   
}

      
 if (newSettings['otoTag']) {
db.set(`tagB_${id}`, newSettings['otoTag'])   
}
if (newSettings['otoTagK']) {
db.set(`tagKanal_${id}`, newSettings['otoTagK'])
}
 if (newSettings['prefix']) {
db.set(`prefix_${id}`, newSettings['prefix'])
}
if (newSettings['sRol']) {
db.set(`sRol_${id}`, newSettings['sRol'])
}
if (newSettings['girisCikis']) {
db.set(`gc_${id}`, newSettings['girisCikis'])   
}
if (newSettings['girisM']) {
db.set(`girisM_${id}`, newSettings['girisM']);
}
if (newSettings['cikisM']) {
db.set(`cikisM_${id}`, newSettings['cikisM']);
}

 if (newSettings['gr']) {
db.set(`gr_${id}`, newSettings['gr']);
}
if (newSettings['destekK']) {
db.set(`destekK_${id}`, newSettings['destekK']);
}
if (newSettings['destekR']) {
db.set(`destekR_${id}`, newSettings['destekR']);
}
if (newSettings['sayacKanal']) {
db.set(`sKanal_${id}`, newSettings['sayacKanal']);
}
if (newSettings['sayac']) {
db.set(`sayac_${id}`, newSettings['sayac']);
}
if (newSettings['dkanal']) {
db.set(`dKanal_${id}`, newSettings['dkanal']);
}
      if (newSettings['ktr']) {
db.set(`ktr_${id}`, newSettings['ktr']);
}
            if (newSettings['sss'] === 'aktif') {
db.set(`lvl2_${client.member.id}`, newSettings['sss'])
}
 
if (!newSettings['sss']) {
db.delete(`lvl2_${client.member.id}`)
} 
  
     } catch (err) {
      //console.error(err)
    };
        }; 


String.prototype.toProperCase = function() {
return this.charAt(0).toUpperCase() + this.slice(1); 
};

Array.prototype.random = function() {
return this[Math.floor(Math.random() * this.length)];
};

//process.on("uncaughtException", (err) => {
//const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
//console.error("Uncaught Exception: ", errorMsg);

//process.exit(1);

};