const Discord = require("discord.js")

module.exports = {
    name: "ping",
    author: "kashi",

    run: async(client, message, args) => {

        let cor_da_embed = "RED";

        let ping_do_bot = client.ws.ping;

        let embed_1 = new Discord.MessageEmbed()
        .setColor(cor_da_embed)
        .setDescription(`**\`🏓\` Calculando ping.**`);
        
        let embed_2 = new Discord.MessageEmbed()
        .setColor(cor_da_embed)
        .setDescription(`**O meu ping está em \`${ping_do_bot} ms\`.**`);

        let comando_desenvolvido_por_ferinha = await message.reply({ embeds: [embed_1] }).then(msg => {
            setTimeout( () => {
                msg.edit({ embeds: [embed_2] })
            }, 2000)
        })
    }
}