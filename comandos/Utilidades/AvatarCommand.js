
exports.help = {
  'name': 'avatar',
  'aliases': ['perfil', 'fotodeperfil']
}

exports.run = async (client, message, args) => {
    const Discord = require("discord.js");
  message.delete().then(message => message.delete(7000));
    
    const user = message.mentions.users.first() || message.author;
    const avatar = user.displayAvatarURL();
    const Embed = new Discord.MessageEmbed()
  
      .setColor("#df6300")
      .setAuthor(`${user.username}`, user.displayAvatarURL())
      .setDescription(`[Baixar imagem](${avatar})`)
      .setImage(avatar)
      .setColor("#00ffff")
      .setFooter(message.guild.name + " - © 2021").setColor("#00ffff").setTimestamp()
    message.channel.send(Embed);
  }