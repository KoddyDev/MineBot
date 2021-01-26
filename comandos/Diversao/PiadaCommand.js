const Discord = require("discord.js")
exports.run = (client, message, args) => {
            
      var cookies = [
        "Qual o contrário de Bailarino? Baila-voltano.",
        "O que é o que é? Tem nariz de cachorro, rabo de cachorro, orelha de cachorro, mas não é cachorro? Cachorra.",
        "Qual o contrário de salsicha? Açúcaricha.",
        "O que o aquário falou para o peixe? Muito prazer, meu nome é aquário. ",
        "Por que o Dinossauro não bate palma? Porque ele já foi extinto.",
        "Qual é o oposto de fechadura? Abremole.",
        "Qual é o oposto de Diamante? Noitemante.",
        "Qual é o animal que tem olhos, mas não vê? Meu cachorro quando está dormindo.",
        "Qual o animal que anda com as patas? Todos, porque não vão tirar as patas pra andar.",
        "O que que a alface falou pra couve triste? O que couve com você?",
        "Qual é a sobremesa preferida da vaca? Múuuuu-sse.",
        "Qual é o oposto de Manteiga? Womanteigo.",
        "Qual o contrário de caramelo? Coroamelo.",
        "Qual é o feminino de papagaio? Mamagaia.",
        "Qual animal anda de marcha ré?? Todos quando se volta o vídeo.",
        "Qual é o pugilista de derrotou o Mohamed Ali? Mohamed Aqui.",
        "No meu jardim tinha 5 pés de tomate 2 pés de abacate e 1 de banana. Quantos pés eu tenho? 2 pés.",
        "Qual animal não respira? O que está morto.",
        "Por que um dia vi um gato de um olho só? Porque tampei o outro.",
        "Qual o contrário de Rinoceronte? Choranoserhoje.",
        "Qual o contrário de arroz? Vácuoroz.",
        "Ge estava andando de bicicleta, mas ele não viu a ladeira que estava à sua frente. O que falaram para ele? Ge-Ladeira.",
        "Nas novelas, como fazer para os atores vovôs falarem mais alto? É só apertar o vô-lume. ",
        "Por que Angelina não é considerada uma atriz completa? Porque para isso, Angelina além de Jô-Li, deveria ser Jô-Escrevi também.",
        "Tenho 5 maçãs, roubo de Joãozinho 5, quantas tartarugas tem no pote de doce? Duas, pois vassoura não assiste TV a noite.",
        "Qual o contrário de futsal? Fut-açúcar.",
        "Qual é o contrário de contramão? Favorpé.",
        "Ela tinha 4 filhos. Janeiro, Fevereiro, Março. Qual é o nome do quarto filho? O nome da criança é **Qual**.",
        "Qual é o frango que está sempre na mesa? O frango alinamesa."

      ]
      let embed = new Discord.MessageEmbed()
      .setTitle(`**🧩 │Piada**`)
      .setDescription(cookies[Math.floor(Math.random() * cookies.length)])
      .setFooter(message.guild.name + " - © 2021")
      message.channel.send(embed)    
    }

  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'charada',
    aliases: ['piada', 'piadas']
  };