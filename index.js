const Discord = require("discord.js")
const client = new Discord.Client();
/* 

      Carregando o arquivo de configuração

*/


let config = require("./config.json")

/*

      Configuração de Musica

*/

client.queue = new Discord.Collection()


/* 

      Configuração da Database

*/

const Database = require("./db/DatabaseLogin")
const Welcome = require("./db/WelcomeSystem");
const AutoRole = require("./db/AutoRoleSystem");
const AntiInvite = require("./db/AntiInviteSystem");
const Sugestion = require("./db/SugestionSystem");
const Logs = require("./db/LogsSystem");
const ip = require("./db/StatusSystem");
const Punish = require("./db/PunishSystem");
const ChannelComand = require("./db/ChannelCommandSystem")
const BlackList = require("./db/BlackListSystem")
const Ticket = require("./db/TicketSystem")
const Plugin = require("./db/PluginSystem")
const Captcha = require("./db/CaptchaSystem")

/* 

      Sistema de Carregar os Comandos.

*/


const fs = require("fs");

client.commands = new Discord.Collection();
 

client.aliases = new Discord.Collection();


fs.readdirSync('./comandos').forEach(dirs => {
    const commands = fs.readdirSync(`./comandos/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const props = require(`./comandos/${dirs}/${file}`);
        
        console.log(`Carregando o comando: ${props.help.name}`);
        client.commands.set(props.help.name, props);
        if(props.help.aliases) {
          props.help.aliases.forEach(aliases => {
            client.aliases.set(aliases, props.help.name)
          })
        }
    };
});

/* 

      Sistema de Alerta ao bot ser Ligado

*/


client.on("ready", () => {
    console.log(`
    Criador: uKoddy#0144
    Nome: ${client.user.tag}
    Id: ${client.user.id}
    
    Grupos: ${client.guilds.cache.size}
    Usuarios: ${client.users.cache.size}
    Canais: ${client.channels.cache.size}`)

    Database.authenticate().then(() => {
        console.log("[DataBase] CONECTADO COM SUCESSO!")
        AutoRole.init(Database).sync({force: true})
        Welcome.init(Database).sync({force: false})
        AntiInvite.init(Database).sync({force: false})
        Sugestion.init(Database).sync({force: false})
        Logs.init(Database).sync({force: false})
        ip.init(Database).sync({force: false})
        Punish.init(Database).sync({force: false})
        ChannelComand.init(Database).sync({force: false})
        BlackList.init(Database).sync({force: false})
        Ticket.init(Database).sync({force: false})
        Captcha.init(Database).sync({force: false})
        Plugin.init(Database).sync({force: false})
        
    }).catch(error => {
            console.error("[DataBase] Ocorreu um erro ao conectar na Database: " + error);
        })
    
        var tabela = [ // criando uma variavel, nomeada de tabela 

// uma notinha: toda vez que for criar uma nova presence na nossa tabela, bote uma vírgula no final!
        {name: 'Paz para o mundo', type: 'STREAMING', url: 'https://www.twitch.tv/KoddyDev'},
        {name: 'Use !ajuda', type: 'WATCHING'},
        {name: '#FiqueEmCasa', type: 'LISTENING'},
        {name: 'redetitanium.com', type: 'PLAYING'},
        {name: 'Desenvolvido por KoddyDev#0001', type: 'LISTENING'},
    ];

    function setStatus() { // nomeamos ela de: setStatus
        // agora, iremos criar um sistema randômico, alternando entre as opções que criamos para a tabela
        var altstatus = tabela[Math.floor(Math.random() * tabela.length)]
        client.user.setActivity(altstatus) // por fim, setando a presence. No caso, o jogo é a variavel que criamos 'altstatus'
    }
    setStatus(); // para finalizar, puxamos a function que criamos no inicio
    setInterval(() => setStatus(), 50000) // e adicionamos um intervalo entre as presences


})

/* 

      Sistema de AutoRole e Captcha

*/


client.on("guildMemberAdd", async member => {
    const findG = await AutoRole.findOne({
      where:{
        grupo: member.guild.id
      }
    })
    if(findG) {
      member.roles.add(findG.cargo)
    }
  }) 



/* 

      Sistema de Bem Vindo

*/

  client.on("guildMemberAdd", async (member) => {
      const guild = member.guild;
      console.log(guild)
    const findG = await Welcome.findOne({
      where:{
        grupo: member.guild.id
      }
    })
    if(findG) {
        var entrada = new Discord.MessageEmbed()
        .setTitle(`📨 Recepção | Rede Titanium `)
        .setDescription(`👋 Olá ${member.user.username}, seja bem vindo(a) ao 
**Discord Oficial** da **Rede Titanium**!

Fique por dentro de todas as regras 
do servidor para evitar **punições**! #diretrizes

IP para conexão: redetitanium.com
Link de acesso para a loja: https://loja.redetitanium.com/team`)
        .addField(`🎈 Ainda bem que você entou!`, `Com você, agora possuímos ${guild.members.cache.size} jogadores`) 
        .setColor("RANDOM")
        .setFooter(`${guild.name} - Discord Oficial`, guild.iconURL())
        .setThumbnail(member.user.displayAvatarURL())
        
        client.channels.cache.get(findG.canal).send(entrada)
    }
  }) 

