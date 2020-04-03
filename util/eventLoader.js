const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('message', reqEvent('message'));
  client.on('guildMemberAdd', reqEvent('guildMemberAdd'));
  
  client.on('guildMemberAdd', reqEvent('giris'));
    client.on('guildMemberAdd', reqEvent('giris-g'));
  client.on('guildMemberRemove', reqEvent('cikis'));
  client.on('guildMemberRemove', reqEvent('cikis-g'));
};