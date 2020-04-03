const url = require("url");
const path = require("path");

const Discord = require("discord.js");

var express = require('express');
var app = express();

const passport = require("passport");
const session = require("express-session");
const LevelStore = require("level-session-store")(session);
const Strategy = require("passport-discord").Strategy;
const moment = require("moment");
require("moment-duration-format");
const helmet = require("helmet");

const md = require("marked");
const db = require('quick.db');


module.exports = (client) => {
  
  const bilgiler = {
    oauthSecret: "vBZnwpizI1EagY3Rxowd9s84IXFFQvoH",
    callbackURL: `https://dash.vortexbot.org/callback`,
    domain: `https://dash.vortexbot.org/`
  };
  
  console.log('BAŞARILI')
  
  const dataDir = path.resolve(`${process.cwd()}${path.sep}panel`);

  const templateDir = path.resolve(`${dataDir}${path.sep}html${path.sep}`);

  app.use("/css", express.static(path.resolve(`${dataDir}${path.sep}css`)));
  
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });

  passport.use(new Strategy({
    clientID: client.user.id,
    clientSecret: bilgiler.oauthSecret,
    callbackURL: bilgiler.callbackURL,
    scope: ["identify", "guilds" , "email"]
  },
  (accessToken, refreshToken, profile, done) => {
    process.nextTick(() => done(null, profile));
  }));

  app.use(session({
    secret: 'yusuf',
    resave: false,
    saveUninitialized: false,
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(helmet());

  app.locals.domain = bilgiler.domain;
  
  app.engine("html", require("ejs").renderFile);
  app.set("view engine", "html");

  var bodyParser = require("body-parser");
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  })); 
  
  function girisGerekli(req, res, next) {
    if (req.isAuthenticated()) return next();
    req.session.backURL = req.url;
    res.redirect("/giris");
  }
  
  const yukle = (res, req, template, data = {}) => {
    const baseData = {
      bot: client,
      path: req.path,
      user: req.isAuthenticated() ? req.user : null
    };
    res.render(path.resolve(`${templateDir}${path.sep}${template}`), Object.assign(baseData, data));
  };
  
  let dil = ""
  app.get("/", (req, res) => {
    yukle(res, req, "Baslangic.ejs")
  });
  