/*

	Sistema de Captcha

*/

client.on('messageReactionAdd', async (reaction, user) => {

    const member = await reaction.message.guild.members.fetch(user.id)
    if(reaction.emoji.name === "✅") {
        const findG = await AutoRole.findOne({
      where:{
        grupo: reaction.message.guild.id
      }
    })
    if(!findG) {}
        const findG2 = await Captcha.findOne({where:{
            grupo: reaction.message.guild.id
        }})
        if(findG2) {
            if( reaction.message.channel.id === findG2.canal) {
                if(!member.roles.cache.has(findG2.cargo)) {
                    member.roles.add(findG2.cargo)
                }
            }
        }
    }
    }
})

/* 

      Sistema de Anti Invites

*/

client.on("message", async message => {
  let convite = /(discord.gg|discordapp.com)\/(invite)?/ig.test(message.content)
  if(convite === true) {
  const findG = await AntiInvite.findOne({where:{grupo: message.guild.id}, atribute: ['cargo']}) 
  if(findG){

  if(message.member.roles.cache.has(findG.cargo)){
return console.log('Ele tem permissão')
} else {
      message.delete()
  message.reply('Não pode divulgar convites de outros servidores aqui!!! 😡')}
}
  }
})

/* 

      Sistema de configuração

*/

client.on("message", async message => {
  let prefix = config.bot.prefix
  if (!message.content.startsWith(prefix)) return;
const findG = await ChannelComand.findOne({where:{grupo: message.guild.id}})
if(!findG) {

  //
  if(message.author.bot || message.channel.type === "dm") return;


  let args = message.content.slice(prefix.length).trim().split(/ +/)
  let cmd = args.shift().toLowerCase();
  if(cmd !== "config") return message.reply("O canal de comandos ainda não foi defindo. Chame algum staff e mande configurar o servidor utilizando o m.config.")
  let command;
  if (client.commands.has("config")) {
      command = client.commands.get("config")
  } else if (client.aliases.has("config")) {
      command = client.commands.get(client.aliases.get("configurar"))
  } else return

  try {
      command.run(client, message, args)
  } catch (err) {
      console.log(err)
  }
}
})


/*

      Sistema de BlackList

*/

client.on("guildCreate", async guild => {
  const findG = await BlackList.findOne({where: {grupo: guild.id }})

if(!findG) {
  return guild.owner.send("Você não está na BlackList!")
} else {
  guild.owner.send("Você está na BlackList! Para remover você da blacklist, basta me adicionar no discord, uKoddy#0144.")
  guild.leave()

}

})

/* 

    Sistema de Usar comandos no canal principal

*/


client.on("message", async (message) => {
  let prefix = config.bot.prefix
  if (!message.content.startsWith(prefix)) return;
  const findG = await ChannelComand.findOne({where:{grupo: message.guild.id}})
  if(findG) {
  //
   
  if(message.author.bot || message.channel.type === "dm") return;
  let args = message.content.slice(prefix.length).trim().split(/ +/)
  let cmd = args.shift().toLowerCase()
  
  let command;
  if (client.commands.has(cmd)) {
      command = client.commands.get(cmd)
  } else if (client.aliases.has(cmd)) {
      command = client.commands.get(client.aliases.get(cmd))
  } else return


  if(message.channel.id === findG.canal || message.channel.id === findG.canalstf || message.member.hasPermission('ADMINISTRATOR')) {

    try {
        command.run(client, message, args)
    } catch (err) {
        console.log(err)
    }    
  } else message.reply("Você não pode executar comandos aqui bobinho.")}
})

/** 

Sistema de Ticket

*/

