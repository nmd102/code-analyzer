const { SlashCommandBuilder } = require('discord.js');
const problems = require("../../problems.json");
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("solution")
        .setDescription("Gets the solution to the current problem"),
    async execute(interaction) {
        fs.readFile('index.txt', async (err, data) => {
            if (err) throw err;
            const index = data.toString();
            const solution = problems.solutions[parseInt(index)]
            await interaction.reply(`The answer is:\n\`\`\`${solution}\`\`\``);
        });
    },
};