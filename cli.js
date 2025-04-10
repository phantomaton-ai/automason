#!/usr/bin/env node

import automason from './automason.js';

// TODO: help

// TODO: first non -prefixed arg
const action = process.argv[2];

// TODO: parse from -prefixed args after action
//       e.g. --project hm or -p hm
const attributes = { project: 'hm' };

// TODO: Read from stdin or -i from before action
const body = '';

automason(action, attributes, body);