import { expect, stub } from 'lovecraft';
import phantomaton from 'phantomaton';
import gallows from 'gallows';
import automason from './automason.js';

describe('Automason', () => {
  let phantomatonStub;
  let gallowsStub;
  let executeStub;

  beforeEach(() => {
    executeStub = stub().returns('Simulated execution result');
    gallowsStub = stub(gallows, 'execute').returns(executeStub);
    phantomatonStub = stub(phantomaton, 'default').returns({
      install: [
        { 
          install: [
            { 
              execute: executeStub 
            }
          ]
        }
      ]
    });
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