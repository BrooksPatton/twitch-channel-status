const chai = require('chai');

const should = chai.should();

describe('Canary test', () => {
  it('five should be five', () => {
    const five = 5;

    five.should.equal(5);
  });
});
