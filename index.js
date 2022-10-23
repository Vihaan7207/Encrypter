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

}

await welcome();