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
 .setTitle('fortnite radio Stations:')
  versionValue.radioStations.radioStationList.stations.forEach(function(e){embed.addField(`${e.title}`)})
 message.channel.send(embed)
.catch(err => console.error(err))
}

module.exports.config = {
    name: "radiostations",
    description: "",
    usage: "l.radiostations",
    aliases: ['radiostations']
}