const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
const Auth = require('../libs/auth.js');
const { isNull, isNullOrUndefined } = require("util");
const auth = new Auth();
module.exports.run = async (bot, message, args) => {
    let getVersion = async () => {
        let response = await Axios.get("https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game")
        let version = response.data;
        return version
      }
let versionValue = await getVersion()
 const embed = new Discord.MessageEmbed()
 .setTitle('Fortnite subgame info:')
 .addField(`${versionValue.subgameinfo.battleroyale.title}`, `${versionValue.subgameinfo.battleroyale.description}`)
 .addField(`${versionValue.subgameinfo.battleroyale.image}`)
 .addField(`${versionValue.subgameinfo.savetheworld.title}`, `${versionValue.subgameinfo.savetheworld.description}`)
 .addField(`${versionValue.subgameinfo.savetheworld.image}`)
 .addField(`${versionValue.subgameinfo.creative.title}`, `${versionValue.subgameinfo.creative.description}`)
 .addField(`${versionValue.subgameinfo.creative.image}`, `last Modified ${versionValue.subgameinfo.lastModified}`)
 message.channel.send(embed)
.catch(err => console.error(err))
}

module.exports.config = {
    name: "subgame",
    description: "",
    usage: "l.subgamebr",
    aliases: ['subgame']
}