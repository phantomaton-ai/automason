#!/usr/bin/env node

import automason from './automason.js';

const action = process.argv[2];
const attributes = { project: 'hm' };
const body = ''; // TODO stdin

automason(action, attributes, body);