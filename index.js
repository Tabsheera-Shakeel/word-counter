#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter You Sentence To Count",
    }]);
const word = answer.sentence.trim().split(" ");
console.log(word);
console.log(`Your Sentence Count Is ${word.length}`);
