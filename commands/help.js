const Discord = require("discord.js");
const { MessageSelectMenu, MessageActionRow } = require("discord.js");

module.exports = {

    name: "Help com menu",
    author: "Kashi",

    run: async(client, message, args) => {

        let embed_1 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor('Comandos do Lupy')
        .setFooter('\n Kashi & Karito',client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Como vai mortal! Você encontrará aqui todos os comandos disponíveis.\n **
        🔴 Informação 
        ⚫ Moderação
        🔵 Utilidades
        🟣 Musica
        🟢 Diversõa
        🟠 Outros\n\n\n

        `);

        let painel = new MessageActionRow().addComponents( new MessageSelectMenu()
        .setCustomId('menu')
        .setPlaceholder('Veja meus comandos.') // Mensagem estampada
        .addOptions([
               {
                    label: 'Informação',
                    description: 'Reações para se divertir',
                    emoji: '🔴',
                    value: 'informacao',
               },
                {
                    label: 'Moderação',
                    description: 'Comandos para Moderação',
                    emoji: '⚫',
                    value: 'moderacao',
                },
                {
                    label: 'Utilidades',
                    description: 'Comandos para Utilidades',
                    emoji: '🔵',
                    value: 'utilidades',
                },
                {
                    label: 'Musica',
                    description: 'Comandos para Musica',
                    emoji: '🟣',
                    value: 'musica',
                },
                {
                    label: 'Diversão',
                    description: 'Comandos para diversão',
                    emoji: '🟢',
                    value: 'diversao',
                },
                {
                    label: 'Outros',
                    description: 'Comandos para outros',
                    emoji: '🟠',
                    value: 'outros',
                },
            ])

        );


        message.reply({  embeds: [embed_1], components: [painel] }).then(msg => {

            const filtro = (interaction) => 
              interaction.isSelectMenu()
        
            const coletor = msg.createMessageComponentCollector({
              filtro
            });
        
            coletor.on('collect', async (collected) => {

              let valor = collected.values[0]
              collected.deferUpdate()

                    if (valor === 'informacao') {

                        let embed_1 = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setAuthor(`Comandos do Lupy`, client.user.displayAvatarURL({ dynamic: true }))
                        .setFooter('Kashi & Karito')
                        .setDescription(`**🔴 Informação\n\n📖 Comandos:
                        \`\`\`Ping          Help            Prefix          Botinfo
                        \`\`\`**`);

                        msg.edit({ embeds: [embed_1], components: [painel] });
                
                    };

                    if (valor === 'moderacao') {

                        let embed_2 = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setAuthor(`Comandos do Lupy`, client.user.displayAvatarURL({ dynamic: true }))
                        .setFooter('Kashi & Karito')
                        .setDescription(`**⚫ Moderação\n\n📖 Comandos:
                        \`\`\`
                        
                        
                        \`\`\`**`);

                        msg.edit({ embeds: [embed_2], components: [painel] });

                    };

                    if (valor === 'utilidades') {

                        let embed_3 = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setAuthor(`Comandos do Lupy`, client.user.displayAvatarURL({ dynamic: true }))
                        .setFooter('Kashi & Karito')
                        .setDescription(`**🔵 Utilidades\n\n📖 Comandos:
                        \`\`\`
                        
                        
                        \`\`\`**`);

                        msg.edit({ embeds: [embed_3], components: [painel] });

                    };

                    if (valor === 'musica') {

                        let embed_4 = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setAuthor(`Comandos do Lupy`, client.user.displayAvatarURL({ dynamic: true }))
                        .setFooter('Kashi & Karito')
                        .setDescription(`**🟣 Musica\n\n📖 Comandos:
                        \`\`\`
                        
                        
                        \`\`\`**`);

                        msg.edit({ embeds: [embed_4], components: [painel] });

                    };

                    if (valor === 'diversao') {

                        let embed_5 = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setAuthor(`Comandos do Lupy`, client.user.displayAvatarURL({ dynamic: true }))
                        .setFooter('Kashi & Karito')
                        .setDescription(`**🟢 Diversõa\n\n📖 Comandos:
                        \`\`\`
                        
                        
                        \`\`\`**`);

                        msg.edit({ embeds: [embed_5], components: [painel] });

                    };
                    
                    if (valor === 'outros') {

                        let embed_6 = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setAuthor(`Comandos do Lupy`, client.user.displayAvatarURL({ dynamic: true }))
                        .setFooter('Kashi & Karito')
                        .setDescription(`**🟠 Outros\n\n📖 Comandos:
                        \`\`\`
                        
                        
                        \`\`\`**`);

                        msg.edit({  embeds: [embed_6], components: [painel] });

                    };
        
        
        })

    })

}
}