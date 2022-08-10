const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("istatistik")
    .setDescription("İstatistik Menüsünü Gösterir."),
    run: async (client, interaction) => {
        var embed = new discord.EmbedBuilder()
        .setDescription("**Total users: **"+client.users.cache.size+" user\n**Total guilds: **"+client.guilds.cache.size+" guild\n**Total data: **"+Object.keys(db.all()).length+" data\n\n**Application name: **"+client.user.username+"\n**Developer: **"+client.users.cache.get(developer).tag+"\n\n**Node.js version: **"+process.version+"\n**Discord.js version: **"+discord.version)
        .setAuthor({ name: client.user.username + " bilgileri", iconURL: client.user.avatarURL()})
        .setTimestamp()
        .setColor("Aqua")
        .setThumbnail(client.user.avatarURL())
        message.channel.send({ embeds: [embed]})
    }
}