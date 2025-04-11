import { expect, stub } from 'lovecraft';
import util from './util.js';
import automason from './automason.js';

describe('Automason', () => {
  let gallowsStub;
  let executeStub;

  beforeEach(() => {
    executeStub = stub().returns('Simulated execution result');
    gallowsStub = stub(util, 'gallows').returns({
      execute: executeStub
    });
  });

  afterEach(() => {
    gallowsStub.restore();
  });

  it('executes actions with the correct arguments', async () => {
    const action = 'test-action';
    const attributes = { project: 'test-project' };
    const body = 'test-body';

    const result = await automason(action, attributes, body);

    expect(executeStub.calledWith(action, attributes, body)).to.be.true;
    expect(result).to.equal('Simulated execution result');
  });

  it('handles empty attributes and body', async () => {
    const result = await automason('test-action', {}, '');
    expect(result).to.equal('Simulated execution result');
  });
});