import { expect } from 'lovecraft';
import { PassThrough } from 'stream';
import read from './read.js';

describe('Read Stream', () => {
  it('reads content from a stream', async () => {
    const stream = new PassThrough();
    
    // Create a promise to resolve when the read is complete
    const readPromise = read(stream);

    // Write some content to the stream
    stream.write('Hello, ');
    stream.write('world!');
    stream.end();

    // Wait for the read to complete
    const result = await readPromise;

    expect(result).to.equal('Hello, world!');
  });

  it('handles empty stream', async () => {
    const stream = new PassThrough();
    
    // Create a promise to resolve when the read is complete
    const readPromise = read(stream);

    // End the stream immediately
    stream.end();

    // Wait for the read to complete
    const result = await readPromise;

    expect(result).to.equal('');
  });

  it('handles stream with multiple writes', async () => {
    const stream = new PassThrough();
    
    // Create a promise to resolve when the read is complete
    const readPromise = read(stream);

    // Write multiple chunks
    stream.write('First ');
    stream.write('chunk ');
    stream.write('of ');
    stream.write('data');
    stream.end();

    // Wait for the read to complete
    const result = await readPromise;

    expect(result).to.equal('First chunk of data');
  });

  it('handles timeouts', async () => {
    expect(await read(new PassThrough())).eq('');
  });
});
