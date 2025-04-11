import { expect, stub } from 'lovecraft';
import phantomaton from 'phantomaton';
import execution from 'phantomaton-execution';
import plugins from 'phantomaton-plugins';
import util from './util.js';
import automason from './automason.js';

describe('Automason', () => {
  let phantomatonStub;
  let gallowsStub;
  let executeStub;

  beforeEach(() => {
    executeStub = stub().returns('Simulated execution result');
    gallowsStub = stub(util, 'gallows').returns({
      execute: executeStub
    });
    phantomatonStub = stub(phantomaton, 'default').callThrough();
  });

  afterEach(() => {
    phantomatonStub.restore();
    gallowsStub.restore();
  });

  it('calls phantomaton with the correct arguments', () => {
    const action = 'test-action';
    const attributes = { project: 'test-project' };
    const body = 'test-body';

    const result = automason(action, attributes, body);

    expect(phantomatonStub.calledWith(body, {
      install: ['phantomaton-execution', 'phantomaton-projects', { 
        install: [
          expect.any(Object)
        ] 
      }]
    })).to.be.true;

    expect(executeStub.calledWith(action, attributes, body)).to.be.true;
    expect(result).to.equal('Simulated execution result');
  });

  it('handles empty attributes and body', () => {
    const result = automason('test-action');

    expect(phantomatonStub.calledWith('', { 
      install: ['phantomaton-execution', 'phantomaton-projects', { 
        install: [
          expect.any(Object)
        ] 
      }]
    })).to.be.true;

    expect(result).to.equal('Simulated execution result');
  });
});