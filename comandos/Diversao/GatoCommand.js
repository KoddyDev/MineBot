const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const superagent = require('superagent'); // puxando o NPM superagent (instale utilizando: npm i superagent)

exports.run = async (client, message, args) => { // setando as bases

    let{body} = await superagent // puxando, pelo superagent, o corpo/foto do gato
  .get(`http://aws.random.cat/meow`); // setando a API que estamos puxando (gerado pelo SuperAgent)

  let catembed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Gato 🐱")
  .setImage(body.file) // enviando o corpo/foto do gato 
  .setFooter(message.guild.name + " - © 2021")
  message.channel.send(catembed);
}

exports.help = {
  'name': 'gato',
  'aliases': ['cat']
}