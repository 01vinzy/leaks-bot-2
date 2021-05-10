const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
const Auth = require('../libs/auth.js');
const auth = new Auth();
module.exports.run = async (bot, message, args) => {
    let getVersion = async () => {
        let response = await Axios.get("https://fortnite-api.com/v2/cosmetics/br/new")
        let version = response.data;
        return version
      }
let versionValue = await getVersion()
 const embed = new Discord.MessageEmbed()
 .setTitle('new items:')
 versionValue.data.items.forEach(function(e){embed.addField(`${e.name}`, `${e.description}`)})
 message.channel.send(embed)
.catch(err => console.error(err))
}

module.exports.config = {
    name: "newitems",
    description: "",
    usage: "l.newitems",
    aliases: ['newitems']
}