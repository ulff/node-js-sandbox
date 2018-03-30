const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      const res = utils.add(33, 11);
      expect(res).toBe(44).toBeA('number');
    });
    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  });
  describe('#square', () => {
    it('should square a number', () => {
      const res = utils.square(3);
      expect(res).toBeA('number').toBe(9);
    });
    it('should async square a number', (done) => {
      utils.asyncSquare(4, (result) => {
        expect(result).toBeA('number').toBe(16);
        done();
      });
    });
  });
});

it('should expect some values', () => {
  expect(12).toNotBe(11);
  expect({ name: 'ulff' }).toEqual({ name: 'ulff' });
  expect({ name: 'Ulff' }).toNotEqual({ name: 'ulff' });

  expect([2, 3, 4]).toInclude(2);
  expect([2, 3, 4]).toExclude(5);

  expect({
    name: 'ulff',
    age: 34,
    location: 'Gdansk',
  }).toInclude({
    age: 34,
  });

  expect({
    name: 'ulff',
    age: 34,
    location: 'Gdansk',
  }).toExclude({
    location: 'Krakow',
  });
});

it('should set first and last names', () => {
  let user = {
    name: 'ulff',
    age: 34,
    location: 'Gdansk',
  };

  user = utils.setName(user, 'Olaf Galazka');

  expect(user)
    .toBeA('object')
    .toInclude({
      firstName: 'Olaf',
      lastName: 'Galazka',
    });
});
