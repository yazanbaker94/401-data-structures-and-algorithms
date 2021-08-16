'use strict';

let LinkedList = require('../linked-list');

// describe('LinkedListInsertions Module()', ()=> {

//     it('constructor()', ()=> {
//         let newList = new LinkedList();
//         expect(newList.head).toBeNull();
//     });

//     it('append()', ()=> {
//         let newList = new LinkedList();
//         let initialValue = 1;
//         newList.append(initialValue);
//         expect(newList.head.value).toEqual(initialValue);

//         let anotherOne = 2;
//         newList.append(anotherOne);
//         expect(newList.head.next.value).toEqual(anotherOne);
//     });
// });


// describe('inserting before the node test', () => {
//   it('before', () => {
//     const ll = new LinkedList();

//     ll.append(5)
//     ll.append(7)
//     ll.append(8)
//     ll.append(11)

//     ll.insertBefore(7, 6)

//     expect(ll.head.value).toEqual(5);
//     expect(ll.head.next.value).toEqual(6)
//     expect(ll.head.next.next.value).toEqual(7)
//     expect(ll.head.next.next.next.value).toEqual(8)
//   });

// })

// describe('insert after test', () => {
//   it('after', () => {
//     const ll = new LinkedList();

//     ll.append(5)
//     ll.append(6)
//     ll.append(7)
//     ll.insertAfter(7, 8)

//     expect(ll.head.value).toEqual(5);
//     expect(ll.head.next.value).toEqual(6)
//     expect(ll.head.next.next.value).toEqual(7)
//     expect(ll.head.next.next.next.value).toEqual(8)
//   });

// })



it('Where k is greater than the length of the linked list ', () => {
  let ll = new LinkedList();

  ll.insert('4');
  ll.insert('5');
  ll.insert('6');
  ll.insert('8');
  ll.insert('10');

  

  expect(ll.KthFromTheEnd(14)).toEqual('Exception');


})


it('Where k and the length of the list are the same', () => {
  let ll = new LinkedList();

  ll.insert('4');
  ll.insert('5');
  ll.insert('6');
  ll.insert('8');
  ll.insert('10');

  


  expect(ll.KthFromTheEnd(4)).toEqual('10');

})


it('Where k is not a positive integer', () => {
  let ll = new LinkedList();

  ll.insert('4');
  ll.insert('5');
  ll.insert('6');
  ll.insert('8');
  ll.insert('10');

  


  expect(ll.KthFromTheEnd(-4)).toEqual('Exception');


})

it('Where the linked list is of a size 1', () => {
  let ll = new LinkedList();

  ll.insert('1');

  

  expect(ll.KthFromTheEnd(1)).toEqual(1);
 

})

it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
  let ll = new LinkedList();

  ll.insert('4');
  ll.insert('5');
  ll.insert('6');
  ll.insert('8');
  ll.insert('10');

  


  expect(ll.KthFromTheEnd(3)).toEqual('8');


})


  // describe('include test', () => {
  //     it('checking if list got the value', () => {
  //         const ll = new LinkedList();
  //         let firstVal = 'first val'
  //         ll.insertAt(firstVal) ?
  //         expect(ll.includes(firstVal).toBeTruthy()):false
  //         let secondVal = 'second val';
  //         ll.insert(secondVal) ?
  //         expect(ll.includes(secondVal).toBeTruthy()):false
  //     })
  // })

