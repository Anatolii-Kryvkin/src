const assert = require('assert');
const { add, sub, mult, div } = require('../logic');

describe('add', function() {
  it('enter 6+4', function() {
    const res = add(6, 4);
    assert.equal(res, 10);
  });
  it('enter 4343+90', function() {
    assert.equal(add(4343, 90), 4433);
  });
  it('enter 52.23+4', function() {
    assert.equal(add(52.236, 4), 56.236);
  });
  it('enter 0.22+231', function() {
    assert.equal(add(0.22, 231), 231.22);
  });
  it('enter 34+0', function() {
    assert.equal(add(34, 0), 34);
  });
});

describe('subtract', function() {
  it('enter 10-9', function() {
    assert.equal(sub(10, 9), 1);
  });
  it('enter 4343-39', function() {
    assert.equal(sub(4343, 39), 4304);
  });
  it('enter 51.26-7', function() {
    assert.equal(sub(51.26, 7), 44.26);
  });
  it('enter 0.458-0.52', function() {
    assert.equal(sub(0.458, 0.52), -0.062);
  });
  it('enter 23-0', function() {
    assert.equal(sub(23, 0), 23);
  });
});

describe('multiply', function() {
  it('enter 3*8', function() {
    assert.equal(mult(3, 8), 24);
  });
  it('enter 44*42', function() {
    assert.equal(mult(44, 42), 1848);
  });
  it('enter 0.85*5', function() {
    assert.equal(mult(0.85, 5), 4.25);
  });
  it('enter 0.8*0.11', function() {
    assert.equal(mult(0.8, 10), 8);
  });
  it('enter 103*0', function() {
    assert.equal(mult(103, 0), 0);
  });
});

describe('divide', function() {
  it('enter 33/3', function() {
    assert.equal(div(33, 3), 11);
  });
  it('enter 8/4', function() {
    assert.equal(div(8, 4), 2);
  });
  it('enter 0.8/2', function() {
    assert.equal(div(0.8, 2), 0.4);
  });
  it('enter 123/3', function() {
    assert.equal(div(123, 3), 41);
  });
  it('enter 54/0', function() {
    assert.equal(div(54, 0), 'Error');
  });
});
