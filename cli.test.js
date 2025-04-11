import { expect, stub } from 'lovecraft';
import { PassThrough } from 'stream';
import automason from './automason.js';
import read from './read.js';

// Mock process.argv and process.stdin
describe('CLI', () => {
  let originalArgv;
  let originalStdin;
  let automasonStub;

  beforeEach(() => {
    originalArgv = process.argv;
    originalStdin = process.stdin;
    automasonStub = stub(automason, 'default');
  });

  afterEach(() => {
    process.argv = originalArgv;
    process.stdin = originalStdin;
    automasonStub.restore();
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

    // Mock an empty stdin stream
    const stdinMock = new PassThrough();
    process.stdin = stdinMock;

    // Import the CLI module dynamically to reset module state
    const cli = await import('./cli.js');

    expect(automasonStub.calledWith(
      'write', 
      { project: 'test-project', file: 'test.txt' }, 
      ''
    )).to.be.true;
  });

  it('handles stdin input', async () => {
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
    process.stdin = stdinMock;
    stdinMock.write('test content');
    stdinMock.end();

    // Import the CLI module dynamically to reset module state
    const cli = await import('./cli.js');

    expect(automasonStub.calledWith(
      'write', 
      { project: 'test-project', file: 'test.txt' }, 
      'test content'
    )).to.be.true;
  });
});