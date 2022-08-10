const { EmbedBuilder, ActionRowBuilder , ButtonBuilder ,  PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");



module.exports = {
  data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("Kullanıcının Avatarınını Gösterir."),
    run: async (client, interaction) => {
        let user = interaction.options.getUser || interaction.user;
        
      
          
        const row = new ActionRowBuilder()
       .addComponents(
           new ButtonBuilder()
           .setLabel(`PNG`)
           .setStyle(5)       .setURL(`${user.displayAvatarURL({size:1024,format:"png"})}`),
           
           new ButtonBuilder()
           .setLabel(`JPG`)
           .setStyle(5)       .setURL(`${user.displayAvatarURL({size:1024,format:"jpg"})}`),
           
           new ButtonBuilder()
           .setLabel(`WEBP`)
           .setStyle(5)       .setURL(`${user.displayAvatarURL({size:1024,format:"webp"})}`),
           
           new ButtonBuilder()
           .setLabel(`GIF`)
           .setStyle(5)       .setURL(`${user.displayAvatarURL({size:1024,format:"gif"})}`),
           )
   
           interaction.reply({
               embeds:[
                   {
                       color: "AQUA",
                       image: {url: user.displayAvatarURL({size:1024,dynamic:true})}
                   }
               ], components: [row]
           })
          
     },
   };