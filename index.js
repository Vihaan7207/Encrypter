#!/usr/bin.env node

import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation';
import crypto from 'crypto';


let msg;

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

async function encrypt(text) {
   let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
   let encrypted = cipher.update(text);
   encrypted = Buffer.concat([encrypted, cipher.final()]);
   return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

const sleep = (s) => new Promise((r) => setTimeout(r, s * 1000));

const welcome = async () => {
    const title = chalkAnimation.glitch(
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
        message: "What is the message you would like to encrypt? ",
        default(){
            return "Hello world!"
        }
    })

    msg = String(message.name);
}

await welcome();
await askMsg();
const encryptedMsg = await encrypt(msg)
console.log(`Your encrypted message is:${encryptedMsg.encryptedData}`);