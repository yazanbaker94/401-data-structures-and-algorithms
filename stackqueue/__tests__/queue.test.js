const Queue = require('../Queue');




describe('queue', () => {

  it(' enqueue to queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.head.value).toEqual(1);
    expect(queue.head.next.value).toEqual(2);
    expect(queue.head.next.next.value).toEqual(3);
   


  });

  it(' peek of queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek().value).toEqual(1);
    expect(queue.peek().next.value).toEqual(2);
    expect(queue.peek().next.next.value).toEqual(3);

  });

  it(' dequeue from the queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    

    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);

    expect(queue.head).toEqual(null);



  });

  it('is queue empty', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();
    queue.enqueue(3);
    expect(queue.isEmpty()).toBeFalsy();
  });

});