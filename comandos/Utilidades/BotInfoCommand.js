
exports.help = {
  'name': 'botinfo',
  'aliases': ['botinfoo', 'infobot']
}

exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
  message.delete().then(message => message.delete(7000));

    const Embed = new Discord.MessageEmbed()
  
      .setColor("#df6300")
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
      .setDescription(`Desenvolvido por uKoddy#0144`)
      .setImage(avatar)
      .setColor("#00ffff")
      .setFooter(message.guild.name + " - © 2021").setColor("#00ffff").setTimestamp()
    message.channel.send(Embed);
  }