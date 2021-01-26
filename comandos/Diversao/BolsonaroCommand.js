const Discord = require('discord.js'); // puxando a livraria 'discord.js'
var Jimp = require("jimp"); // puxando o NPM jimp (instale utilizando: npm i jimp)
exports.help = {
    'name': 'bolsonaro',
    'aliases': ['bolsonaro2']
  }
exports.run = async (client, message, args) => { // setando a base com async
message.delete()
    if (message.content.split(' ').slice(1).join(' ').length < 1) { // definindo um argumento | caso os caracteres sejam menor q um
        message.reply(`primeiro você precisa escrever uma palavra!`) // caso o membro nao escreva algo para por na imagem
    } else { 
        if (message.content.split(' ').slice(1).join(' ').length > 50) { // caso os caracteres sejam maior que 50
            message.reply(`você ultrapassou o limite de 50 caracteres. Você não quer uma edição feia ne?`)
        } else {
            if (message.member.hasPermission('ATTACH_FILES')) { // requisitando a permissao: ATTACH_FILES
                var authorMessage = message
                message.channel.send('Processando...').then(message => { // uma brincadeira, q iremos excluir essa mensagem e por outra
                    // imagem que puxaremos, no caso, do Laranjo
                    Jimp.read(`https://cdn.discordapp.com/attachments/691804239017803877/701227244747751444/IMG_20200418_212359.jpg?width=540&height=482`, function (err, image) {
                        if (err) message.channel.send('Ocorreu um erro ao criar a imagem.') // caso ocorra um erro ao criar a imagem
                        Jimp.loadFont(Jimp.FONT_SANS_64_BLACK).then(function (font) { // setando o tipo da fonte
                            image.print(font, 523, 350, authorMessage.content.split(' ').slice(1).join(' '), 500) // mexendo no local da fonte
                            var aguardeMessage = message // criando umaa nova mensagem
                            image.getBuffer(Jimp.MIME_PNG, (err, buffer) => { // mudando para PNG a imagem e botando um buffer
                                const attachment = new Discord.Attachment(buffer, 'bolsonaro.png') // o nome da imagem gerada
                                message.channel.send(attachment).then(message => { // e por fim, a imagem
                                    aguardeMessage.delete() // deletando a mensagem do inicio
                                })
                            })
                        })
                    })
                })
            } else {
                message.channel.send('Eu não tenho a permissão necessária para fazer isso. `ATTACH_FILES`') // caso o bot nao possua permissao
            }
        }
    }
}