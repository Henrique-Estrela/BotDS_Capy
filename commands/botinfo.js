const Discord = require("discord.js")

module.exports = {
    name: "botinfo", // Coloque o nome do comando do arquivo
    aliases: [""], // Coloque sinônimos aqui

    run: async (client, message, args) => {

        let servidor = client.guilds.cache.size;
        let usuarios = client.users.cache.size;
        let canais = client.channels.cache.size;
        let ping = client.ws.ping;
        let dono_id = "750476490285514834"; // Seu ID
        let dono = client.users.cache.get(dono_id);
        let prefixo = "-";
        let versao = "^13.7.0";

        let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor({ name: client.user.username, iconURL: client.user.displayAvatarURL({ dynamic: true }) })

            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .setDescription(`\\👋 Como vai ${message.author}, sou o \`${client.user.username}\`, meu prefixo é \`${prefixo}\`.\n\n\\💻 Veja meus comandos com \`${prefixo}help\`.
\\🎈 Atualmente estou gerenciando \`${servidor}\` servidores.
\\📡 Meu ping está em \`${ping}\`.
\\🤖 Fui criado por \`${dono.tag}\`.`);

        message.reply({ embeds: [embed] })

    }
}