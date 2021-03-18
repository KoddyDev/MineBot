const Discord = require("discord.js")

module.exports.help = {
    'name': 'ticket',
    'aliases': ['nticket']
}

exports.run = async (client, message, args) => {

    message.delete()

    let TicketEmbed = new Discord.MessageEmbed()
    .setColor("#ffd000")
    .setAuthor("UnderTicket")
    .setDescription("Selecione uma area de atendimento para facilitar!\n\n🎮 | Atendimento Tecnico\n💰 | Atendimento Financeiro")
    .setFooter("Under Ticket © 2020 ©")
    .setImage(`https://minecraftskinstealer.com/achievement/19/Atendimento/Selecione+uma+categoria`)

    message.channel.send(TicketEmbed).then(async msg => {
        msg.react("🎮")
        msg.react('💰')
    })
}
