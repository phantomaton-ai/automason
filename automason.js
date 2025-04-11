import phantomaton from 'phantomaton';
import execution from 'phantomaton-execution';
import plugins from 'phantomaton-plugins';
import util from './util.js';

export default (action, attributes, body) => phantomaton(body, {
  install: ['phantomaton-execution', 'phantomaton-projects', { install: [
    plugins.define(plugins.start).with(
      execution.command
    ).as((commands) => () => util.gallows(commands).execute(
      action, attributes, body
    ))
  ] }]
});