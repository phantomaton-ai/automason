import { expect } from 'lovecraft';
import gallows from 'gallows';
import util from './util.js';

describe('Util', () => {
  it('exposes gallows', () => {
    expect(util.gallows).to.equal(gallows);
  });
});