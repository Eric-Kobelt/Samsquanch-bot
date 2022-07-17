const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) =>{
    if (message.content == "Pizza"){
        message.reply("The modern incarnation of pizza was not invented in Italy until around 1890.") 
        message.reply("The first American Pizzeria opened in 1905.")  
        message.reply("r 'authentic' Italian Pizza only predated NY pizza by roughly 15 years, ")
        message.reply("and isn't particularily better than the American verson by virtue of a longer culinary tradition")
    }

})

client.login(process.env.TOKEN)