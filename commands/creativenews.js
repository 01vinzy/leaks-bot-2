const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
const Auth = require('../libs/auth.js');
const auth = new Auth();
module.exports.run = async (bot, message, args) => {
    let getVersion = async () => {
        let response = await Axios.get("https://fortnite-api.com/v2/news/creative")
        let version = response.data;
        return version
      }
let versionValue = await getVersion()
 const embed = new Discord.MessageEmbed()
 .setTitle('creative news:')
 versionValue.data.motds.forEach(function(e){embed.addField('creative news image found', `${e.image}`, `${e.title}`, `${e.body}`)})
 versionValue.data.motds.forEach(function(e){embed.addField('creative news title found', `${e.title}`, `${e.body}`)})
 versionValue.data.motds.forEach(function(e){embed.addField('creative news discription found', `${e.body}`)})
 message.channel.send(embed)
.catch(err => console.error(err))
}

module.exports.config = {
    name: "creativenews",
    description: "",
    usage: "l.creativenews",
    aliases: ['creativenews']
}