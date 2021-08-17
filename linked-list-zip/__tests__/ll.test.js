'use strict';


let { LinkedList, zipLists } = require('../linked-list');



describe('LinkedList', () => {
  it('initial test', () => {
    const ll = new LinkedList();
    expect(ll).toBeDefined();
    expect(ll.head).toBeNull();
  });



  it('testing the zip ', () => {
    let ll = new LinkedList();
    let ll2 = new LinkedList();


    ll.insert(4);
    ll.insert(6);
    ll.insert(8);


    ll2.insert(5);
    ll2.insert(7);
    ll2.insert(9);


    expect(zipLists(ll2, ll).head.value).toEqual(4);
    expect(zipLists(ll2, ll).head.next.value).toEqual(5);
    expect(zipLists(ll2, ll).head.next.next.value).toEqual(6);



  })


});