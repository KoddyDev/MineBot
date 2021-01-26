const Discord = require('discord.js')

exports.run = async (client, message, args) => {
    try {
      if (!args[0]) return message.reply('você precisa inserir o texto para reverter!');
      
      const str = args.join(' ');
      let msg = await message.reply(str.split('').reverse().join(''));
      msg.react('🔁');
    } catch (err) {
      message.channel.send('Aconteceu um erro!\n' + err).catch();
    }
  };
  exports.help = {
    name: 'reverse',
    aliases: ['reverso']
  };