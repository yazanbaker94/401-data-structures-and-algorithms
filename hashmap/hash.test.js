const HashMap = require('./index').HashMap;

const leftJoins = require('./index').leftJoins;




describe('HashMap Tests', () => {
  const hashmap = new HashMap(2000);

  test('add', () => {

    hashmap.add('Real', 'Madrid');
    hashmap.add('Bayern', 'Munich');
    hashmap.add('Leo', 'Messi');

    expect(hashmap.contains('hello')).toEqual(false);
    expect(hashmap.contains('Leo')).toEqual(true);

  })
  it('retrieve based on a key returns the value stored', () => {
    expect(hashmap.get('Real')).toEqual(['Madrid'])
  })
  test('hash a key to an in-range value', () => {
    expect(hashmap.hash('Yazan')).toBe(1785)
  })
  it('returns null for a key that does not exist in the HashMap', () => {
    expect(hashmap.get('hello')).toBe(null)
  })
  test('retrieve a value from a bucket within the HashMap that has a collision', () => {
    hashmap.add('leo', 'messi')
    expect(hashmap.get('leo')).toEqual(["messi"])
  })
});

describe('Left Joins Test', () => {
  const hashMap1 = new HashMap(2000);
  hashMap1.add('Club', 'Real Madrid');
  hashMap1.add('CL CUPS', '13');

  const hashMap2 = new HashMap(2000);
  hashMap2.add('Club', 'PSG');
  hashMap2.add('CUPS', '2');


  it('successfully return correct result', () => {
    expect(leftJoins(hashMap1, hashMap2)).toEqual(
      [
        ["CL CUPS", "13", null,],
        ["Club", "Real Madrid", ["PSG",],],
      ]
    );
  });
});

