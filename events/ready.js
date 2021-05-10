const Discord = require("discord.js")

module.exports = client => { 
    console.log(`${client.user.username} is online`)
    client.user.setActivity(`fortnite servers`, {type: "WATCHING"});
}