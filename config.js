const config = {
    "ownerID": "282453998529806338", //kendi IDınızı yazınız
    "admins": [""],
    "support": [""],
    "token": "", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "", //botunuzun secretini yazınız
      "callbackURL": `https://dash.vortexbot.org/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "", //kalsın
      "domain": "https://dash.vortexbot.org/", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;