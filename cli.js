#!/usr/bin/env node

import automason from './automason.js';
import read from './read.js';

async function main() {
  const action = process.argv[2];
  const attributes = process.argv.slice(3)
    .filter(arg => arg.includes('='))
    .map(arg => arg.split('='))
    .reduce((attrs, [attr, val]) => ({ ...attrs, [attr]: val }), {});

  const body = await read(process.stdin);

  automason(action, attributes, body);
}

main();