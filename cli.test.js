import { expect, stub } from 'lovecraft';
import { PassThrough } from 'stream';
import util from './util.js';

// Mock process.argv and process.stdin
describe('CLI', () => {
  let originalArgv;
  let originalStdin;
  let gallowsStub;
  let executeStub;

  beforeEach(() => {
    originalArgv = process.argv;
    originalStdin = process.stdin;
    executeStub = stub().returns('Simulated execution result');
    gallowsStub = stub(util, 'gallows').returns({
      execute: executeStub
    });
  });

  afterEach(() => {
    process.argv = originalArgv;
    Object.defineProperty(process, 'stdin', {
      value: originalStdin,
      writable: false
    });
    gallowsStub.restore();
  });

  it('parses command-line arguments correctly', async () => {
    // Simulate CLI arguments
    process.argv = [
      'node', 
      'cli.js', 
      'write', 
      'project=test-project', 
      'file=test.txt'
    ];

    // Mock a stdin stream with content
    const stdinMock = new PassThrough();
    Object.defineProperty(process, 'stdin', {
      value: stdinMock,
      writable: false
    });
    stdinMock.write('test content');
    stdinMock.end();

    // Import the CLI module dynamically to reset module state
    await import('./cli.js');
    await new Promise(r => setTimeout(r, 1));

    expect(executeStub.calledOnceWith(
      'write', 
      { project: 'test-project', file: 'test.txt' }, 
      'test content'
    )).to.be.true;
  });
});