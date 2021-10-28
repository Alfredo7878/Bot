const { ashCommandBuilder } = require("@discordjs/builders")
const { REST } = require("@discordjs/rest")
const { Routes }  = require("discord-api-types/v9")
const { clientId, guildId, token } = require("./config.json")

const commands = [
     new ashCommandBuilder().setName("ping").setDescription("Pingueame esta.")
]
.map(command => command.toJSON())

const rest = new REST({version: "9"}).setToken(token)

async function createash() {
    try{
        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body : commands }
        )

        console.log("Funcionó :D")
    } catch(e) {
        console.error("e")
    }
}

createash()