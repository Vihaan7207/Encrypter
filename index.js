#!/usr/bin.env node

import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation'

let msg;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));