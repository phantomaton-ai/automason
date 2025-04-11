#!/usr/bin/env node

import automason from './automason.js';

const action = process.argv[2];
const attributes = process.argv.slice(3).map(
  arg => arg.split('=')
).reduce(
  (attrs, [attr, val]) => ({ ...attrs, [attr]: val }), {}
);

//TODO: Read from stdin?
const body = '';

automason(action, attributes, body);
