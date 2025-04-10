import gallows from 'gallows';
import phantomaton from 'phantomaton';
import execution from 'phantomaton-execution';
import plugins from 'phantomaton-plugins';

export default (action, attributes, body) => phantomaton(body, {
  install: ['phantomaton-execution', 'phantomaton-projects', { install: [
    plugins.define(plugins.start).with(
      execution.command
    ).as((commands) => () => gallows(commands).execute(
      action, attributes, body
    ))
  ] }]
});
