// stack: last in fisrst out (LIFO)


  function Stack(){

    //1. implement a stack in TS
    class Stack<T> {
        private items: T[] = [];
      
        // Push an item onto the stack
        push(item: T): void {
          this.items.push(item);
        }
      
        // Remove and return the top item from the stack
        pop(): T | undefined {
          if (this.isEmpty()) {
            return undefined;
          }
          return this.items.pop();
        }
      
        // Return the top item without removing it
        peek(): T | undefined {
          if (this.isEmpty()) {
            return undefined;
          }
          return this.items[this.items.length - 1];
        }
      
        // Check if the stack is empty
        isEmpty(): boolean {
          return this.items.length === 0;
        }
      
        // Get the size of the stack
        size(): number {
          return this.items.length;
        }
      
        // Clear the stack
        clear(): void {
          this.items = [];
        }
      }

    //2. Useage
    const  stack = new Stack<number>();

    stack.push(10);
    stack.push(20);
    stack.push(30);

    return(
        <div>
            <h1>Stack:</h1>
            <p>{`checking the top item: ${stack.peek()}`}</p>
            <p>{`Removes the last element: ${stack.pop()}`}</p>
            <p>{`Returns the number of elements in the stack: ${stack.size()}`}</p>
            <p>{`Check if the stack is empty: ${stack.isEmpty()}`}</p>
        </div>
    )
  }

export default Stack