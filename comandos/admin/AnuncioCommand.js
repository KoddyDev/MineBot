const Discord = require("discord.js")

module.exports.help = {
    'name': 'anuncio',
    'aliases': ['anunciar']
  }


exports.run = async (client, message, args) => {
if(!message.member.hasPermission('ADMINISTRATOR')){
        message.reply("**Você não tem permissão.**")
    } else {
    message.channel.send('**Em qual canal você deseja enviar o anúncio?**').then(msg1 => {
        let c1 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
        .on('collect', c => {
          msg1.delete();
          message.delete();
            let canal = c.mentions.channels.first()
 c.delete()
            if(!canal || !message.guilds.channels.cache.get(canal.id)){
                message.channel.send('**Este canal não existe.**')
            } else {
 
                message.channel.send('<:Seta_direita:774826597135155200> **Qual é o título do anúncio?**').then(msg2 => {
                    let c2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                    .on('collect', c => {
                        let titulo = c.content
                        if(titulo == "Cancelar" || titulo === "cancelar") return message.reply("**Cancelado!**")
                        msg2.delete();
                        c.delete()
                      message.delete();
 
                        message.channel.send('<:Identidade:774713882681278485> **Qual é o anúncio?**').then(msg3 => {
                            let c3 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                            .on('collect', c => {
                               let anuncio = c.content
                               if(anuncio == "Cancelar" || anuncio === "cancelar") return message.reply("**Cancelado!**")
                               msg3.delete();
                                c.delete()
                              message.delete();
                              message.channel.send('**Mencionar todos?** R: Sim/Não').then(msg4 => {
                            let c4 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                            .on('collect', c => {
                               let mencionar = c.content
                               if(mencionar == "Cancelar" || mencionar === "cancelar") return message.reply("**Cancelado!**")
                                c.delete()
                               msg4.delete();
                              message.delete();
-
                        message.channel.send('**Anúncio enviado com sucesso!**')
  
                                let embed = new Discord.MessageEmbed()
                                
                                .setTimestamp()
                                .setThumbnail(message.guild.iconURL())
                                .setTitle(titulo)
                                .setColor('#ff6703')
                                .setDescription(anuncio)
                                .setFooter(message.guild.name + " - © 2021")
                                client.guilds.cache.get(message.guild.id).channels.cache.get(canal.id).send(embed)
if(mencionar == "Sim") {
                                client.guilds.cache.get(message.guild.id).channels.cache.get(canal.id).send("@here").then(msgg => {
                                msgg.delete()
                              })
}

                            })
                            
                        
                    
                
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
