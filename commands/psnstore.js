const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
const Auth = require('../libs/auth.js');
const auth = new Auth();
module.exports.run = async (bot, message, args) => {
    let getVersion = async () => {
        let response = await Axios.get("https://fn-api.com/api/playstationstore")
        let version = response.data;
        return version
      }
let versionValue = await getVersion()
 const embed = new Discord.MessageEmbed()
 .setTitle('fortnite psn content:')
 .addField('main icon', `${versionValue.mainImages[0].url}`)
 .addField('background', `${versionValue.mainImages[1].url}`)
 .addField('cinematic trailer', `${versionValue.trailers[0].url}`)
 .addField('battle pass trailer', `${versionValue.trailers[1].url}`)
 message.channel.send(embed)
.catch(err => console.error(err))
}

module.exports.config = {
    name: "psn",
    description: "",
    usage: "l.psn",
    aliases: ['psn']
}