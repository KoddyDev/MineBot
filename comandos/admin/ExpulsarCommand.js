const Discord = require('discord.js'); 
const Punish = require("../../db/PunishSystem")
module.exports.help = {
  'name': 'expulsar',
  'aliases': ['kick', 'kickar']
}

module.exports.run = async (client, message, args) => {
  const findG = await Punish.findOne({where:{grupo: message.guild.id}})
  if(findG) {
   
  if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("Você não tem **permissão** suficiente !")
    let member = message.mentions.members.first()
    if(!member)
      return message.reply("Por favor mencione um usuário válido !")
    if(!member.kickable)
      return message.reply("Eu não posso kickar esse usuário, ele pode ter um cargo maior que o meu.")
    let reason = args.slice(1).join(' ')
    if(!reason) reason = "Nenhuma razão fornecida"
    await member.kick(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consegui kickar o membro devido o: ${error}`))

      let pEmbed = new Discord.MessageEmbed()
          .setTitle("🔨 | Kick")
          .addField("Membro Kickado:", `${member.user.tag}`)
          .addField("Kickado por:", `${message.author.tag}`)
          .addField("Motivo:", `${reason}`)
          .setFooter(message.guild.name + " - © 2021").setColor("#00ffff").timestamp()

          client.channels.cache.get(findG.canal).send(pEmbed)
        } else 
        {
          message.reply("Comando desativado.") && message.guild.owner.send("O sistema de moderação não foi ativado, sugerido ativar para evitar este flood. Para ativar basta usar o comando m.config")
  }
}