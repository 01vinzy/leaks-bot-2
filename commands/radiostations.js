const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
module.exports.run = async (bot, message, args) => {
    let getVersion = async () => {
        let response = await Axios.get("https://fortnitecontent-website-prod07.ol.epicgames.com/content/api/pages/fortnite-game")
        let version = response.data;
        return version
      }
let versionValue = await getVersion()
 const embed = new Discord.MessageEmbed()
 .setTitle('Fortnite radio stations:')
 versionValue.radioStations.forEach(function(e){embed.addField('radio station found', `${e.radioStationList.stations.title}`)})
 message.channel.send(embed)
.catch(err => console.error(err))
}

module.exports.config = {
    name: "stations",
    description: "",
    usage: "l.stations",
    aliases: ['stations']
}