const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const ServerLists = new Discord.MessageEmbed()
        .setTitle('heres my commands')
        .addField('l.psn', 'sends the fortnite psn store media')
        .addField('l.background', 'sends the fortnite background tag')
        .addField('l.status', 'sends the fortnite status')
        .addField('l.playlists', 'sends the active fortnite playlists')
        .addField('l.stwnews', 'sends  fortnite stw news')
        .addField('l.battleroyalenews', 'sends fortnite battle royale news')
        .addField('l.creativenews', 'sends the fortnite creative news')
        .addField('l.newitems', 'sends new fortnite items')
        .addField('l.fortnitelive', 'sends live fortnite server build info')
        .addField('l.releaseplaytestb', 'sends a fortnite testing server build info')
        .addField('l.dailyreleasea', 'sends new fortnite items')
        .addField('l.dailyreleaseb', 'sends a fortnite testing server build info')
        .addField('l.dailyreleasec', 'sends a fortnite testing server build info')
        .addField('l.dailymain', 'sends a fortnite testing server build info')
        .addField('l.blueextqadevtesting', 'sends a fortnite testing server build info')
        .addField('l.bluedailymaintesting', 'sends a fortnite testing server build info')
        .addField('l.shopcategories', 'sends all the shop categories in the api')

        const General = new Discord.MessageEmbed()
        .setTitle('General')
        .addField('l.ping', 'Grabs the bots ping')
        .addField('hope this bot is helpfull')
        .setTimestamp()

        const pages = [
                ServerLists,
                General
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }

module.exports.config = {
    name: "help",
    description: "Show's commands",
    usage: "l.help",
    aliases: []
  }