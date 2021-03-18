const Discord = require('discord.js'); // puxando a livraria 'discord.js'
exports.run = (client, message, args) => { // setando as bases
    let user = message.mentions.users.first();
    if (!user) return message.reply('você precisa mencionar dois usuários antes de shippar!')
    let user2 = message.mentions.users.last();
    if (!user2) return message.reply('você precisa mencionar dois usuários antes de shippar!')
    var numero = Math.floor(Math.random() * 100) + 0;
    var cookies = [
    "https://media.giphy.com/media/hhHcFH0xAduCs/giphy.gif",
    "https://media.giphy.com/media/bMLGNRoAy0Yko/giphy.gif",
    "https://media.giphy.com/media/RvDaBsHYLUCVG/giphy.gif",
    "https://media.giphy.com/media/13cSgdBHS5keeQ/giphy.gif",
    "https://media.giphy.com/media/LzCE6RB3JUptC/giphy.gif",
    "https://media.giphy.com/media/D3qQ8DDSrkbWU/giphy.gif",
    "https://media.giphy.com/media/j5O4lz9WEtfvG/giphy.gif",
    "https://media.giphy.com/media/fxHpSohzG4uK4/giphy.gif",
    "https://media.giphy.com/media/Y4vBiFdqtGsDu/giphy.gif",
    "https://media.giphy.com/media/iHcRqdoTI3MZO/giphy.gif"
]
    if(user.id === "724954937200607302" || user.id === "739604522112123001", user2.id === "739604522112123001" || user2.id === "724954937200607302") {
            let embed = new Discord.MessageEmbed()

          .setTitle(`:revolving_hearts:  **Hmm, temos um novo casal aqui?**  :revolving_hearts:`)
    
          .setDescription(`**${message.mentions.users.first().username}** e **${message.mentions.users.last().username}** tem **100%** de chance para dar certo!`)
          .setColor('#f72929')
          .setImage(cookies[Math.floor(Math.random() * cookies.length)])
                message.reply(embed)
    } else {
    let embed = new Discord.MessageEmbed()

          .setTitle(`:revolving_hearts:  **Hmm, temos um novo casal aqui?**  :revolving_hearts:`)
    
          .setDescription(`**${message.mentions.users.first().username}** e **${message.mentions.users.last().username}** tem **${numero}%** de chance para dar certo!`)
          .setImage(cookies[Math.floor(Math.random() * cookies.length)])
          .setFooter(message.guild.name + " - © 2021").setColor("#00ffff")
                message.reply(embed)
        }
}

exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'ship',
    aliases: ['shippar']
  };