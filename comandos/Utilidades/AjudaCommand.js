const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const config = require("../../config.json")

exports.help = {
  'name': 'ajuda',
  'aliases': ['comandos', 'help']
}


exports.run = (client, message, args) => { // setando as bases
  // avisando sobre a embed de ajuda na DM

    let embed = new Discord.MessageEmbed()
 
    .setTitle(`Central de Ajuda`)
    .setColor("#1482ff")
    .setDescription('`Clique no emoji para abrir a categoria` \n\n👮 **Comandos de Developer** \n🔧 **Comandos de utilidade** \n🎊 **Comandos de diversão**\n🎶 **Comandos de Musica**') 
                          .setFooter(message.guild.name + " - © 2021").setColor("#00ffff").setTimestamp()
    message.channel.send(embed).then(msg => { // evento para reagir a mensagem
  msg.react('👮').then(r => { // moderação
            msg.react('🔧') //utilidade
            msg.react('🎊') //diversão
    msg.react('🎶')

        // filtros de cada reação, para configurar a informação do autor
        const UtilidadesFilter = (reaction, user, ) => reaction.emoji.name === '🔧' && user.id === message.author.id;
        const ModeraçãoFilter = (reaction, user, ) => reaction.emoji.name === '👮' && user.id === message.author.id;
        const DiversãoFilter = (reaction, user, ) => reaction.emoji.name === '🎊' && user.id === message.author.id;
        const MusicFilter = (reaction, user, ) => reaction.emoji.name === '🎶' && user.id === message.author.id;
    
// coletores de cada reação, para ver confirmar tal membro  

        const Utilidades = msg.createReactionCollector(UtilidadesFilter);
        const Moderação = msg.createReactionCollector(ModeraçãoFilter);
        const Diversão = msg.createReactionCollector(DiversãoFilter);
        const Musica = msg.createReactionCollector(MusicFilter);


        Utilidades.on('collect', r2 => { // criando um evento, caso o membro clique nessa reação, e todos são iguais!
    

embed = new Discord.MessageEmbed() 
                .setTitle("🔧 | Utilidade")
                .addField(`\`${config.bot.prefix}enquete\``, `Envia uma enquete em algum canal`)
                .addField(`\`${config.bot.prefix}anuncio\``, `Envia um anúncio em algum canal`)
                .addField(`\`${config.bot.prefix}banir\``, `Executa uma punição em um usúario.`)
                .addField(`\`${config.bot.prefix}limpar\``, `Limpa um canal.`)
                .addField(`\`${config.bot.prefix}expulsar\``, `Executa uma punição em um usúario.`)
                .addField(`\`${config.bot.prefix}ping\``, `Verifica o seu ping e o ping do BOT`)
                .addField(`\`${config.bot.prefix}config\``, `Configure o seu servidor para varios sistemas.`)
                .addField(`\`${config.bot.prefix}add\``, `Me adicione em seu servidor!`)
                
                
                
                
                  .setFooter(message.guild.name + " - © 2021").setColor("#00ffff").setTimestamp()

            msg.edit(embed);
        })
 
        Moderação.on('collect', r2 => {

              embed = new Discord.MessageEmbed()
              .setTitle("👮 | Developer")
              .addField(`\`${config.bot.prefix}reload\``, `Aplica um banimento em algum membro`)
              .addField(`\`${config.bot.prefix}loadcmd\``, `Carrega um comando`)
              .addField(`\`${config.bot.prefix}unload\``, `Descarrega um comando`)
              .addField(`\`${config.bot.prefix}blacklist\``, `Gerenciar servidores em blacklist`)
                
                  .setFooter(message.guild.name + " - © 2021").setColor("#00ffff").setTimestamp()
              .setColor("#4169E1")
            msg.edit(embed);
        })
        Diversão.on('collect', r2 => {

              embed = new Discord.MessageEmbed()
              .setTitle("🎊 | Diversão")
              .addField(`\`${config.bot.prefix}ascii\``, `Envia uma frase em letras`) 
              .addField(`\`${config.bot.prefix}bolsonaro\``, `Envia o membro do Bolsonaro de acordo com a mensagem solicitada`)
              .addField(`\`${config.bot.prefix}cancelamento\``, `Faz um meme do cancelamento`)
              .addField(`\`${config.bot.prefix}cachorro\``, `Envia uma foto aleatória de um cachorro`)
              .addField(`\`${config.bot.prefix}cookie\``, `Envia um cookie para alguém`)
              .addField(`\`${config.bot.prefix}primeiraspalavras\``, `Envia o meme de um bebê falando pela primeira vez`)
              .addField(`\`${config.bot.prefix}laranjo\``, `Cria um meme do laranjo`)
              .addField(`\`${config.bot.prefix}lenny\``, `Envia rostos engraçados`)
              .addField(`\`${config.bot.prefix}meme\``, `Faz o bot enviar um meme`)
              .addField(`\`${config.bot.prefix}penis\``, `Mostra quantos centímetros tem seu piupiu (não é NSFW)`)
              .addField(`\`${config.bot.prefix}piada\``, `O bot envia piadas pra você`)
              .addField(`\`${config.bot.prefix}reverse\``, `Reverte a mensagem solicitada`)
              .addField(`\`${config.bot.prefix}ship\``, `Shippa os dois usuários mencionados`)
              .addField(`\`${config.bot.prefix}gay\``, `Mostra a porcentagem que você é gay`)
              .addField(`\`${config.bot.prefix}tweet\``, `Cria um falso tweet`)
              .addField(`\`${config.bot.prefix}gato\``, `Envia uma foto aleatória de um gato`)
                  .setFooter(message.guild.name + " - © 2021").setColor("#00ffff").setTimestamp()
              .setColor("#FFFF00")
              msg.edit(embed);
        })
        
        Musica.on('collect', r2 => {     

              embed = new Discord.MessageEmbed()
              .setTitle("🎶 | Musicas")
              .addField(`\`${config.bot.prefix}play\``, `Faça o bot cantar uma musica!`)
              .addField(`\`${config.bot.prefix}pause\``, `Faça o bot pausar uma musica!`)
              .addField(`\`${config.bot.prefix}stop\``, `Faça o bot parar as musicas!`)
              .addField(`\`${config.bot.prefix}resume\``, `Faça o bot continuar uma musica!`)
              .addField(`\`${config.bot.prefix}lyrics\``, `Faça o bot enviar a letra de uma musica!`)
              .addField(`\`${config.bot.prefix}volume\``, `Faça o bot alterar o volume da musica!`)
              .addField(`\`${config.bot.prefix}shuffle\``, `Faça o bot embaralhar a sequencia de musicas!`)
              .addField(`\`${config.bot.prefix}queue\``, `Faça o bot mostrar a lista de musicas!`)
              .addField(`\`${config.bot.prefix}skip\``, `Faça o bot pular uma musica!`)
              .addField(`\`${config.bot.prefix}loop\``, `Faça o bot Repetir as musicas!`)
              
            
              
              
                  .setFooter(message.guild.name + " - © 2021").setColor("#00ffff").setTimestamp()
              .setColor("#ffa500")
              msg.edit(embed);
        })
              })
            })
  }