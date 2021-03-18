module.exports.help = {
    'name': 'plugin',
    'alias': ['new']
}
const Discord = require("discord.js")
const Plugin = require("../../db/PluginSystem")
exports.run = async (client, message, args) => {
 
    message.delete()
    
    if (!message.member.hasPermission(['MANAGE_MESSAGES'])) { return message.channel.send('> [IdeaStore] Você precisa de permissão `Gerenciar Mensagens`').then(message => setTimeout(() => message.delete(), 9900)) }

        await message.author.createDM()
    message.channel.send(`${message.author}, é feito no privado, te chamei lá!`).then(message => setTimeout(() => message.delete(), 5000))
    const embed = new Discord.MessageEmbed()
        .setDescription('🔔 Olá, aqui é onde poderá anunciar um novo plugin ou update de tal. \n \n  📌 Atenção, ao escrever \`continuar`\ irá passar para a fase seguinte. \n Para cancelar escreva \`cancelar`\.')
        .setColor("#c5770f")
        .setTimestamp()
        .setFooter('© UnderPlugins - Todos os direitos reservados.', 'https://cdn.discordapp.com/attachments/739459895841259673/777311140266901564/arodevs3.png')
    message.author.send(embed)

    var main = message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, {
        time: 100000 * 50,
        max: 1
    })

    main.on('collect', a => {

        if (a.content.toLowerCase() === "cancelar") return message.author.send('> Anuncio de um novo plugin cancelado.');



        if (a.content.toLowerCase() === "cancelar") return message.author.send('> Anuncio de um novo plugin cancelado.');
        if(a.content.toLowerCase() === "continuar") {
            var prg33 = message.author.dmChannel.createMessageCollector(b => b.author.id == message.author.id, {
            time: 100000 * 50,
            max: 1
        })
            prg33.on('collect', sla => {
        const pergun1 = new Discord.MessageEmbed()
            .setColor("#c5770f")
            .setDescription(`**#1 - Qual é o nome do plugin?**`)
            .setFooter('Para cancelar digite "cancelar" no chat.', 'https://cdn.discordapp.com/attachments/739459895841259673/777311140266901564/arodevs3.png')
        message.author.send(pergun1)
                
        var prg2 = message.author.dmChannel.createMessageCollector(b => b.author.id == message.author.id, {
            time: 100000 * 50,
            max: 1
        })

        prg2.on('collect', b => {
            if (b.content.toLowerCase() === "cancelar") return message.author.send('> [UnderPlugins] Anuncio de um novo plugin cancelado.');
            let n1 = b.content
            const pergun2 = new Discord.MessageEmbed()
                .setColor("#c5770f")
                .setDescription(`**#2 - Qual a versão do plugin?**`)
                .setFooter('Para cancelar digite "cancelar" no chat.', 'https://cdn.discordapp.com/attachments/739459895841259673/777311140266901564/arodevs3.png')
            message.author.send(pergun2)

            var prg3 = message.author.dmChannel.createMessageCollector(c => c.author.id == message.author.id, {
                time: 100000 * 50,
                max: 1
            })

            prg3.on('collect', c => {
                if (c.content.toLowerCase() === "cancelar") return message.author.send('> [UnderPlugins] Anuncio de um novo plugin cancelado.');
                let n2 = c.content
                const pergun3 = new Discord.MessageEmbed()
                    .setColor("#c5770f")
                    .setDescription(`**#3 - Qual a descrição?**`)
                    .setFooter('Para cancelar digite "cancelar" no chat.', 'https://cdn.discordapp.com/attachments/739459895841259673/777311140266901564/arodevs3.png')
                message.author.send(pergun3)

                var prg4 = message.author.dmChannel.createMessageCollector(d => d.author.id == message.author.id, {
                    time: 100000 * 50,
                    max: 1
                })

                prg4.on('collect', d => {
                    if (d.content.toLowerCase() === "cancelar") return message.author.send('> [UnderPlugins] Anuncio de um novo plugin cancelado.');
                    let n3 = d.content
                    const pergun4 = new Discord.MessageEmbed()
                        .setColor("#c5770f")
                        .setDescription(`**#4 - Qual o preço?**`)
                        .setFooter('Para cancelar digite "cancelar" no chat.','https://cdn.discordapp.com/attachments/739459895841259673/777311140266901564/arodevs3.png')
                    message.author.send(pergun4)

                    var prg5 = message.author.dmChannel.createMessageCollector(e => e.author.id == message.author.id, {
                        time: 100000 * 50,
                        max: 1
                    })

                    prg5.on('collect', e => {
                        if (e.content.toLowerCase() === "cancelar") return message.author.send('> [UnderPlugins] Anuncio de um novo plugin cancelado.');
                        let n4 = e.content
                        const pergun5 = new Discord.MessageEmbed()
                            .setColor("#c5770f")
                            .setDescription(`**#5 - E por ultimo, o link para download**`)
                            .setFooter('Para cancelar digite "cancelar" no chat.', 'https://cdn.discordapp.com/attachments/739459895841259673/777311140266901564/arodevs3.png')
                        message.author.send(pergun5)

                        var prg6 = message.author.dmChannel.createMessageCollector(f => f.author.id == message.author.id, {
                            time: 100000 * 50,
                            max: 1
                        })

                        prg6.on('collect', f => {
                            if (f.content.toLowerCase() === "cancelar") return message.author.send('> [UnderPlugins] Anuncio de um novo plugin cancelado.');
                            let n5 = f.content
                            const plugin = new Discord.MessageEmbed()
                                .setColor("#c5770f")
                                .setDescription(`**#6 - Escolha uma das opções, \`novo\` ou \`update\`**`)
                                .setFooter('Para cancelar digite "cancelar" no chat.','https://cdn.discordapp.com/attachments/739459895841259673/777311140266901564/arodevs3.png')
                            message.author.send(plugin)

                            var teste = message.author.dmChannel.createMessageCollector(h => h.author.id == message.author.id, {
                                time: 100000 * 50,
                                max: 1
                            })

                            teste.on('collect', async h => {
                                const update = new Discord.MessageEmbed()
                                    .setTitle(`🔔 ${n1}`)
                                    .setColor("#c5770f")
                                    .setThumbnail("https://cdn.discordapp.com/attachments/790392322768240682/793604580553654272/ideapl2.png")
                                    .setDescription(`**Nome:** ${n1} ${n2}`)
                                    .addField("Descrição", `${n3}`, true);

                                    const newplugin = new Discord.MessageEmbed()
                                        .setTitle(`🔔 ${n1}`)
                                        .setColor("#c5770f")
                                        .setThumbnail("https://cdn.discordapp.com/attachments/790392322768240682/793604580553654272/ideapl2.png")
                                        .setDescription(`**Nome:** \n${n1}`)
                                        .addField("Link", `${n5}`, true)
                                        .addField("Valor", `${n4}`, true);
                                if(!h.content.toLowerCase() === "cancelar" && !message.h.content === "novo" && !message.h.content === "update") message.author.send("[UnderPlugins] Escolha `novo` ou `update`")
                                if(h.content.toLowerCase() === "novo") {
                                    const find = await Plugin.findOne({where: {pluginName: n1}})
		if(find) {
           find.update({          
                autorId: message.author.id,
      	  		pluginName: n1,
               valor: n4,
          		download: n5
           		})
                                } else {
       await Plugin.create({
                autorId: message.author.id,
      	  		pluginName: n1,
               valor: n4,
          		download: n5
                                    })
                                } client.channels.cache.get('809744091616116739').send("@everyone",newplugin) }
                                if(h.content.toLowerCase() === "update") {const find = await Plugin.findOne({where: {pluginName: n1}})
		if(find) {
           find.update({          
                autorId: message.author.id,
      	  		pluginName: n1,
               valor: n4,
          		download: n5
           		})
                                } else {
       await Plugin.create({
          autorId: message.author.id,
      	  pluginName: n1,
          version: n2,
          download: n5
                                    })
                                } client.channels.cache.get('783420896689651763').send("@everyone",update) }
                                const pergun6 = new Discord.MessageEmbed()
                                    .setColor("#c5770f")
                                    .setDescription(`> [UnderPlugins] O plugin foi submetido com sucesso.`)
                                message.author.send(pergun6)
                            })
                    })
                })
            })
                })
        })
        })
        }
                if(!a.content.toLowerCase() === "cancelar" && !message.a.content === "continuar") message.author.send("[UnderPlugins] Escolha `continuar` ou `cancelar`")
})
}
           
    
