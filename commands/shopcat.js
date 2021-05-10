const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
const Auth = require('../libs/auth.js');
const auth = new Auth();
module.exports.run = async (bot, message, args) => {
    let getVersion = async () => {
        let response = await Axios.get("https://fn-api.com/api/shop_categories")
        let version = response.data;
        return version
      }
let versionValue = await getVersion()
 const embed = new Discord.MessageEmbed()
 .setTitle('Fortnite shop categories:')
  versionValue.shopCategories.forEach(function(e){embed.addField(`${e.sectionName}`, `quantity ${e.quantity}`)})
 message.channel.send(embed)
.catch(err => console.error(err))
}

module.exports.config = {
    name: "shopcat",
    description: "",
    usage: "l.shopcat",
    aliases: ['categories']
}