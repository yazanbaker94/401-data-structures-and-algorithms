'use strict';

let LinkedList = require('../linked-list');

describe('LinkedList Module()', ()=> {

    it('constructor()', ()=> {
        let newList = new LinkedList();
        expect(newList.head).toBeNull();
    });

    it('append()', ()=> {
        let newList = new LinkedList();
        let initialValue = 'First Item';
        newList.append(initialValue);
        expect(newList.head.value).toEqual(initialValue);

        let anotherOne = 'Second Item';
        newList.append(anotherOne);
        expect(newList.head.next.value).toEqual(anotherOne);
        expect(newList.head.next.next).toBeNull();
        expect(newList.head.value).toEqual(initialValue);
    });
});


describe('insert test', () => {

    it(' adding value to the list', () => {
      const ll = new LinkedList();
      let firstVal = 'first val'
      ll.insert(firstVal);
    //   console.log(ll.head.value)

      expect(ll.head.value).toEqual(firstVal);
      let secondVal = 'second val'
      ll.insert(secondVal);
    //   console.log(ll.head.value)

      expect(ll.head.value).toEqual(secondVal);

     
    });
  });

  describe('include test', () => {
      it('checking if list got the value', () => {
          const ll = new LinkedList();
          let firstVal = 'first val'
          ll.insert(firstVal) ?
          expect(ll.includes(firstVal).toBeTruthy()):false
          let secondVal = 'second val';
          ll.insert(secondVal) ?
          expect(ll.includes(secondVal).toBeTruthy()):false
      })
  })

