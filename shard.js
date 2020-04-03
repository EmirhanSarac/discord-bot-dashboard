const config = require("./config.json");

const Discord = require("discord.js");

const adamlik = new Discord.ShardingManager("./index2rtf.js", {
  totalShards: 1, // shard sayısı ya da auto yazılabilir
  token: config.token // token
});

adamlik.spawn(); // bullshit

adamlik.on("launch", shard => {
  console.log(`${shard.id} IDli shard başarıyla başlatıldı.`);
});

setTimeout(() => {
  console.log("yeniden başlatılıyor..");
  adamlik.broadcastEval("process.exit()");
}, 21600000);
