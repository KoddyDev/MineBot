const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const superagent = require("superagent");

exports.run = async (client, message, args) => { // setando a base
    let user = args[0]; // puxando um @ desse tweet
    let text = args.slice(1).join(" ") || undefined; // aqui, a mensagem do tweet
    if (!user) return message.reply("você precisa fornecer um usuário para o tweet."); // caso ele nao mencione um @
    if (user.startsWith("@")) user = args[0].slice(1); // definindo se o nome da conta comecar com @, sera dado como um usuario real
    if (!text) return message.reply("você precisa informar o tweet."); // caso o membro n bote um texto para o tweet
 message.channel.send('🔍 | Processando...').then(message => {
superagent.get('https://nekobot.xyz/api/imagegen?type=tweet&username=' + user + '&text=' + text)
    .end((err, response) => {
    message.channel.startTyping();
    var aguardeMessage = message
    const attachment = new Discord.MessageAttachment(response.body.message, 'tweet.png')
    message.channel.send(attachment).then(message => {
                                    aguardeMessage.delete()
                                })
        message.channel.stopTyping();
    })
 })
}



exports.help = { // setando o nome do arquivo, seguido do prefix
    name: 'tweet',
    aliases: ['tuitar', 'postar']
}