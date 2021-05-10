const Discord = require("discord.js");
const Axios = require('axios');
const fs = require('fs');
const config = require('../config.json')
const Auth = require('../libs/auth.js');
const auth = new Auth();
module.exports.run = async (bot, message, args) => {
    let getVersion = async () => {
        let response = await Axios.get("https://api.nitestats.com/v1/epic/staging/fortnite")
        let version = response.data;
        return version
      }
let versionValue = await getVersion()
 const embed = new Discord.MessageEmbed()
 .setTitle('Fortnite blue daily main testing server stats:')
 .addField('App name', `${versionValue.BlueDailyMainTesting.app}`)
 .addField('Name', `${versionValue.BlueDailyMainTesting.nameID}`)
 .addField('Branch', `${versionValue.BlueDailyMainTesting.branch}`)
 .addField('Build', `${versionValue.BlueDailyMainTesting.build}`)
 .addField('Cln', `${versionValue.BlueDailyMainTesting.cln}`)
.addField('ModuleName', `${versionValue.BlueDailyMainTesting.moduleName}`)
.addField('Version', `${versionValue.BlueDailyMainTesting.version}`)
.addField('Override Properties Version', `${versionValue.BlueDailyMainTesting.overridePropertiesVersion}`)
.addField('Build Date', `${versionValue.BlueDailyMainTesting.buildDate}`);

 message.channel.send(embed)
.catch(err => console.error(err))
}

module.exports.config = {
    name: "bluedailymaintesting",
    description: "",
    usage: "l.bluedailymaintesting",
    aliases: ['bluedailymaintesting']
}