const Discord = require('discord.js'); // puxando a livraria 'discord.js'
const superagent = require('superagent'); // puxando o NPM superagent (instale utilizando: npm i superagent)

exports.run = async (client, message, args) => { // setando as bases

  let {body} = await superagent // puxando, pelo superagent, o corpo/foto do cachorro 
  .get(`https://random.dog/woof.json`); // setando a API que estamos puxando (gerado pelo SuperAgent)

   let dogembed = new Discord.RichEmbed()
   .setTitle("Cachorro :dog:") 
   .setImage(body.url) // enviando o corpo/foto do cachorro
   .setFooter(message.guild.name + " - © 2021").setColor("#00ffff")
   message.channel.send(dogembed);

}

exports.help = {
   'name': 'dog',
   'aliases': ['cachorro']
 }