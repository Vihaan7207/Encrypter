#!/usr/bin.env node

import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation'

let msg;

const sleep = (s) => new Promise((r) => setTimeout(r, s * 1000));

const welcome = async () => {
    const title = chalkAnimation.karaoke(
        'JS Encrypter'
    );

    await sleep(2.5);
    title.stop();
    console.log(`
        ${chalk.green('JS Encrypter')}
        ${chalk.blueBright('Put in a message and the program will encrypt it for you')}
    `)
}

const askMsg = async () => {
    const message = await inquirer.prompt({
        name: "msg-answer",
        type: "input",
        message: "What is the message you would like to encrypt",
        default(){
            return "Hello world!"
        }
    })

    msg = message.name;
}

await welcome();