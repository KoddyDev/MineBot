let Discord = require("discord.js")
let superagent = require("superagent")
let Status = require("../../db/StatusSystem")
exports.run = async (client, message, args) => {
let findG = Status.findOne({where:{grupo: message.guild.id}})
if(findG) {
    superagent.get('https://api.mcsrvstat.us/2/'+fingG.ip) ////// <- Coloque o IP do seu servidor 
    .end((err, response) => {
       
      let ping = response.body.ping
        let online1 = '🎉 Sim!'
        let offline1 = '😢 Não!'



        let On = response.body.online ? online1 : offline1




            let embed = new Discord.MessageEmbed()
            .setTitle("✨ | IP do Servidor")
            .addField("🌹 **IP**", "`"+fingG.ip+"`")
            .addField("🐱‍🐉 **Status**", On, true)
            .setThumbnail(message.guild.iconURL())
            .setFooter(message.guild.name + " - © 2021")
     if(On === online1 ){  
             let version1 = '🎂 Não disponível!'
        let version2 = response.body.version
        let Versionn = response.body.version ? version2 : version1
        let online = response.body.players.online
                let maximo = response.body.players.max     
     embed.addField("🐱‍🏍 **Membros Online**", online+"/"+maximo, true)
     embed.addField("🎈 **Versão**", Versionn, true)
            }
            embed.setColor("#FF0000")
            message.reply(embed).then(msg => {
                msg.react("🔁")
                let filter = (reaction, user, ) => reaction.emoji.name === "🔁" && user.id !== client.user.id
                let coletor = msg.createReactionCollector(filter)
                coletor.on('collect', r2 => {
                     embed = new Discord.MessageEmbed()
                    .setTitle("✨ | IP do Servidor")
                    .addField("🌹 **IP**", "`RedeSkull.com`")
                    .addField("🐱‍🐉 **Status**", On, true)

                    .setThumbnail(message.guild.iconURL())
                    .setColor("#FF0000")
                                        if(On === online1) {
                                                let version1 = '🎂 Não disponível!'
        let version2 = response.body.version
        let Versionn = response.body.version ? version2 : version1
        let online = response.body.players.online
                let maximo = response.body.players.max
     embed.addField("🐱‍🏍 **Membros Online**", online+"/"+maximo, true)
     embed.addField("🎈 **Versão**", Versionn, true)
                    }

                    msg.edit(embed)
                })
            })
         })


        } else {
          message.reply("Comando desativado!")
        }

}
exports.help = {
    'name': 'ip',
    'aliases': ['status']
  }