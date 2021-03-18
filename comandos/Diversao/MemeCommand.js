const Discord = require("discord.js")
exports.run = (client, message) => {
            

      var cookies = [
        "https://images3.memedroid.com/images/UPLOADED483/5d50095d0a38a.jpeg",
        "https://i.pinimg.com/736x/02/ec/4e/02ec4e747b03b0081a8b4897ac792efa.jpg",
        "https://i.pinimg.com/736x/4a/5d/c9/4a5dc9b9537522820522c3b006225b47.jpg",
        "https://www.hojeemdia.com.br/polopoly_fs/1.778316!/image/image.PNG_gen/derivatives/landscape_653/image.PNG",
        "https://www.hojeemdia.com.br/polopoly_fs/1.777197!/image/image.PNG_gen/derivatives/landscape_653/image.PNG",
        "https://img.ibxk.com.br/ns/rexposta/2018/09/26/26014633349193.jpg?watermark=neaki&w=600",
        "https://pm1.narvii.com/6507/ba5e67b0cf969afdcba17c25107c435f31a85026_00.jpg",
        "https://pm1.narvii.com/6747/2167468a1784ee5fde405047eb1f22f98e09330cv2_00.jpg",
        "https://conteudo.imguol.com.br/c/entretenimento/01/2019/03/19/aconteceu-virou-meme-manda-pra-gente-11-97335-6855-1553006188579_v2_600x1.jpg",
        "https://queroaprender.blog.br/wp-content/uploads/2019/10/memes-engra%C3%A7ados-brasileiros-1496.jpg",
        "https://i.correiobraziliense.com.br/WItjzAw7n-VAhfArwEV9Z7bLkqI=/675x/smart/imgsapp2.correiobraziliense.com.br/app/noticia_127983242361/2020/01/07/818830/20200107134849686828e.jpg",
        "https://www.hypeness.com.br/wp-content/uploads/2018/07/meme-1.jpg",
        "https://pics.esmemes.com/quando-voc%C3%AA-v%C3%AA-um-amigo-e-come%C3%A7a-a-comer-r%C3%A1pido-63607701.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0Cu_TJTCRJR-jUVj1_Y3V6JF3t0aWMgTPp75sxpaR9eDBiddp&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK6ZcJShoiyp6ds0vpLAtqYy1LY1PwGEnS5WZn0FFzzzinAO1t&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2-VMjTijfx91eqPoo9VURVa5ngIGgdzvV5Ytp940akn2-X1hu&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXX4eHKGdP438CXudAGJrVteSF_8CCp9-UuYFE9LeXznTRQGVV&usqp=CAU",
        "https://scontent.fplu3-1.fna.fbcdn.net/v/t1.0-9/44447748_1964123143675236_4820505962559307776_o.jpg?_nc_cat=100&_nc_sid=730e14&_nc_ohc=xw6P6PDzUwgAX9vg4qj&_nc_ht=scontent.fplu3-1.fna&oh=56e6c2a05f4aaac048becf479d9c3f6b&oe=5EDE233A",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-PklC1uyjXN646IjxviHZEF6jxe72o3RspRP-NdKC8912gQuY&usqp=CAU",
        "https://static.imagemwhats.com.br/content/assetz/uploads/2019/06/55-Memes-brasileiros-Br-Memes-cole%C3%A7%C3%A3o-511.jpg",
        "https://i.ytimg.com/vi/ClGiPRPj-pM/hqdefault.jpg",
        "https://img.ibxk.com.br/ns/rexposta/2019/08/30/30212740309168.jpg?watermark=neaki&w=600",
        "https://img.ibxk.com.br/ns/rexposta/2019/08/25/25105803486065.jpg?watermark=neaki&w=600",
        "https://scontent.fplu3-1.fna.fbcdn.net/v/t1.0-0/p526x296/75576623_2611944722425036_3259097531543453696_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_ohc=m_CEZB_umLwAX9NhN2n&_nc_ht=scontent.fplu3-1.fna&_nc_tp=6&oh=6c388f39138f9c3aaa3a2cf6407af8ec&oe=5EDA9BB9",
        "https://cdn.dopl3r.com//media/memes_files/quando-vc-volta-coma-ex-depois-de-darem-um-tempo-memes-br-br-guardians-galayy-memes-ceviduy-br-memes-br-alguem-esteve-aqui-br-memes-memes-br-memfs-8VrtM.jpg",
        "https://media.gazetadopovo.com.br/vozes/2018/07/firefox_2018-07-06_16-27-53-d3f0a0d4.png",
        "https://pics.me.me/eu-vendo-minhas-fotos-do-passado-eu-vendo-minhas-foto-35561995.png",
        "https://timeline.canaltech.com.br/344336.1400/coronavirus-mitos-verdades-e-a-enxurrada-de-memes.jpg",
        "https://cdn.dicionariopopular.com/imagens/image-130.jpg",
        "https://cdn.dicionariopopular.com/imagens/image-129.jpg",
        "https://pm1.narvii.com/7472/428f50a1d3a159749f52cd827d58e19d85a7657ar1-1092-1080v2_uhq.jpg"
      ]
      let embed = new Discord.MessageEmbed()
      .setTitle("🎈| Memes - " + message.guild.name)
      .setImage(cookies[Math.floor(Math.random() * cookies.length)])
      .setFooter(message.guild.name + " - © 2021").setColor("#00ffff")
            message.reply(embed)
    }

  
  
  exports.help = {
    name: 'meme',
    aliases: ['memes', 'memefacebook']
  };
  