//Tovbe tovbe kufurlere bak 
  app.get('/api/kufur', (request, response) => {
  var kufur =  ["0r0spuc0cu","4n4n1 sk3r1m","p1c","@n@nı skrm","evladi","orsb","orsbcogu","amnskm","anaskm","mk","oc","abaza","abazan","ag","a\u011fz\u0131na s\u0131\u00e7ay\u0131m","fuck","shit","ahmak","seks","sex","allahs\u0131z","am","amar\u0131m","ambiti","am biti","amc\u0131\u011f\u0131","amc\u0131\u011f\u0131n","amc\u0131\u011f\u0131n\u0131","amc\u0131\u011f\u0131n\u0131z\u0131","amc\u0131k","amc\u0131k ho\u015faf\u0131","amc\u0131klama","amc\u0131kland\u0131","amcik","amck","amckl","amcklama","amcklaryla","amckta","amcktan","amcuk","am\u0131k","am\u0131na","am\u0131nako","am\u0131na koy","am\u0131na koyar\u0131m","am\u0131na koyay\u0131m","am\u0131nakoyim","am\u0131na koyyim","am\u0131na s","am\u0131na sikem","am\u0131na sokam","am\u0131n feryad\u0131","am\u0131n\u0131","am\u0131n\u0131 s","am\u0131n oglu","am\u0131no\u011flu","am\u0131n o\u011flu","am\u0131s\u0131na","am\u0131s\u0131n\u0131","amina","amina g","amina k","aminako","aminakoyarim","amina koyarim","amina koyay\u0131m","amina koyayim","aminakoyim","aminda","amindan","amindayken","amini","aminiyarraaniskiim","aminoglu","amin oglu","amiyum","amk","amkafa","amk \u00e7ocu\u011fu","amlarnzn","aml\u0131","amm","ammak","ammna","amn","amna","amnda","amndaki","amngtn","amnn","amona","amq","ams\u0131z","amsiz","amsz","amteri","amugaa","amu\u011fa","amuna","ana","anaaann","anal","analarn","anam","anamla","anan","anana","anandan","anan\u0131","anan\u0131","anan\u0131n","anan\u0131n am","anan\u0131n am\u0131","anan\u0131n d\u00f6l\u00fc","anan\u0131nki","anan\u0131sikerim","anan\u0131 sikerim","anan\u0131sikeyim","anan\u0131 sikeyim","anan\u0131z\u0131n","anan\u0131z\u0131n am","anani","ananin","ananisikerim","anani sikerim","ananisikeyim","anani sikeyim","anann","ananz","anas","anas\u0131n\u0131","anas\u0131n\u0131n am","anas\u0131 orospu","anasi","anasinin","anay","anayin","angut","anneni","annenin","annesiz","anuna","aptal","aq","a.q","a.q.","aq.","ass","atkafas\u0131","atm\u0131k","att\u0131rd\u0131\u011f\u0131m","attrrm","auzlu","avrat","ayklarmalrmsikerim","azd\u0131m","azd\u0131r","azd\u0131r\u0131c\u0131","babaannesi ka\u015far","baban\u0131","baban\u0131n","babani","babas\u0131 pezevenk","baca\u011f\u0131na s\u0131\u00e7ay\u0131m","bac\u0131na","bac\u0131n\u0131","bac\u0131n\u0131n","bacini","bacn","bacndan","bacy","bastard","basur","beyinsiz","b\u0131z\u0131r","bitch","biting","bok","boka","bokbok","bok\u00e7a","bokhu","bokkkumu","boklar","boktan","boku","bokubokuna","bokum","bombok","boner","bosalmak","bo\u015falmak","cenabet","cibiliyetsiz","cibilliyetini","cibilliyetsiz","cif","cikar","cim","\u00e7\u00fck","dalaks\u0131z","dallama","daltassak","dalyarak","dalyarrak","dangalak","dassagi","diktim","dildo","dingil","dingilini","dinsiz","dkerim","domal","domalan","domald\u0131","domald\u0131n","domal\u0131k","domal\u0131yor","domalmak","domalm\u0131\u015f","domals\u0131n","domalt","domaltarak","domalt\u0131p","domalt\u0131r","domalt\u0131r\u0131m","domaltip","domaltmak","d\u00f6l\u00fc","d\u00f6nek","d\u00fcd\u00fck","eben","ebeni","ebenin","ebeninki","ebleh","ecdad\u0131n\u0131","ecdadini","embesil","emi","fahise","fahi\u015fe","feri\u015ftah","ferre","fuck","fucker","fuckin","fucking","gavad","gavat","geber","geberik","gebermek","gebermi\u015f","gebertir","ger\u0131zekal\u0131","gerizekal\u0131","gerizekali","gerzek","giberim","giberler","gibis","gibi\u015f","gibmek","gibtiler","goddamn","godo\u015f","godumun","gotelek","gotlalesi","gotlu","gotten","gotundeki","gotunden","gotune","gotunu","gotveren","goyiim","goyum","goyuyim","goyyim","g\u00f6t","g\u00f6t deli\u011fi","g\u00f6telek","g\u00f6t herif","g\u00f6tlalesi","g\u00f6tlek","g\u00f6to\u011flan\u0131","g\u00f6t o\u011flan\u0131","g\u00f6to\u015f","g\u00f6tten","g\u00f6t\u00fc","g\u00f6t\u00fcn","g\u00f6t\u00fcne","g\u00f6t\u00fcnekoyim","g\u00f6t\u00fcne koyim","g\u00f6t\u00fcn\u00fc","g\u00f6tveren","g\u00f6t veren","g\u00f6t verir","gtelek","gtn","gtnde","gtnden","gtne","gtten","gtveren","hasiktir","hassikome","hassiktir","has siktir","hassittir","haysiyetsiz","hayvan herif","ho\u015faf\u0131","h\u00f6d\u00fck","hsktr","huur","\u0131bnel\u0131k","ibina","ibine","ibinenin","ibne","ibnedir","ibneleri","ibnelik","ibnelri","ibneni","ibnenin","ibnerator","ibnesi","idiot","idiyot","imansz","ipne","iserim","i\u015ferim","ito\u011flu it","kafam girsin","kafas\u0131z","kafasiz","kahpe","kahpenin","kahpenin feryad\u0131","kaka","kaltak","kanc\u0131k","kancik","kappe","karhane","ka\u015far","kavat","kavatn","kaypak","kayyum","kerane","kerhane","kerhanelerde","kevase","keva\u015fe","kevvase","koca g\u00f6t","kodu\u011fmun","kodu\u011fmunun","kodumun","kodumunun","koduumun","koyarm","koyay\u0131m","koyiim","koyiiym","koyim","koyum","koyyim","krar","kukudaym","laciye boyad\u0131m","lavuk","libo\u015f","madafaka","mal","malafat","malak","manyak","mcik","meme","memelerini","mezveleli","minaamc\u0131k","mincikliyim","mna","monakkoluyum","motherfucker","mudik","oc","ocuu","ocuun","O\u00c7","o\u00e7","o. \u00e7ocu\u011fu","o\u011flan","o\u011flanc\u0131","o\u011flu it","orosbucocuu","orospu","orospucocugu","orospu cocugu","orospu \u00e7oc","orospu\u00e7ocu\u011fu","orospu \u00e7ocu\u011fu","orospu \u00e7ocu\u011fudur","orospu \u00e7ocuklar\u0131","orospudur","orospular","orospunun","orospunun evlad\u0131","orospuydu","orospuyuz","orostoban","orostopol","orrospu","oruspu","oruspu\u00e7ocu\u011fu","oruspu \u00e7ocu\u011fu","osbir","ossurduum","ossurmak","ossuruk","osur","osurduu","osuruk","osururum","otuzbir","\u00f6k\u00fcz","\u00f6\u015fex","patlak zar","penis","pezevek","pezeven","pezeveng","pezevengi","pezevengin evlad\u0131","pezevenk","pezo","pic","pici","picler","pi\u00e7","pi\u00e7in o\u011flu","pi\u00e7 kurusu","pi\u00e7ler","pipi","pipi\u015f","pisliktir","porno","pussy","pu\u015ft","pu\u015fttur","rahminde","revizyonist","s1kerim","s1kerm","s1krm","sakso","saksofon","salaak","salak","saxo","sekis","serefsiz","sevgi koyar\u0131m","sevi\u015felim","sexs","s\u0131\u00e7ar\u0131m","s\u0131\u00e7t\u0131\u011f\u0131m","s\u0131ecem","sicarsin","sie","sik","sikdi","sikdi\u011fim","sike","sikecem","sikem","siken","sikenin","siker","sikerim","sikerler","sikersin","sikertir","sikertmek","sikesen","sikesicenin","sikey","sikeydim","sikeyim","sikeym","siki","sikicem","sikici","sikien","sikienler","sikiiim","sikiiimmm","sikiim","sikiir","sikiirken","sikik","sikil","sikildiini","sikilesice","sikilmi","sikilmie","sikilmis","sikilmi\u015f","sikilsin","sikim","sikimde","sikimden","sikime","sikimi","sikimiin","sikimin","sikimle","sikimsonik","sikimtrak","sikin","sikinde","sikinden","sikine","sikini","sikip","sikis","sikisek","sikisen","sikish","sikismis","siki\u015f","siki\u015fen","siki\u015fme","sikitiin","sikiyim","sikiym","sikiyorum","sikkim","sikko","sikleri","sikleriii","sikli","sikm","sikmek","sikmem","sikmiler","sikmisligim","siksem","sikseydin","sikseyidin","siksin","siksinbaya","siksinler","siksiz","siksok","siksz","sikt","sikti","siktigimin","siktigiminin","sikti\u011fim","sikti\u011fimin","sikti\u011fiminin","siktii","siktiim","siktiimin","siktiiminin","siktiler","siktim","siktim","siktimin","siktiminin","siktir","siktir et","siktirgit","siktir git","siktirir","siktiririm","siktiriyor","siktir lan","siktirolgit","siktir ol git","sittimin","sittir","skcem","skecem","skem","sker","skerim","skerm","skeyim","skiim","skik","skim","skime","skmek","sksin","sksn","sksz","sktiimin","sktrr","skyim","slaleni","sokam","sokar\u0131m","sokarim","sokarm","sokarmkoduumun","sokay\u0131m","sokaym","sokiim","soktu\u011fumunun","sokuk","sokum","soku\u015f","sokuyum","soxum","sulaleni","s\u00fclaleni","s\u00fclalenizi","s\u00fcrt\u00fck","\u015ferefsiz","\u015f\u0131ll\u0131k","taaklarn","taaklarna","tarrakimin","tasak","tassak","ta\u015fak","ta\u015f\u015fak","tipini s.k","tipinizi s.keyim","tiyniyat","toplarm","topsun","toto\u015f","vajina","vajinan\u0131","veled","veledizina","veled i zina","verdiimin","weled","weledizina","whore","xikeyim","yaaraaa","yalama","yalar\u0131m","yalarun","yaraaam","yarak","yaraks\u0131z","yaraktr","yaram","yaraminbasi","yaramn","yararmorospunun","yarra","yarraaaa","yarraak","yarraam","yarraam\u0131","yarragi","yarragimi","yarragina","yarragindan","yarragm","yarra\u011f","yarra\u011f\u0131m","yarra\u011f\u0131m\u0131","yarraimin","yarrak","yarram","yarramin","yarraminba\u015f\u0131","yarramn","yarran","yarrana","yarrrak","yavak","yav\u015f","yav\u015fak","yav\u015fakt\u0131r","yavu\u015fak","y\u0131l\u0131\u015f\u0131k","yilisik","yogurtlayam","yo\u011furtlayam","yrrak","z\u0131kk\u0131m\u0131m","zibidi","zigsin","zikeyim","zikiiim","zikiim","zikik","zikim","ziksiiin","ziksiin","zulliyetini","zviyetini"]                    
     let result = kufur

  response.json(kufur)
})
 const renderTemplate = (res, req, template, data = {}) => {
    const baseData = {
      bot: client,
      path: req.path,
      user: req.isAuthenticated() ? req.user : null
    };
    res.render(path.resolve(`${templateDir}${path.sep}${template}`), Object.assign(baseData, data));
    
  };
 

  app.get("/giris", (req, res, next) => {
    if (req.session.backURL) {
      req.session.backURL = req.session.backURL;
    } else if (req.headers.referer) {
      const parsed = url.parse(req.headers.referer);
      if (parsed.hostname === app.locals.domain) {
        req.session.backURL = parsed.path;
      }
    } else {
      req.session.backURL = "";
    }
    next();
    

  },
  passport.authenticate("discord"));

  app.get("/giris", (req, res, next) => {
    if (req.session.backURL) {
      req.session.backURL = req.session.backURL;
    } else if (req.headers.referer) {
      const parsed = url.parse(req.headers.referer);
      if (parsed.hostname === app.locals.domain) {
        req.session.backURL = parsed.path;
      }
    } else {
      req.session.backURL = "/en";
    }
    next();
  },
  passport.authenticate("discord"));
  
  app.get("/autherror", (req, res) => {
    res.json({"hata":"Bir hata sonucunda Discord'da bağlanamadım! Lütfen tekrar deneyiniz."})
  });
  
  app.get("/callback", passport.authenticate("discord", { failureRedirect: "/autherror" }), async (req, res) => {
    if (client.ayarlar.sahip.includes(req.user.id)) {
      req.session.isAdmin = true;
    } else {
      req.session.isAdmin = false;
    }
    if (req.session.backURL) {
      const url = req.session.backURL;
      req.session.backURL = null;
      res.redirect(url);

    } else {
      res.redirect(`Anasayfa`);
    }
    
    client.channels.get("632476440897650698").send(`**${client.users.get(req.user.id).tag}** adlı kullanıcı Web Paneline Discord hesabıyla giriş yaptı!`)

  });
  

  app.get("/cikis", function(req, res) {
    req.session.destroy(() => {
      req.logout();
      res.redirect("/");
      
    });

    
  });
  


  app.get("/anasayfa", girisGerekli, (req, res) => {
    yukle(res, req, "anasayfa.ejs");
  });
  
  
  app.get("/Yistatistik", girisGerekli, (req, res) => {
    yukle(res, req, "Yistatistik.ejs");
  });
  app.get("/Ypanel", girisGerekli, (req, res) => {
    yukle(res, req, "ppanel.ejs");
  });
   app.get("/baslangic", (req, res) => {
    yukle(res, req, "Baslangic.ejs");
  });
  app.get("/komutlar", girisGerekli, (req, res) => {
    yukle(res, req, "komutlar.ejs");
  });
   app.get("/gold", girisGerekli, (req, res) => {

    yukle(res, req, "gold.ejs");
  });
    app.get("/iletisim", girisGerekli, (req, res) => {

    yukle(res, req, "iletisim.ejs");
  });
   app.get("/hakkimda",  (req, res) => {

    yukle(res, req, "hakkimda.ejs");
  });
  
 app.get("/anasayfa", (req, res) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
    const members = client.guilds.reduce((p, c) => p + c.memberCount, 0);
    const channels = client.channels.size;
    const guilds = client.guilds.size;
    renderTemplate(res, req, "anasayfa.ejs", {
      stats: {
        version: client.ayarlar.versiyon,
        servers: guilds,
        members: members,
        channels: channels,
        uptime: duration,
        memoryUsage: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2),
        dVersion: Discord.version,
        nVersion: process.version
      }
    });
  });

  
  app.get("/kullaniciler", girisGerekli, (req, res) => {
    yukle(res, req, "kullanıcılar.ejs");
  });
  
  app.get("/kullanici/:kullaniciID", girisGerekli, (req, res) => {
    const kullanici = client.users.get(req.params.kullaniciID);
    if (!kullanici) return res.json({"hata":"Bot "+req.params.kullaniciID+" ID adresine sahip bir kullanıcıyı göremiyor."});
    yukle(res, req, "kullanıcı.ejs", {kullanici});
  });
  
  app.get("/kullanici/:kullaniciID/yonet", girisGerekli, (req, res) => {
    const kullanici = client.users.get(req.params.kullaniciID);
       const member = client.users.get(req.params.kullaniciID);

    if (!kullanici) return res.json({"hata":"Bot "+req.params.kullaniciID+" ID adresine sahip bir kullanıcıyı göremiyor."});
    if (req.user.id !== req.params.kullaniciID) return res.json({"hata":"Başkasının kullanıcı ayarlarına dokunamazsın."});
    yukle(res, req, "k-panel.ejs", {kullanici});
  });
  
  
  app.post("/kullanici/:kullaniciID/yonet", girisGerekli, (req, res) => {
    const kullanici = client.users.get(req.params.kullaniciID);
    if (!kullanici) return res.json({"hata":"Bot "+req.params.kullaniciID+" ID adresine sahip bir kullanıcıyı göremiyor."});
    if (req.user.id !== req.params.kullaniciID) return res.json({"hata":"Başkasının kullanıcı ayarlarına dokunamazsın."});
    client.panel.ayarlarKaydetKullanici(kullanici.id, kullanici, req.body, req, res);
    res.redirect(`/kullanici/${req.params.kullaniciID}/yonet`);
  });
  
  app.get("/kullanici/:kullaniciID/yonet/:ayarID/sifirla", girisGerekli, (req, res) => {
    if (db.has(`${req.params.kullaniciID}.${req.params.ayarID}`) ===  false || req.params.ayarID === "resim" && db.fetch(`${req.params.kullaniciID}.${req.params.ayarID}`) === "https://img.revabot.tk/99kd63vy.png") return res.json({"hata":req.params.ayarID.charAt(0).toUpperCase()+req.params.ayarID.slice(1)+" ayarı "+client.users.get(req.params.kullaniciID).tag+" adlı kullanıcıda ayarlı olmadığı için sıfırlanamaz."});
    db.delete(`${req.params.kullaniciID}.${req.params.ayarID}`)
    res.redirect(`/kullanici/${req.params.kullaniciID}/yonet`);
  });
  
  
  
  app.get("/panel", girisGerekli, (req, res) => {
    const perms = Discord.Permissions;
    yukle(res, req, "panel.ejs", {perms});
  });
    app.get("/botuekle",  (req, res) => {
    res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`);
  });
  
  app.get("/panel/:sunucuID", girisGerekli, (req, res) => {
    res.redirect(`/panel/${req.params.sunucuID}/yonet`);
  });

  app.get("/panel/:sunucuID/yonet", girisGerekli, (req, res) => {
    const sunucu = client.guilds.get(req.params.sunucuID);
    const guild = client.guilds.get(req.params.guildID);
    if (!sunucu) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = sunucu && !!sunucu.member(req.user.id) ? sunucu.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
    if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
    yukle(res, req, "sayfa-ayarlar.ejs", {sunucu, guild});
  });
  

  
  
  // OTO TAG SİTEMİ 
  
  
  
        app.post("/panel/:guildID/ototag", girisGerekli, async(req, res) => {
    const guild = client.guilds.get(req.params.guildID);
      const sunucu = client.guilds.get(req.params.sunucuID);
   if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
   
    client.writeSettings(guild.id, req.body);
       
 
    res.redirect("/panel/"+req.params.guildID+"/ototag");
  });
  
  
  
      app.get("/panel/:guildID/ototag", girisGerekli, (req, res) => {
    const guild = client.guilds.get(req.params.guildID);
    const sunucu = client.guilds.get(req.params.guildID);
if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
    yukle(res, req, "sayfa-ototag.ejs", {guild, sunucu});
  });
  
  
  
  app.get("/panel/:sunucuID/tag/sifirla", girisGerekli, (req, res) => {
    if (client.ayar.has(`tagB_${req.params.sunucuID}`) === false) return res.json({"hata": "otomatik tag adlı ayar "+client.guilds.get(req.params.sunucuID).name+" adlı sunucuda ayarlı olmadığı için sıfırlanamaz."});
    client.ayar.delete(`tagB_${req.params.sunucuID}`)
    res.redirect(`/panel/${req.params.sunucuID}/ototag`);
  });
  
   app.get("/panel/:sunucuID/ototagK/sifirla", girisGerekli, (req, res) => {
    if (client.ayar.has(`tagKanal_${req.params.sunucuID}`) === false) return res.json({"hata": "Tag kayıt kanalı   "+client.guilds.get(req.params.sunucuID).name+" adlı sunucuda ayarlı olmadığı için sıfırlanamaz."});
    client.ayar.delete(`tagKanal_${req.params.sunucuID}`)
    res.redirect(`/panel/${req.params.sunucuID}/ototag`);
  });
  
  
  
  
  
  // OTOROL
  
  
  
  
      app.post("/panel/:guildID/otorol", girisGerekli, async(req, res) => {
    const guild = client.guilds.get(req.params.guildID);
      const sunucu = client.guilds.get(req.params.sunucuID);
   if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
   
    client.writeSettings(guild.id, req.body);
       
 
    res.redirect("/panel/"+req.params.guildID+"/otorol");
  });
  
  
  
      app.get("/panel/:guildID/otorol", girisGerekli, (req, res) => {
    const guild = client.guilds.get(req.params.guildID);
            const sunucu = client.guilds.get(req.params.guildID);

if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
    yukle(res, req, "sayfa-otorol.ejs", {guild, sunucu});
  });
  
  
  
  app.get("/panel/:sunucuID/otorol/sifirla", girisGerekli, (req, res) => {
    if (client.ayar.has(`otoR_${req.params.sunucuID}`) === false) return res.json({"hata": "Otorol adlı ayar "+client.guilds.get(req.params.sunucuID).name+" adlı sunucuda ayarlı olmadığı için sıfırlanamaz."});
    client.ayar.delete(`otoR_${req.params.sunucuID}`)
    res.redirect(`/panel/${req.params.sunucuID}/otorol`);
  });
  
   app.get("/panel/:sunucuID/otoRK/sifirla", girisGerekli, (req, res) => {
    if (client.ayar.has(`otoRK_${req.params.sunucuID}`) === false) return res.json({"hata": "Otorol kanalı   "+client.guilds.get(req.params.sunucuID).name+" adlı sunucuda ayarlı olmadığı için sıfırlanamaz."});
    client.ayar.delete(`otoRK_${req.params.sunucuID}`)
    res.redirect(`/panel/${req.params.sunucuID}/otorol`);
  });
  //resim
 
  //guvenlik
  app.post("/panel/:guildID/guvenlik3", girisGerekli, async(req, res) => {
    const guild = client.guilds.get(req.params.guildID);
      const sunucu = client.guilds.get(req.params.sunucuID);
   if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
   
    client.writeSettings(guild.id, req.body);
       
 
    res.redirect("/panel/"+req.params.guildID+"/guvenlik3");
  });
  
  
  
      app.get("/panel/:guildID/guvenlik3", girisGerekli, (req, res) => {
    const guild = client.guilds.get(req.params.guildID);
    const sunucu = client.guilds.get(req.params.guildID);
if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
    yukle(res, req, "sayfa-guvenlik.ejs", {guild, sunucu});
  });
  
  
  
  app.get("/panel/:sunucuID/guvenlik3/sifirla", girisGerekli, (req, res) => {
    if (client.ayar.has(`guvenlik3_${req.params.sunucuID}`) === false) return res.json({"hata": "Guvenlik kanalı "+client.guilds.get(req.params.sunucuID).name+" adlı sunucuda ayarlı olmadığı için sıfırlanamaz."});
    client.ayar.delete(`guvenlik3_${req.params.sunucuID}`)
    res.redirect(`/panel/${req.params.sunucuID}/guvenlik3`);
  });
  //komut kanal
    app.post("/panel/:guildID/komutkanal", girisGerekli, async(req, res) => {
    const guild = client.guilds.get(req.params.guildID);
      const sunucu = client.guilds.get(req.params.sunucuID);
   if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
   
    client.writeSettings(guild.id, req.body);
       
 
    res.redirect("/panel/"+req.params.guildID+"/komutkanal");
  });
  
  
  
      app.get("/panel/:guildID/komutkanal", girisGerekli, (req, res) => {
    const guild = client.guilds.get(req.params.guildID);
    const sunucu = client.guilds.get(req.params.guildID);
if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
    yukle(res, req, "sayfa-komutkanal.ejs", {guild, sunucu});
  });
  
  
  
  app.get("/panel/:sunucuID/komutkanal/sifirla", girisGerekli, (req, res) => {
    if (client.ayar.has(`ktr_${req.params.sunucuID}`) === false) return res.json({"hata": "Komut kanalı "+client.guilds.get(req.params.sunucuID).name+" adlı sunucuda ayarlı olmadığı için sıfırlanamaz."});
    client.ayar.delete(`ktr_${req.params.sunucuID}`)
    res.redirect(`/panel/${req.params.sunucuID}/komutkanal`);
  });
  //resimli hoş geldin
  app.post("/panel/:guildID/gresim", girisGerekli, async(req, res) => {
    const guild = client.guilds.get(req.params.guildID);
      const sunucu = client.guilds.get(req.params.sunucuID);
   if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
   
    client.writeSettings(guild.id, req.body);
       
 
    res.redirect("/panel/"+req.params.guildID+"/gresim");
  });
  
  
  
      app.get("/panel/:guildID/gresim", girisGerekli, (req, res) => {
    const guild = client.guilds.get(req.params.guildID);
    const sunucu = client.guilds.get(req.params.guildID);
if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
    yukle(res, req, "sayfa-gresim.ejs", {guild, sunucu});
  });
  
  
  
  app.get("/panel/:sunucuID/gresim/sifirla", girisGerekli, (req, res) => {
    if (client.ayar.has(`gcc_${req.params.sunucuID}`) === false) return res.json({"hata": "Resim kanalı"+client.guilds.get(req.params.sunucuID).name+" adlı sunucuda ayarlı olmadığı için sıfırlanamaz."});
    client.ayar.delete(`gcc_${req.params.sunucuID}`)
    res.redirect(`/panel/${req.params.sunucuID}/gresim`);
  });
  //modlog
  app.post("/panel/:guildID/modlog", girisGerekli, async(req, res) => {
    const guild = client.guilds.get(req.params.guildID);
      const sunucu = client.guilds.get(req.params.sunucuID);
   if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
   
    client.writeSettings(guild.id, req.body);
       
 
    res.redirect("/panel/"+req.params.guildID+"/modlog");
  });
  
  
  
      app.get("/panel/:guildID/modlog", girisGerekli, (req, res) => {
    const guild = client.guilds.get(req.params.guildID);
    const sunucu = client.guilds.get(req.params.guildID);
if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
    yukle(res, req, "sayfa-modlog.ejs", {guild, sunucu});
  });
  
  
  
  app.get("/panel/:sunucuID/modlog/sifirla", girisGerekli, (req, res) => {
    if (client.ayar.has(`log_${req.params.sunucuID}`) === false) return res.json({"hata": "Modlog kanalı "+client.guilds.get(req.params.sunucuID).name+" adlı sunucuda ayarlı olmadığı için sıfırlanamaz."});
    client.ayar.delete(`log_${req.params.sunucuID}`)
    res.redirect(`/panel/${req.params.sunucuID}/modlog`);
  });
  
  // FİLTRE
  
  
  
  
  
    app.get("/panel/:guildID/filtre", girisGerekli, (req, res) => {
    const guild = client.guilds.get(req.params.guildID);
      const sunucu = client.guilds.get(req.params.guildID);
if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
    yukle(res, req, "sayfa-filtre.ejs", {sunucu, guild});
  });
  
  

  
  
    app.post("/panel/:guildID/filtre", girisGerekli, async(req, res) => {
    const guild = client.guilds.get(req.params.guildID);
      const sunucu = client.guilds.get(req.params.sunucuID);
      
    if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
    if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
  
    client.writeSettings(guild.id, req.body);
       
 
    res.redirect("/panel/"+req.params.guildID+"/filtre");
  });
  
  
    app.get("/panel/:guildID/filtre/sil", girisGerekli, async (req, res) => {
res.redirect("/panel/"+req.params.guildID+"/filtre");
});

  
  
 
app.get("/panel/:guildID/filtre/sil/:cmdID", girisGerekli, async (req, res) => {
const guild = client.guilds.get(req.params.guildID);
if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});


var komutf = req.params.cmdID;


if(!db.fetch(`filtre_${req.params.guildID}`).includes(komutf)) {
res.json({"hata":`Filtre bulunamadı veya silinmiş.`});
} else {

let x = komutf
let arr = []
db.fetch(`filtre_${req.params.guildID}`).forEach(v => {
if (v !== x) {
arr.push(v)
}
})
  

db.set(`filtre_${req.params.guildID}`, arr)
  
}

res.redirect("/panel/"+req.params.guildID+"/filtre");
});

  
  // ÖZEL KOMUT
  
  
  
  app.get("/panel/:guildID/ozelkomutlar", girisGerekli, (req, res) => {
  const guild = client.guilds.get(req.params.guildID);
        const sunucu = client.guilds.get(req.params.guildID);

 if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
  const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
    if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
  yukle(res, req, "sayfa-ozelkomutlar.ejs", {guild, sunucu});
});

  app.post("/panel/:guildID/ozelkomutlar", girisGerekli, (req, res) => {
  const guild = client.guilds.get(req.params.guildID);
if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
  const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
    if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});

  client.customCmds(guild.id, req.body);
  res.redirect("/panel/"+req.params.guildID+"/ozelkomutlar");
});
  
  
  
  app.get("/panel/:guildID/ozelkomutlar", girisGerekli, (req, res) => {
const guild = client.guilds.get(req.params.guildID);
    const sunucu = client.guilds.get(req.params.guildID);
if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
    if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
yukle(res, req, "sayfa-ozelkomutlar.ejs", {guild, sunucu});
});

app.post("/panel/:guildID/ozelkomutlar", girisGerekli, (req, res) => {
const guild = client.guilds.get(req.params.guildID);
if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
    if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});

  
  
client.customCmds(guild.id, req.body);
res.redirect("/panel/"+req.params.guildID+"/ozelkomutlar");
});
  
  
  app.get("/panel/:guildID/ozelkomutlar/sil", girisGerekli, async (req, res) => {
res.redirect("/panel/"+req.params.guildID+"/ozelkomutlar");
});

  
  
  const fs = require('fs');
app.get("/panel/:guildID/ozelkomutlar/sil/:cmdID", girisGerekli, async (req, res) => {
const guild = client.guilds.get(req.params.guildID);
if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});


var komut = req.params.cmdID;

let komutlar = client.cmdd
if(komutlar[req.params.guildID].length === 1) {
 if(Object.keys(komutlar[req.params.guildID][0])[0].toString() === komut) {
   delete komutlar[req.params.guildID]
   fs.writeFile("./komutlar.json", JSON.stringify(komutlar), (err) => {
     console.log(err)
   })
 }
} else {
for (var i = 0; i < komutlar[req.params.guildID].length; i++) {
 if(Object.keys(komutlar[req.params.guildID][i])[0].toString() === komut) {
   komutlar[req.params.guildID].splice(i, 1);

   fs.writeFile("./komutlar.json", JSON.stringify(komutlar), (err) => {
     console.log(err)
   })
 }
}
}

res.redirect("/panel/"+req.params.guildID+"/ozelkomutlar");
});

  

  
  //GİRİŞ ÇIKIŞ
  
  
  

  
        app.post("/panel/:guildID/giriscikis", girisGerekli, async(req, res) => {
    const guild = client.guilds.get(req.params.guildID);
      const sunucu = client.guilds.get(req.params.sunucuID);
   if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
   
    client.writeSettings(guild.id, req.body);
       
 
    res.redirect("/panel/"+req.params.guildID+"/giriscikis");
  });
  
  
  
      app.get("/panel/:guildID/giriscikis", girisGerekli, (req, res) => {
    const guild = client.guilds.get(req.params.guildID);
    const sunucu = client.guilds.get(req.params.guildID);
if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
    yukle(res, req, "sayfa-girişçıkış.ejs", {guild, sunucu});
  });
  
  
  
  app.get("/panel/:sunucuID/cikism/sifirla", girisGerekli, (req, res) => {
    if (client.ayar.has(`cikisM_${req.params.sunucuID}`) === false) return res.json({"hata": "Çıkış mesajı "+client.guilds.get(req.params.sunucuID).name+" adlı sunucuda ayarlı olmadığı için sıfırlanamaz."});
    client.ayar.delete(`cikisM_${req.params.sunucuID}`)
    res.redirect(`/panel/${req.params.sunucuID}/giriscikis`);
  });
    app.get("/panel/:sunucuID/girisk/sifirla", girisGerekli, (req, res) => {
    if (client.ayar.has(`gc_${req.params.sunucuID}`) === false) return res.json({"hata": "Giriş çıkış kanalı "+client.guilds.get(req.params.sunucuID).name+" adlı sunucuda ayarlı olmadığı için sıfırlanamaz."});
    client.ayar.delete(`gc_${req.params.sunucuID}`)
    res.redirect(`/panel/${req.params.sunucuID}/giriscikis`);
  });
  
   app.get("/panel/:sunucuID/girism/sifirla", girisGerekli, (req, res) => {
    if (client.ayar.has(`girisM_${req.params.sunucuID}`) === false) return res.json({"hata": "Giriş mesajı "+client.guilds.get(req.params.sunucuID).name+" adlı sunucuda ayarlı olmadığı için sıfırlanamaz."});
    client.ayar.delete(`girisM_${req.params.sunucuID}`)
    res.redirect(`/panel/${req.params.sunucuID}/giriscikis`);
  });
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  // DESTEK SİTEM
  

   app.post("/panel/:guildID/desteksistemi", girisGerekli, async(req, res) => {
    const guild = client.guilds.get(req.params.guildID);
      const sunucu = client.guilds.get(req.params.sunucuID);
   if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
   
    client.writeSettings(guild.id, req.body);
       
 
    res.redirect("/panel/"+req.params.guildID+"/desteksistemi");
  });
  
  
  
      app.get("/panel/:guildID/desteksistemi", girisGerekli, (req, res) => {
    const guild = client.guilds.get(req.params.guildID);
    const sunucu = client.guilds.get(req.params.guildID);
if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
    yukle(res, req, "sayfa-destek.ejs", {guild, sunucu});
  });
  
  
  
  app.get("/panel/:sunucuID/destekk/sifirla", girisGerekli, (req, res) => {
    if (client.ayar.has(`destekK_${req.params.sunucuID}`) === false) return res.json({"hata": "Destek kanalı "+client.guilds.get(req.params.sunucuID).name+" adlı sunucuda ayarlı olmadığı için sıfırlanamaz."});
    client.ayar.delete(`destekK_${req.params.sunucuID}`)
    res.redirect(`/panel/${req.params.sunucuID}/desteksistemi`);
  });
  
   app.get("/panel/:sunucuID/destekr/sifirla", girisGerekli, (req, res) => {
    if (client.ayar.has(`destekR_${req.params.sunucuID}`) === false) return res.json({"hata": "Destek Rolü "+client.guilds.get(req.params.sunucuID).name+" adlı sunucuda ayarlı olmadığı için sıfırlanamaz."});
    client.ayar.delete(`destekR_${req.params.sunucuID}`)
    res.redirect(`/panel/${req.params.sunucuID}/desteksistemi`);
  });
  
  
// SAYAÇ SİSTEMİ
          app.post("/panel/:guildID/sayac", girisGerekli, async(req, res) => {
    const guild = client.guilds.get(req.params.guildID);
      const sunucu = client.guilds.get(req.params.sunucuID);
   if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
   
    client.writeSettings(guild.id, req.body);
       
 
    res.redirect("/panel/"+req.params.guildID+"/sayac");
  });
  
  
  
      app.get("/panel/:guildID/sayac", girisGerekli, (req, res) => {
    const guild = client.guilds.get(req.params.guildID);
    const sunucu = client.guilds.get(req.params.guildID);
if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
    yukle(res, req, "sayfa-sayaç.ejs", {guild, sunucu});
  });
  
  
  
  app.get("/panel/:sunucuID/skanal/sifirla", girisGerekli, (req, res) => {
    if (client.ayar.has(`sKanal_${req.params.sunucuID}`) === false) return res.json({"hata": "Çıkış mesajı "+client.guilds.get(req.params.sunucuID).name+" adlı sunucuda ayarlı olmadığı için sıfırlanamaz."});
    client.ayar.delete(`sKanal_${req.params.sunucuID}`)
    res.redirect(`/panel/${req.params.sunucuID}/sayac`);
  });
    app.get("/panel/:sunucuID/sayac/sifirla", girisGerekli, (req, res) => {
    if (client.ayar.has(`sayac_${req.params.sunucuID}`) === false) return res.json({"hata": "Giriş çıkış kanalı "+client.guilds.get(req.params.sunucuID).name+" adlı sunucuda ayarlı olmadığı için sıfırlanamaz."});
    client.ayar.delete(`sayac_${req.params.sunucuID}`)
    res.redirect(`/panel/${req.params.sunucuID}/sayac`);
  });


// GENEL AYARLAR
 

         app.post("/panel/:guildID/genel", girisGerekli, async(req, res) => {
    const guild = client.guilds.get(req.params.guildID);
      const sunucu = client.guilds.get(req.params.sunucuID);
   if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
   
    client.writeSettings(guild.id, req.body);
       
 
    res.redirect("/panel/"+req.params.guildID+"/genel");
  });
  
   app.get("/panel/:sunucuID/ktr/sifirla", girisGerekli, (req, res) => {
    if (client.ayar.has(`ktr_${req.params.sunucuID}`) === false) return res.json({"hata": "Guvenlik kanalı "+client.guilds.get(req.params.sunucuID).name+" adlı sunucuda ayarlı olmadığı için sıfırlanamaz."});
    client.ayar.delete(`ktr_${req.params.sunucuID}`)
    res.redirect(`/panel/${req.params.sunucuID}/genel`);
  });
  
      app.get("/panel/:guildID/genel", girisGerekli, (req, res) => {
    const guild = client.guilds.get(req.params.guildID);
    const sunucu = client.guilds.get(req.params.guildID);
if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
    yukle(res, req, "sayfa-genel.ejs", {guild, sunucu});
  });
  
  
  
  app.get("/panel/:sunucuID/srol/sifirla", girisGerekli, (req, res) => {
    if (client.ayar.has(`sRol_${req.params.sunucuID}`) === false) return res.json({"hata": "Susturma rolü "+client.guilds.get(req.params.sunucuID).name+" adlı sunucuda ayarlı olmadığı için sıfırlanamaz."});
    client.ayar.delete(`sRol_${req.params.sunucuID}`)
    res.redirect(`/panel/${req.params.sunucuID}/genel`);
  });
  
   app.get("/panel/:sunucuID/prefix/sifirla", girisGerekli, (req, res) => {
    if (client.ayar.has(`prefix_${req.params.sunucuID}`) === false) return res.json({"hata": "Prefix   "+client.guilds.get(req.params.sunucuID).name+" adlı sunucuda ayarlı olmadığı için sıfırlanamaz."});
    client.ayar.delete(`prefix_${req.params.sunucuID}`)
    res.redirect(`/panel/${req.params.sunucuID}/genel`);
  });
  
  
  
  
    app.get("/panel/:guildID/komut-yasak/sil", girisGerekli, async (req, res) => {
res.redirect("/panel/"+req.params.guildID+"/genel");
});

  
  
 
app.get("/panel/:guildID/komut-yasak/sil/:cmdID", girisGerekli, async (req, res) => {
const guild = client.guilds.get(req.params.guildID);
if (!guild) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
const isManaged = guild && !!guild.member(req.user.id) ? guild.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
  if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});


var komutf = req.params.cmdID;


if(!db.fetch(`yasakK_${req.params.guildID}`).includes(komutf)) {
res.json({"hata":`Yasaklanan komut bulunamadı veya silinmiş.`});
} else {

let x = komutf
let arr = []
db.fetch(`yasakK_${req.params.guildID}`).forEach(v => {
if (v !== x) {
arr.push(v)
}
})
  

db.set(`yasakK_${req.params.guildID}`, arr)
  
}

res.redirect("/panel/"+req.params.guildID+"/genel");
});


  
  
  

  
  
  app.post("/panel/:sunucuID/yonet", girisGerekli, (req, res) => {
    const sunucu = client.guilds.get(req.params.sunucuID);
    const g = client.guilds.get(req.params.sunucuID);
    if (!sunucu) return res.json({"hata":"Bot "+req.params.sunucuID+" ID adresine sahip bir sunucuda bulunmuyor."});
    const isManaged = sunucu && !!sunucu.member(req.user.id) ? sunucu.member(req.user.id).permissions.has("MANAGE_GUILD") : false;
    if (!isManaged && !req.session.isAdmin) return res.json({"hata":"Bu sunucuda Sunucuyu Yönet iznin bulunmuyor. Bu yüzden bu sayfaya erişim sağlayamazsın."});
    
    if (req.body['komut'] && req.body['aciklama']) {
      if (client.kayıt.komutlar.has(req.body['komut']) === true || client.kayıt.alternatifler.has(req.body['komut'])) return res.json({"hata":"Botun zaten var olan bir komutu özel komut olarak eklenemez."});
      if (db.has(`${sunucu.id}.özelKomutlar`) === true) {
        for (var i = 0; i < db.fetch(`${sunucu.id}.özelKomutlar`).length; i++) {
          if (Object.keys(db.fetch(`${sunucu.id}.özelKomutlar`)[i])[0] === req.body['komut']) return res.json({"hata":"Sunucuda "+req.body['komut']+" adlı bir özel komut zaten bulunduğu için tekrar eklenemez."});
        }  
      }
    }
    

  
    if (req.body['ban']) {
      if (sunucu.members.get(client.user.id).permissions.has("BAN_MEMBERS") === false) return res.json({"hata":"Botun "+sunucu.name+" adlı sunucuda Üyeleri Yasakla (BAN_MEMBERS) izni olmadığı için "+client.users.get(req.body['ban']).tag+" adlı üye yasaklanamıyor."});
    }
    if (req.body['unban']) {
      require('request')({
        url: `https://discordapp.com/api/v7/users/${req.body['unban']}`,
        headers: {
          "Authorization": `Bot ${client.token}`
        }
      }, async function(error, response, body) {
        if (JSON.parse(body).message && JSON.parse(body).message === "Invalid Form Body") return res.json({"hata":"Discord'da "+req.body['unban']+" ID adresine sahip bir kullanıcı bulunmuyor."});
        let bans = await sunucu.fetchBans();
        if (bans.has(req.body['unban']) === false) return res.json({"hata":sunucu.name+" sunucusunda "+JSON.parse(body).username+"#"+JSON.parse(body).discriminator+" adlı kullanıcı yasaklı olmadığı için yasağını kaldıramam."});
        res.redirect(`/panel/${req.params.sunucuID}/yonet`);
      });
      return
    }
    if (req.body['kick']) {
      if (sunucu.members.get(client.user.id).permissions.has("KICK_MEMBERS") === false) return res.json({"hata":"Botun "+sunucu.name+" adlı sunucuda Üyeleri At (KICK_MEMBERS) izni olmadığı için "+client.users.get(req.body['kick']).tag+" adlı üye atılamıyor."}); 
    }
    
    client.panel.ayarlarKaydet(sunucu.id, sunucu, req.body, req, res);
    res.redirect(`/panel/${req.params.sunucuID}/yonet`);
  });
  


  
  app.get("/yonetici", girisGerekli, (req, res) => {
    yukle(res, req, "yönetici.ejs");
  });
  
  app.get("/ekle", (req, res) => {
    res.redirect(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8`);
  });
   app.get("/seviye", (req, res) => {
    res.redirect(`https://dash.vortexbot.org/kullanici/${req.params.kullaniciID}/yonet`);
  });
  app.get("/panel/:sunucuID/botuat", girisGerekli, (req, res) => {
    client.guilds.get(req.params.sunucuID).leave();
    res.redirect("/panel");
  });
  
 
  //İngilizce Bölümler
  const port = process.env.PORT
app.listen(port, () => console.log(`Panel şu portla başlatıldı : ${port}!`))


};