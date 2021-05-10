const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
const Auth = require('../libs/auth.js');
const auth = new Auth();
module.exports.run = async (bot, message, args) => {
    let getVersion = async () => {
        let response = await Axios.get("https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game")
        let version = response.data;
        return version
      }
let versionValue = await getVersion()
 const embed = new Discord.MessageEmbed()
 .setTitle('Fortnite ios news:')
 .addField('Title', `${versionValue.battleroyalenews.news.platform_motds[0].message.title}`)
 .addField('Body', `${versionValue.battleroyalenews.news.platform_motds[0].message.body}`)
 .addField('Id', `${versionValue.battleroyalenews.news.platform_motds[0].message.id}`)
 .addField('Spotlight', `${versionValue.battleroyalenews.news.platform_motds[0].spotlight}`)
 .addField('Type', `${versionValue.battleroyalenews.news.platform_motds[0]._type}`)
.addField('Tile Image', `${versionValue.battleroyalenews.news.platform_motds[0].image}`)

 message.channel.send(embed)
.catch(err => console.error(err))
}

module.exports.config = {
    name: "iosnews",
    description: "",
    usage: "l.iosnews",
    aliases: ['iosnews']
}