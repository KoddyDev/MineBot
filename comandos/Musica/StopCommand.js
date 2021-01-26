exports.run = async(client, message) => {
    const channel = message.member.voice.channel;
if (!channel) return message.channel.send('Você precisa entrar em um canal de voz primeiro!');
    let queue = message.client.queue.get(message.guild.id)
    if(!queue) return message.channel.send({
        embed: {
            description: 'Não estou tocando nada por agora!',
            color: 'BLACK'
        }
    })
    message.reply("parei a lista de musica baby")
    queue.songs = []
    queue.connection.dispatcher.end('Stopped!')
}

exports.help = {
    'name': 'stop',
    'aliases': ['parar', 'parartudo']
  }
