const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("havadurumu")
    .setDescription("Hava Durumunu Gösterir."),
    run: async (client, interaction) => {
            const havadurumu = new EmbedBuilder()
            .setTitle("Hava Durumu!")
            .setColor(0xFFD700)
            .setImage('https://www.wttr.in/'+ interaction.options.getString("yer") +'.png?m ')
        
        interaction.reply({ embeds: [havadurumu] });
          },
        };  