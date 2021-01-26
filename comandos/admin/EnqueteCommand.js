const Discord = require("discord.js")

module.exports.help = {
    'name': 'enquete',
    'aliases': ['perguntar']
  }

exports.run = (client, message, args) => {
if(!message.member.hasPermission('ADMINISTRATOR')){
        message.reply("**você não tem permissão.**")
    } else {
    message.channel.send('**Em qual canal você deseja enviar a enquete?**').then(msg1 => {
        let c1 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
        .on('collect', c => {
          msg1.delete();
            let canal = c.mentions.channels.first()
 
            if(!canal){
                message.channel.send('**Este canal não existe.**')
              
            } else {
 
                message.channel.send('**Qual o título para a Enquete??**').then(msg2 => {
                    let c2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                    .on('collect', c => {
                        let titulo = c.content
                        msg2.delete();
 
                        message.channel.send('**Qual é a Enquete?**').then(msg3 => {
                            let c3 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                            .on('collect', c => {
                               let anuncio = c.content
                               msg3.delete();
                                message.channel.send('**Enquete enviada com sucesso!**')
 
                                let embed = new Discord.MessageEmbed()
                                .setTimestamp()
                                .setThumbnail(client.user.displayAvatarURL)
                                .setTitle(titulo)
                                .setColor('#ff6703')
                                .setDescription(anuncio)
                                .setFooter(`Enquete enviada por por: ${message.author.username}`, message.author.displayAvatarURL())
                                client.guilds.cache.get(message.guild.id).channels.cache.get(canal.id).send(embed).then(msg => {
                                  msg.react("✔")
                                  msg.react("❌")
                                  
                                })
                                })
                            })
                        })
                    })
                }
            })
        })
    }
}
