module.exports = {

    kısalt: function(secenek, uzunluk, yazı) {

        var s = ['düz', 'ters'];

       if (!secenek) throw new TypeError('Lütfen bir tip seçiniz. "düz" veya "ters"')
       if (!s.includes(secenek)) throw new TypeError('Böyle bir tip bulunmuyor. Tipler: "düz" veya "ters"')
       if(uzunluk === 0) throw new TypeError('Uzunluk 0 olamaz.')
       if (!uzunluk) throw new TypeError('Lütfen bir uzunluk yazınız.')
       if (isNaN(uzunluk)) throw new TypeError('Uzunluk bir sayı olmalı.')
       if (!yazı) throw new TypeError('Lütfen herhangi bir yazı yazınız.')
       if (!isNaN(yazı)) throw new TypeError('Lütfen bir yazı yazınız.')

        if (secenek === "düz") {
        if (yazı.length < uzunluk) throw new TypeError('Uzunluk yazıdan büyük olamamaktadır.')

        return `${yazı.substring(uzunluk, yazı.length)}`
        }

        if (secenek === "ters") {
            if (yazı.length < uzunluk) throw new TypeError('Uzunluk yazıdan büyük olamamaktadır.')
    
            return `${yazı.substring(0, yazı.length - uzunluk)}`
            }

        },

        matematik: function(islem) {

          try {

            if (!islem) throw new TypeError('Lütfen bir işlem yazınız.')

  if (typeof islem === 'string')  {
    if (islem.match(/^[#0289PYLQGRJCUVpylqgrjcuv]+$/g)) throw new TypeError('Lütfen geçerli bir işlem yazınız.')
    return eval(islem)
  }

if (typeof islem === 'number')  {
  return eval(Math.floor(islem))
}

} catch(err) {
  throw new TypeError('Lütfen geçerli bir işlem yazınız.')
}

},

   büyült: function(secenek, yazı) {
     
     var s = ['ilk', 'tüm'];

    if (!secenek) throw new TypeError('Lütfen bir seçenek seçiniz. \nSeçenekler: \nilk veya tüm')
      if (!s.includes(secenek)) throw new TypeError('Seçenekler: \nilk veya tüm')
    if (!yazı) throw new TypeError('Lütfen herhangi bir yazı yazınız.')

    if (typeof yazı === "number") throw new TypeError('Lütfen bir yazı yazınız.')
    if (eval(!isNaN(yazı))) throw new TypeError('Lütfen bir yazı yazınız.')

      if (secenek === "ilk") {
   if (/([A-Z])/g.test(yazı.charAt(0) + yazı.slice(1))) throw new TypeError('Yazdığınız yazının ilk harfi zaten büyük!')

        return yazı.toProperCase()
      }

      if (secenek === "tüm") {
      if (/([A-Z])/g.test(yazı)) throw new TypeError('Yazdığınız yazının harfleri zaten büyük!')

        return yazı.toUpperCase()
      }
    },

    küçült: function(secenek, yazı) {

      var s = ['ilk', 'tüm'];

    if (!secenek) throw new TypeError('Lütfen bir seçenek seçiniz. \nSeçenekler: \nilk veya tüm')
      if (!s.includes(secenek)) throw new TypeError('Seçenekler: \nilk veya tüm')
      if (!yazı) throw new TypeError('Lütfen herhangi bir yazı yazınız.')
  
      if (typeof yazı === "number") throw new TypeError('Lütfen bir yazı yazınız.')
      if (eval(!isNaN(yazı))) throw new TypeError('Lütfen bir yazı yazınız.')
  
        if (secenek === "ilk") {
      if (!/([A-Z])/g.test(yazı.charAt(0) + yazı.slice(1))) throw new TypeError('Yazdığınız yazının ilk harfi zaten küçük!')
  
          return yazı.charAt(0).toLowerCase() + yazı.slice(1)
        }
  
        if (secenek === "tüm") {
        if (/([a-z])/g.test(yazı)) throw new TypeError('Yazdığınız yazının harfleri zaten küçük!')
  
          return yazı.toLowerCase()
        }
      },
  
  rastgele: function(tip, aralık) {
    
    var t = ['negatif', 'pozitif', '-', '+']
    var p = ['pozitif', '+']
    var n = ['negatif', '-']
    
   if (!tip) throw new TypeError('Lütfen negatif veya pozitif yazınız. \n- veya + olarak yazabilirsiniz.')
    if (!t.includes(tip)) throw new TypeError('Lütfen negatif veya pozitif yazınız. \n- veya + olarak yazabilirsiniz.')
    
    if (!aralık) throw new TypeError('Seçilecek sayının geçmeyeceği sayıyı yazınız. \nYazdığınız sayının üstünde bir sayı seçmez.')
    if (isNaN(aralık)) throw new TypeError('Lütfen bir sayı yazınız.')
    
    if (p.includes(tip)) {
      return Math.floor(Math.random() * aralık)
    }
    
    if (n.includes(tip)) {
      return Math.floor(Math.random() * -aralık)
    }
    
  },
  
  boşluk: function(yazı, sayı) {
    if (!yazı) throw new TypeError('Lütfen herhangi bir yazı yazınız.')
    if (typeof yazı !== 'string') {
    throw new TypeError('Lütfen bir yazı yazınız.');
  }
    if (!sayı) throw new TypeError('Lütfen ne kadar boşluk bırakılacağını yazınız.')
    if (isNaN(sayı)) throw new TypeError('Lütfen ne kadar boşluk bırakılacağını sayı olarak yazınız.')
    
    sayı = new Array(sayı + 1).join(' ')
    
    return yazı.replace(/^(?!$)/mg, sayı)
    
  },
  
  tekrarla: function(yazı, sayı) {
     if (typeof yazı !== 'string') {
    throw new TypeError('Lütfen bir yazı yazınız.');
  }

    let x = '';
    let y;
    
  // cover common, quick use cases
  if (sayı === 1) return yazı;
  if (sayı === 2) return yazı + yazı;

  var m = yazı.length * sayı;
  if (y !== yazı || typeof y === 'undefined') {
    y = yazı;
    x = '';
  } else if (x.length >= m) {
    return x.substr(0, m);
  }

  while (m > x.length && sayı > 1) {
    if (sayı & 1) {
      x += yazı;
    }

    sayı >>= 1;
    yazı += yazı;
  }

  x += yazı;
  x = x.substr(0, m);
  return x;
  },
  
   version: '0.0.61-BETA'

};