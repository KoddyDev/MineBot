const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const Punish = require("../../db/PunishSystem")
module.exports.help = {
  'name': 'ban',
  'aliases': ['banir', 'punir']
}
exports.run = async (client, message, args) => { // setando as bases
const findG = await Punish.findOne({where:{grupo: message.guild.id}})
if(!findG) {message.reply("Comando desativado.") && message.guild.owner.send("O sistema de moderação não foi ativado, sugerido ativar para evitar este flood. Para ativar basta usar o comando m.config")}
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply("permissões insuficientes!") // caso o membro não possua a permissão 'BANIR_MEMBROS', vamos botar o erro
const msg = message
    let member = message.mentions.members.first() // puxando um membro mencionavel
    if (!member) return message.reply("selecione um usuário válido!") // caso o autor esqueça de mencionar um membro, vamos dar o erro
    if (!member.bannable) return message.reply("não é possível punir este usuário.") // caso o membro tenha um cargo acima do seu bot, ele não vai banir
    let reason = args.slice(1).join(' ')
    if (!reason) reason = "Nenhuma razão fornecida" // requisitando um motivo desse banimento
    await member.ban(reason) // caso não haja, iremos dar o erro
      .catch(error => message.reply(`${message.author}, não foi possível completar esta punição devido ao erro: ${error}`)) // caso ocorra um erro no final, vamos filtrar e avisar qual foi

      let pEmbed = new Discord.MessageEmbed()
          .setTitle("Banimento")
          .addField("Usuário punido", member.user.tag)
          .addField("Punido por", message.author.tag)
          .addField("Motivo", reason)
          .setFooter(`Autor ${message.author.tag}`, message.author.displayAvatarURL)
          .setColor("DARK_RED")

client.channels.cache.get(findG.canal).send(pEmbed)
  
  message.channel.send("Usuário punido com sucesso!")
          
}