const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Botun Pingini Gösterir."),
    run: async (client, interaction) => {
        interaction.reply({
            embeds: [{
              Color: 'Gold',
            image: {
          url: 'https://dummyimage.com/2000x500/33363c/ffffff&text='+ client.ws.ping +'%20MS',
          },
              
            }]
          })
        },
      };