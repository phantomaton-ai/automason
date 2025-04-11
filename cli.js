#!/usr/bin/env node

import automason from './automason.js';
import { stdin } from 'process';

async function readStdin() {
  return new Promise((resolve) => {
    let body = '';
    
    // Use a short timeout to detect if input is being piped
    const timeout = setTimeout(() => {
      resolve(body);
    }, 100);

    stdin.on('readable', () => {
      clearTimeout(timeout);
      let chunk;
      while ((chunk = stdin.read()) !== null) {
        body += chunk;
      }
    });

    stdin.on('end', () => {
      clearTimeout(timeout);
      resolve(body);
    });
  });
}

async function main() {
  const action = process.argv[2];
  const attributes = process.argv.slice(3)
    .filter(arg => arg.includes('='))
    .map(arg => arg.split('='))
    .reduce((attrs, [attr, val]) => ({ ...attrs, [attr]: val }), {});

  const body = await readStdin();

  automason(action, attributes, body);
}

main();