client.on('messageReactionAdd', async (reaction, user) => {
	if (user.bot) return;
	const message = reaction.message;
	 if(reaction.emoji.name === '🎮') {
        let findTicket = await Ticket.findOne({ where: { authorId: user.id, resolved: false }}).catch(err => console.log(err));
        if(findTicket) {
            user.send("Já tens um ticket aberto!");
        }
        else {
            console.log("A criar o ticket.")
            try {
                
                console.log("Criando o ticket.");
                                
                console.log("Ticket salvo...");
                
                let permsToHave = ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'ADD_REACTIONS']
                let channel = await reaction.message.guild.channels.create(`ticket`, {
                    type: 'text',
                    parent: "817973960758001744",
                    topic: 'Categoria: **Tecnico**',
                    permissionOverwrites:[
          {
            deny: 'VIEW_CHANNEL',
            id: message.guild.id
          },
          {
            allow: permsToHave,
            id: user.id
          },
          {
            allow: permsToHave,
            id: "809745104741859338"
          },
        ],
                })
                
                
                                 // Create Embed Message and send it to channel.
                let tec = new Discord.MessageEmbed()
                .setTitle(`Ticket`)
                .setDescription("Olá! \n\n ⚬ Aguarde um membro da nossa equipe comparecer.\n⚬ Tema do Ticket: **Técnico** ⚬ Nossa horário de atendimento é de - 8h30min as 18:30min \n\n **OBS: Podemos atender fora do horario, mas terá que esperar**.")
                .setColor("#00FF4D")
                .setTimestamp()
                .setFooter("UnderTicket's").setTimestamp()

                let te = await channel.send(tec);

                te.pin()
                let newTicket = await Ticket.create({
                    authorId: user.id,
                    channelId: channel.id,
                    guildId: reaction.message.guild.id,
                    resolved: false,
                    closeMessageId: tec.id
                });
                console.log("Ticket salvo...");
                let ticketId = String(newTicket.dataValues.ticketId).padStart(4, "0");
                await channel.setParent('817973960758001744')
                await channel.edit({ name: `${channel.name}-${ticketId}`, 
                                    permissionOverwrites:[
          {
            deny: 'VIEW_CHANNEL',
            id: message.guild.id
          },
          {
            allow: permsToHave,
            id: user.id
          },
          {
            allow: permsToHave,
            id: "809745104741859338"
          },
        ]
                                   });
                                                await te.react('❌');
             let filtro = (reactione, usuario) => reactione.emoji.name === "❌" && usuario.id !== message.client.user.id;
            const coletor = te.createReactionCollector(filtro);
            coletor.on("collect", ap => {
            channel.send("O canal será deletado em 5 segundos!")
            setTimeout(() => {
                channel.delete();
                newTicket.destroy()
                }, 5000) 
            })
            }
            catch(ex) {
                console.log(ex);
            } 
        }
    }     
    if(reaction.emoji.name === '💰') {
        let findTicket = await Ticket.findOne({ where: { authorId: user.id, resolved: false }}).catch(err => console.log(err));
        if(findTicket) {
            user.send("Já tens um ticket aberto!");
        }
        else {
            console.log("A criar o ticket.")
            try {
                
                console.log("Criando o ticket.");
                                
                console.log("Ticket salvo...");
                
                let permsToHave = ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'ADD_REACTIONS']
                let channel = await reaction.message.guild.channels.create(`ticket`, {
                    type: 'text',
                    parent: "817973960758001744",
                    topic: 'Categoria: **Financeiro**',
                    permissionOverwrites:[
          {
            deny: 'VIEW_CHANNEL',
            id: message.guild.id
          },
          {
            allow: permsToHave,
            id: user.id
          },
          {
            allow: permsToHave,
            id: "809745104741859338"
          },
        ],
                })
                
                
                                 // Create Embed Message and send it to channel.
                let tec = new Discord.MessageEmbed()
                .setTitle(`Ticket`)
                .setDescription("Olá! \n\n ⚬ Aguarde um membro da nossa equipe comparecer.\n⚬ Tema do Ticket: ***Financeiro* ⚬ Nossa horário de atendimento é de - 8h30min as 18:30min \n\n **OBS: Podemos atender fora do horario, mas terá que esperar**.")
                .setColor("#00FF4D")
                .setTimestamp()
                .setFooter("UnderTicket's").setTimestamp()

                let te = await channel.send(tec);

                te.pin()
                let newTicket = await Ticket.create({
                    authorId: user.id,
                    channelId: channel.id,
                    guildId: reaction.message.guild.id,
                    resolved: false,
                    closeMessageId: tec.id
                });
                console.log("Ticket salvo...");
                let ticketId = String(newTicket.dataValues.ticketId).padStart(4, "0");
                await channel.setParent('817973960758001744')
                await channel.edit({ name: `${channel.name}-${ticketId}`, 
                                    permissionOverwrites:[
          {
            deny: 'VIEW_CHANNEL',
            id: message.guild.id
          },
          {
            allow: permsToHave,
            id: user.id
          },
          {
            allow: permsToHave,
            id: "809745104741859338"
          },
        ]
                                   });
                                                await te.react('❌');
             let filtro = (reactione, usuario) => reactione.emoji.name === "❌" && usuario.id !== message.client.user.id;
            const coletor = te.createReactionCollector(filtro);
            coletor.on("collect", ap => {
            channel.send("O canal será deletado em 5 segundos!")
            setTimeout(() => {
                channel.delete();
                newTicket.destroy()
                }, 5000) 
            })
            }
            catch(ex) {
                console.log(ex);
            } 
        }
    }              
})
  
/** 

AfterCreate

*/

client.on('message', async msg => {
await Plugin.beforeCreate(async id => {
 const findP = await Plugin.findOne({where:{id: id}})
 if(findP) {

                                    const newplugin = new Discord.MessageEmbed()
                                        .setTitle(`🔔 ${findP.pluginName}`)
                                        .setColor("#c5770f")
                                        .setThumbnail("https://cdn.discordapp.com/attachments/790392322768240682/793604580553654272/ideapl2.png")
                                        .setDescription(`**Nome:** \n${findP.pluginName}`)
                                        .addField("Link", `${findP.download}`, true)
                                        .addField("Valor", `${findP.valor}`, true)
     									.addField("Versão:", `${findP.version}`)
                                    client.channels.cache.get('809744091616116739').send("@everyone",newplugin)
 }
});
})

client.login(config.bot.token)