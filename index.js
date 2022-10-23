#!/usr/bin.env node

import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation'

let msg;

const sleep = (m = 2) => new Promise((r) => setTimeout(r, s * 1000));

const welcome = async () => {
    const rainbowTitle = chalkAnimation.rainbow(
        'JS Encrypter'
    )
}

await welcome();