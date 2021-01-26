const ytdl = require('ytdl-core-discord');
var scrapeYt = require("scrape-yt");
const discord = require('discord.js')

exports.run = async (client, message, args) => {

    if(!args[0]) return message.channel.send('Você não inseriu nenhuma musica para tocar.')
    let channel = message.member.voice.channel;
    if(!channel) return message.channel.send('Você precisa entrar em um canal de voz primeiro!')

    if (!channel.permissionsFor(message.client.user).has("CONNECT")) return message.channel.send('Eu não tenho permissão para entrar neste canal de voz.')
    if (!channel.permissionsFor(message.client.user).has("SPEAK"))return message.channel.send('Eu não tenho permissão para falar neste canal de voz.')


    const server = message.client.queue.get(message.guild.id);
    let video = await scrapeYt.search(args.join(' '))
    let result = video[0]

    const song = {
        id: result.id,
        title: result.title,
        duration: result.duration,
        thumbnail: result.thumbnail,
        upload: result.uploadDate,
        views: result.viewCount,
        requester: message.author,
        channel: result.channel.name,
        channelurl: result.channel.url
      };

    var date = new Date(0);
    date.setSeconds(song.duration); // specify value for SECONDS here
    var timeString = date.toISOString().substr(11, 8);

      if (server) {
        server.songs.push(song);
        let embed = new discord.MessageEmbed()
        .setTitle('Adicionada na fila de musica!')
        .setColor('#00fff1')
        .addField('Nome', song.title, true)
        .setThumbnail(song.thumbnail)
        .addField('Visualizações', song.views, true)
        .addField('Pedido por', song.requester, true)
        .addField('Duração', timeString, true)
        return message.channel.send(embed)
    }

    const queueConstruct = {
        textChannel: message.channel,
        voiceChannel: channel,
        connection: null,
        songs: [],
        volume: 2,
        playing: true
    };
    message.client.queue.set(message.guild.id, queueConstruct);
    queueConstruct.songs.push(song);


    const play = async song => {
        const queue = message.client.queue.get(message.guild.id);
        if (!song) {
            queue.voiceChannel.leave();
            message.client.queue.delete(message.guild.id);
            message.channel.send('As musicas acabaram, saindo do canal.')
            return;
        }

        const dispatcher = queue.connection.play(await ytdl(`https://youtube.com/watch?v=${song.id}`, {
            filter: format => ['251'],
            highWaterMark: 1 << 25
        }), {
            type: 'opus'
        })
            .on('finish', () => {
                queue.songs.shift();
                play(queue.songs[0]);
            })
            .on('error', error => console.error(error));
        dispatcher.setVolumeLogarithmic(queue.volume / 5);
        let noiceEmbed = new discord.MessageEmbed()
        .setTitle('Começando a tocar')
        .setThumbnail(song.thumbnail)
        .addField('Nome', song.title, true)
        .addField('Pedido por', song.requester, true)
        .addField('Visualizações', song.views, true)
        .addField('Duração', timeString, true)
        queue.textChannel.send(noiceEmbed);
    };


    try {
        const connection = await channel.join();
        queueConstruct.connection = connection;
        play(queueConstruct.songs[0]);
    } catch (error) {
        console.error(`I could not join the voice channel`);
        message.client.queue.delete(message.guild.id);
        await channel.leave();
        return message.channel.send(`Não pude entrar neste canal de voz pelo erro: ${error}`);
    }
}

exports.help = {
    'name': 'tocar',
    'aliases': ['play']
  }