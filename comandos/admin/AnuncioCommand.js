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
            if(!canal || !message.guild.channels.cache.get(canal.id)){
                message.channel.send('**Este canal não existe.**')
            } else {
 message.reply('Verifique seu Privado')
                message.author.send('**Qual é o título do anúncio?**').then(msg2 => {
                    let c2 = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                    .on('collect', c => {
                        let titulo = c.content
                        if(titulo == "Cancelar" || titulo.toLowerCase() === "cancelar") return message.reply("**Cancelado!**")
                        msg2.delete();
                        c.delete()
                      message.delete();
 
                        message.author.send('**Qual é o anúncio?**').then(msg3 => {
                            let c3 = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                            .on('collect', c => {
                               let anuncio = c.content
                               if(anuncio.toLowerCase() == "Cancelar" || anuncio.mencionar.toLowerCase() === "cancelar") return message.reply("**Cancelado!**")
                               msg3.delete();
                                c.delete()

                              message.author.send('**Mencionar todos?** R: Sim/Não').then(msg4 => {
                            let c4 = message.author.dmChannel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                            .on('collect', c => {
                               let mencionar = c.content
                               if(mencionar == "Cancelar" || mencionar === "cancelar") return message.reply("**Cancelado!**")
                                c.delete()
                               msg4.delete();
                        message.author.send('**Anúncio enviado com sucesso!**')
  
                                let embed = new Discord.MessageEmbed()
                                
                                .setTimestamp()
                                .setThumbnail(message.guild.iconURL())
                                .setTitle(titulo)
                                .setColor('#ff6703')
                                .setDescription(anuncio)
                                .setFooter(message.guild.name + " - © 2021").setColor("#00ffff")
                                client.guilds.cache.get(message.guild.id).channels.cache.get(canal.id).send(embed)
if(mencionar.toLowerCase() == "sim") {
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
