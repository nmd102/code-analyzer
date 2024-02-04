const { SlashCommandBuilder } = require('discord.js');
const problems = require("../../problems.json");
const fs = require('fs')

function randIndex(len) {
    return Math.floor(Math.random()*len)
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName("problem")
        .setDescription("Do a random problem"),
    async execute(interaction) {
        const rng = randIndex(problems.problems.length);
        fs.writeFile('index.txt',rng.toString(), {
            encoding: "utf-8",
            flag: "w"
            }, (err) => {
            if(err) throw err
        })
        await interaction.reply(`Here is you problem!:\n\`\`\`${problems.problems[rng]}\`\`\``);
    },
};