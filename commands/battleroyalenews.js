const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
const Auth = require('../libs/auth.js');
const auth = new Auth();
module.exports.run = async (bot, message, args) => {
    let getVersion = async () => {
        let response = await Axios.get("https://fortnite-api.com/v2/news")
        let version = response.data;
        return version
      }
let versionValue = await getVersion()
 const embed = new Discord.MessageEmbed()
 .setTitle('battle royale news:')
 versionValue.data.br.motds.forEach(function(e){embed.addField('battle royale news image found', `${e.image}`, `${e.title}`, `${e.body}`)})
 versionValue.data.br.motds.forEach(function(e){embed.addField('battle royale news title found', `${e.title}`, `${e.body}`)})
 versionValue.data.br.motds.forEach(function(e){embed.addField('battle royale news discription found', `${e.body}`)})
 message.channel.send(embed)
.catch(err => console.error(err))
}

module.exports.config = {
    name: "battleroyalenews",
    description: "",
    usage: "l.battleroyalenews",
    aliases: ['battleroyalenews']
}