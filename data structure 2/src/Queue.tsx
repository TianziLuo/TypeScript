// queue: first in fisrst out (FIFO)

function Queue(){

//1. implement a queue in TS
    class Queue<T> {
    private items: T[] = [];
  
    // Add an element to the end of the queue
    enqueue(item: T): void {
      this.items.push(item);
    }
  
    // Remove and return the element from the front of the queue
    dequeue(): T | undefined {
      if (this.isEmpty()) {
        return undefined; // Return undefined if the queue is empty
      }
      return this.items.shift(); // Use shift() to remove the first element from the array
    }
  
    // View the element at the front of the queue without removing it
    peek(): T | undefined {
      if (this.isEmpty()) {
        return undefined; // Return undefined if the queue is empty
      }
      return this.items[0]; // Return the first element
    }
  
    // Check if the queue is empty
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    // Get the size of the queue
    size(): number {
      return this.items.length;
    }
  
    // Clear the queue
    clear(): void {
      this.items = [];
    }
  }
  

 //2. Useage
 const queue = new Queue<string>();
 queue.enqueue("1");
 queue.enqueue("2");
 queue.enqueue("3");


 return(
    <div>
        <h1>Queue:</h1>
        <p>{`front element of the queue: ${queue.peek()}`}</p>
        <p>{`Removes the first(front) element: ${queue.dequeue()}`}</p>
        <p>{`Returns the number of elements in the queue: ${queue.size()}`}</p>
        <p>{`Check if the queue is empty: ${queue.isEmpty()}`}</p>
    </div>
 )

    
}
export default Queue
