const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("linkler")
    .setDescription("Botun Linklerini Gösterir."),
    run: async (client, interaction) => {
        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel(`Davet Linki!`)
            .setStyle(5)
            .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=applications.commands%20bot`),
            new ButtonBuilder()
            .setLabel('Destek Sunucusu!')
            .setStyle(5)
        .setURL("Destek Sunucu Linki"),
            new ButtonBuilder()
            .setLabel('Oy linki!')
            .setStyle(5)
        .setURL("Oy Linki"),
            new ButtonBuilder()
            .setLabel('Websitesi!')
            .setStyle(5)
            .setURL("Botun Websitesi"),
        )
        let invite = new EmbedBuilder()
           .setTitle(`${client.user.username} Botun linkleri`, client.user.avatarURL())
      
      
        .setDescription(`${client.user.username} botumuzu sunucunuza şimdi davet edin ve gelişmiş özelliklerinin tadını çıkartın!`)
        .setColor(0xFFD700)
        .setTimestamp()
        .setFooter({text:`${interaction.user.tag} Tarafından istendi`, iconURL:interaction.user.displayAvatarURL()}) 
        interaction.reply({ embeds: [invite], components: [row]});
     
        },
    };