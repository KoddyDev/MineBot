const Discord = require("discord.js")
exports.run = (client, message) => {
  let user = message.mentions.users.first();
  if (!user) return message.reply('você precisa mencionar alguém antes de fazer o cancelamento!')
let usernamee = user.username
    var cookies = [
        `${usernamee} foi cancelado(a) por ter virado o Coronga.`,
        `${usernamee} foi cancelado(a) por gostar de furry.`,
        `${usernamee} foi cancelado(a) por gostar de K-pop.`,
        `${usernamee} foi cancelado(a) por gostar do Bolsonaro.`,
        `${usernamee} foi cancelado(a) por se considerar incancelável.`,
        `${usernamee} foi cancelado(a) por se atrasar sempre.`,
        `${usernamee} foi cancelado(a) por ser poser.`,
        `${usernamee} foi cancelado(a) por ser uma pessoa horrível.`,
        `${usernamee} foi cancelado(a) por ser uma grande gostosa.`,
        `${usernamee} foi cancelado(a) por ser corno.`,
        `${usernamee} foi cancelado(a) por ser inútil.`,
        `${usernamee} foi cancelado(a) por ter muita preguiça.`,
        `${usernamee} foi cancelado(a) por ser insuportável.`,
        `${usernamee} foi cancelado(a) por ser BV.`,
        `${usernamee} foi cancelado(a) por ser lolicon.`,
        `${usernamee} foi cancelado(a) por não ser ninguém.`,
        `${usernamee} foi cancelado(a) por ser insensível.`,
        `${usernamee} foi cancelado(a) por ter charme demais.`,
        `${usernamee} foi cancelado(a) por ser padrãozinho.`,
        `${usernamee} foi cancelado(a) por ser trouxa.`,
        `${usernamee} foi cancelado(a) por pedir muito biscoito.`,
        `${usernamee} foi cancelado(a) por ser impaciente demais.`,
        `${usernamee} foi cancelado(a) por ser boy lixo.`,
        `${usernamee} foi cancelado(a) por ser inteligente demais.`,
        `${usernamee} foi cancelado(a) por não fazer nada.`,
        `${usernamee} foi cancelado(a) por ser comunista.`,
        `${usernamee} foi cancelado(a) por debochar demais.`,
        `${usernamee} foi cancelado(a) por ser uma delícia.`,
        `${usernamee} foi cancelado(a) por ser gado demais.`,
        `${usernamee} foi cancelado(a) por se considerar incancelável.`,
        `${usernamee} foi cancelado(a) por contar muita piada ruim.`,
        `${usernamee} foi cancelado(a) por ser inadimplente no Serasa.`,
        `${usernamee} foi cancelado(a) por ser atraente demais.`,
        `${usernamee} foi cancelado(a) por procrastinar demais.`

      ]
      let embed = new Discord.MessageEmbed()
      .setTitle(`**:no_entry_sign: │ Cancelamento**`)
      .setDescription(cookies[Math.floor(Math.random() * cookies.length)])
      .setFooter(message.guild.name + " - © 2021").setColor("#00ffff").timestamp()
      message.channel.send(embed)    
    }

    exports.help = {
      'name': 'cancelamento',
      'aliases': ['cancelar']
    }