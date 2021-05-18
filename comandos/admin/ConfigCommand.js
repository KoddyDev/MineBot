const Discord = require("discord.js");

const Welcome = require("../../db/WelcomeSystem");
const AutoRole = require("../../db/AutoRoleSystem");
const AntiI = require("../../db/AntiInviteSystem");
const Sugestion = require("../../db/SugestionSystem");
const Logs = require("../../db/LogsSystem");
const Status = require("../../db/StatusSystem");
const Punish = require("../../db/PunishSystem");
const CommandChannel = require("../../db/ChannelCommandSystem")
const Captcha = require("../../db/CaptchaSystem")
module.exports.help = {
'name': 'config',
'aliases': ['configurar', 'configuration']
}


exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')){
        message.reply("**Você não tem permissão.**")
    } else {
    const embed = new Discord.MessageEmbed()
    .setTitle("🎈 | Configuração do Servidor")
    .setDescription(`
    **Sistema de Bem Vindo** - ✨
    **Sistema de Auto Role** - ❤
    **Sistema de Anti-Invite** - 👻
    **Sistema de Sugestão** - 🛑
    **Sistema de Logs** - 🧨
    **Sistema de IP + Status ** - 🥓
    **Sistema de Punição** - 🍒
    **Sistema de Canal de Comandos** -  🤖
	**Sistema de Captcha** - 😍`)
    .setFooter(message.guild.name + " - © 2021").setColor("#00ffff")
    
    message.reply(embed).then(async msg => {
        msg.react("✨")
        msg.react("❤")
        msg.react("👻")
        msg.react("🛑")
        msg.react("🧨")
        msg.react("🥓")
        msg.react("🍒")
        msg.react("🤖")
        msg.react("😍")

        const WelcomeF = (reaction, user, ) => reaction.emoji.name == ("✨") && user.id === message.author.id;
        const AutoRoleF = (reaction, user, ) => reaction.emoji.name == ("❤") && user.id === message.author.id;
        const AntiIF = (reaction, user, ) => reaction.emoji.name == ("👻") && user.id === message.author.id;
        const SugestionF = (reaction, user, ) => reaction.emoji.name == ("🛑") && user.id === message.author.id;
        const LogsF = (reaction, user, ) => reaction.emoji.name == ("🧨") && user.id === message.author.id;
        const StatusF = (reaction, user, ) => reaction.emoji.name == ("🥓") && user.id === message.author.id;
        const PunishF = (reaction, user, ) => reaction.emoji.name == ("🍒") && user.id === message.author.id;
        const CommandF = (reaction, user, ) => reaction.emoji.name == ("🤖") && user.id === message.author.id;
        const CaptchaF = (reaction, user, ) => reaction.emoji.name == ("😍") && user.id === message.author.id;
        
        const WelcomeC = msg.createReactionCollector(WelcomeF)
        const AutoRoleC = msg.createReactionCollector(AutoRoleF);
        const AntiIC = msg.createReactionCollector(AntiIF);
        const SugestionC = msg.createReactionCollector(SugestionF);
        const LogsC = msg.createReactionCollector(LogsF);
        const StatusC = msg.createReactionCollector(StatusF);
        const PunishC = msg.createReactionCollector(PunishF);
        const ComandC = msg.createReactionCollector(CommandF);
        const CaptchaC = msg.createReactionCollector(CaptchaF);

WelcomeC.on("collect", async r2 => {
            message.channel.send('**Qual é o canal? **').then(async sg2 => {

                let c2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                .on('collect', async c => {
                    
                    const channel = c.mentions.channels.first();
                    if(!channel) return message.reply("Insira um canal!")
                    if(!message.guild.channels.cache.get(channel.id)) return message.reply("Canal Invalido") && msg2
        const findG = await Welcome.findOne({where:{grupo: message.guild.id}})
        if(!findG) {
            Welcome.create({
                grupo: message.guild.id,
                canal: channel.id
            })
            message.reply("✔ O Sistema de Bem Vindo foi ligado com sucesso!")
        } else {
            findG.update({
                canal: channel.id
            })
            message.reply("✔ O Sistema de Bem Vindo foi alterado com sucesso!")

            
        }
                })
        
    })
    return;
});

CaptchaC.on("collect", async r2 => {
            message.channel.send('**Qual é o cargo para dar? **').then(async msg2 => {

                let c2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                .on('collect', async c => {
                    
                    const role = c.mentions.roles.first();
                    
                    if(!role) return message.reply("Insira um cargo!")
                    if(!message.guild.roles.cache.has(role.id)) return message.reply("Cargo Invalido") && c2
                                message.channel.send('**Qual é o canal? **').then(async msg2 => {

                                    let c2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                .on('collect', async c => {
                    var channel = c.mentions.channels.first()
                                        if(!channel) return message.reply("Insira um canal!")
                    if(!message.guild.channels.cache.get(channel.id)) return message.reply("Canal Invalido")
        const findG = await Captcha.findOne({where:{grupo: message.guild.id}})
        if(!findG) {
            Captcha.create({
                grupo: message.guild.id,
                cargo: role.id, 
                canal: channel.id
            })
            message.reply("✔ O Sistema de Captcha foi ligado com sucesso!")
        } else {
            findG.update({
                canal: channel.id
            })
            message.reply("✔ O Sistema de Captcha foi editado com sucesso!")

            
        }
                })
        
    })
                                    })
        
    })
    return;
});

        
AutoRoleC.on("collect", async r2 => {
    message.channel.send('**Qual é o cargo? **').then(async msg2 => {
        
        let c2 = message.channel.createMessageCollector(async  x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
        .on('collect', async c => {
            const role = c.mentions.roles.first()
            if(!role) return message.reply("Insira um cargo!")
            if(!message.guild.roles.cache.get(role.id)) return message.reply("❌ - Cargo invalido.")
            const findG = await AutoRole.findOne({where:{grupo: message.guild.id}})
            if(!findG) {
                AutoRole.create({
                    grupo: message.guild.id,
                    cargo: role.id
                })
                message.reply("✔ O Sistema de AutoRole foi ligado com sucesso!")
            } else {
                findG.update({
                    cargo: role.id
                })
                message.reply("✔ O Sistema de AutoRole foi alterado com sucesso!")
    
                
            }
            
})
    })
    return;
});

AntiIC.on("collect", async r2 => {
    message.channel.send('**Qual é o cargo? **').then(async msg2 => {
        let c2 = message.channel.createMessageCollector(async  x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
        .on('collect', async c => {
            const cargo = c.mentions.roles.first()
            if(!cargo) return message.reply("Insira um cargo!") && c2
            if(!message.guild.roles.cache.get(cargo.id)) return message.reply("❌ - Cargo invalido.") 
            const findG = await AntiI.findOne({where:{grupo: message.guild.id}})
            if(!findG) {
                await AntiI.create({
                    grupo: message.guild.id,
                    cargo: cargo.id
                })
                message.reply("✔ O Sistema de AntiInvite foi ligado com sucesso! Somente o Cargo <@&"+cargo.id+"> poderá enviar invites.")
            } else {
                await findG.update({
                    cargo: cargo.id
                })
                message.reply("O Sistema de AntiInvite foi ligado com sucesso! Somente o Cargo <@&"+cargo.id+"> poderá enviar invites.")
    
                
            }
            
})
    })
    return;
});

SugestionC.on("collect", async r2 => {
    message.channel.send('**Qual é o canal? **').then(async msg2 => {
        let c2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
        .on('collect', async c => {
            const channel = c.mentions.channels.first();
            if(!channel) return message.reply("Insira um canal!")
            if(!message.guild.channels.cache.get(channel.id)) return message.reply("Canal Invalido") && msg2
const findG = await Sugestion.findOne({where:{grupo: message.guild.id}})
if(!findG) {
    Sugestion.create({
        grupo: message.guild.id,
        canal: channel.id
    })
    message.reply("✔ O Sistema de Sugestão foi ligado com sucesso!")
} else {
    findG.update({
        canal: channel.id
    })
    message.reply("✔ O Sistema de Bem Vindo foi alterado com sucesso!")

    
}
        })

})
return;
});

LogsC.on("collect", async r2 => {
    message.channel.send('**Qual é o canal? **').then(msg2 => {
        let c2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
        .on('collect', async c => {
            const channel = c.mentions.channels.first();
            if(!channel) return message.reply("Insira um canal!")
            if(!message.guild.channels.cache.get(channel.id)) return message.reply("Canal Invalido") && msg2
const findG = await Logs.findOne({where:{grupo: message.guild.id}})
if(!findG) {
    await Logs.create({
        grupo: message.guild.id,
        canal: channel.id
    })
    message.reply("✔ O Sistema de Logs foi ligado com sucesso!")
} else {
   await findG.update({
        canal: channel.id
    })
    message.reply("✔ O Sistema de Logs foi alterado com sucesso!")

    
}
        })

})
return;
});

StatusC.on("collect", async r2 => {
    message.channel.send('**Qual é o ip? **').then(msg2 => {
        let c2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
        .on('collect', async c => {
            const ip = c.content
            if(!ip) return message.reply("Insira um ip!") && c2
            const findG = await Status.findOne({where:{grupo: message.guild.id}})
if(!findG) {
    Status.create({
        grupo: message.guild.id,
        ip: ip
    })
    message.reply("✔ O Sistema de IP + Status foi ligado com sucesso!")
} else {
    findG.update({
        grupo: message.guild.id,
        ip: ip
    })
    message.reply("✔ O Sistema de IP + Status foi alterado com sucesso!")

    
}
        })

})
return;
});

PunishC.on("collect", r2 => {
    message.channel.send('**Qual é o canal? **').then(msg2 => {
        let c2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
        .on('collect', async c => {
            const channel = c.mentions.channels.first();
            if(!channel) return message.reply("Insira um canal!")
            if(!message.guild.channels.cache.get(channel.id)) return message.reply("Canal Invalido") && msg2
const findG = await Punish.findOne({where:{grupo: message.guild.id}})
if(!findG) {
    Punish.create({
        grupo: message.guild.id,
        canal: channel.id
    })
    message.reply("✔ O Sistema de Punição foi ligado com sucesso!")
} else {
    findG.update({
        canal: channel.id
    })
    message.reply("✔ O Sistema de Punição foi alterado com sucesso!")

    
}
        })

})
return;
});

ComandC.on("collect", async r2 => {
    message.channel.send('**Qual é o canal de Comandos? **').then(async msg2 => {

        let c1 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
        .on('collect', async c => {
            
            const channel2 = c.mentions.channels.first();
            if(!channel2) return message.reply("Insira um canal!")
            if(!message.guild.channels.cache.get(channel2.id)) return message.reply("Canal Invalido") && msg2
            message.channel.send('**Qual é o canal de Comandos Staff? **').then(async msg3 => {

        let c2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
        .on('collect', async c => {
            
            const channel = c.mentions.channels.first();
            if(!channel) return message.reply("Insira um canal!") && msg3
            if(!message.guild.channels.cache.get(channel.id)) return message.reply("Canal Invalido") && msg3
const findG = await CommandChannel.findOne({where:{grupo: message.guild.id}})
if(!findG) {
    CommandChannel.create({
        grupo: message.guild.id,
        canal: channel2.id,
        canalstf: channel.id
    })
    message.reply("✔ O Sistema de Comandos por Chat foi ligado com sucesso!")
} else {
    findG.update({
        canal: channel.id,
        canalstf: channel2.id
    })
    message.reply("✔ O Sistema de Comandos por Chat foi alterado com sucesso!")

    
}
})
})

})
return;
});
});
    });
}



}
