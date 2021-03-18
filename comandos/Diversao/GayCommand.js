const Discord = require('discord.js'); // puxando a livraria 'discord.js'

exports.run = (client, message, args) => { // setando as bases
    var numero = Math.floor(Math.random() * 100) + 0;
    let usuario = message.mentions.members.first() || message.author
    if(usuario.id === "573921930877468722") {    
        let number = numero + numero + numero
        let embed = new Discord.MessageEmbed()

        .setTitle(`:rainbow_flag: │ Máquina Gay`)
        .setDescription(`**<@${usuario.id}>** é **${number}%** gay`)
        .setColor('#FF0084')

        message.channel.send(embed)
        } else {
                    let embed = new Discord.MessageEmbed()

        .setTitle(`:rainbow_flag: │ Máquina Gay`)
        .setDescription(`**<@${usuario.id}>** é **${numero}%** gay`)
        .setFooter(message.guild.name + " - © 2021").setColor("#00ffff")
                            message.channel.send(embed)
        }
}
exports.help = {
    'name': 'gay',
    'aliases': ['testegay']
  }