// Implementaion using Array

class Stack {
  constructor(length = 5) {
    this.data = new Array(length);
    this.topElement = 0;
  }

  push(value) {
    if (this.topElement == this.data.length) {
      console.log("Stack is Full");
      return;
    }

    this.data[this.topElement] = value;
    this.topElement++;
  }

  pop() {
    if (this.topElement == 0) {
      console.log("Stack is Empty");
      return;
    }

    this.topElement--;

    return this.data[this.topElement];
  }

  printAll() {
    for (let i = 0; i < this.topElement; i++) {
      console.log(this.data[i]);
    }
  }

  top() {
    return this.topElement > 0 ? this.data[this.topElement - 1] : undefined;
  }

  isEmpty() {
    return this.topElement == 0 ? true : false;
  }

  size() {
    return this.topElement;
  }
}

// Implementaion using Linked List

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// First Implementation

// class Stack {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(value) {
//     const newNode = new Node(value);

//     if (this.length == 0) {
//       this.head = this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }

//     this.length++;
//   }

//   pop() {
//     let popValue;
//     if (this.length == 0) {
//       console.log("Stack is Empty");
//       return;
//     } else if (this.length == 1) {
//       popValue = this.head.value;
//       this.head = this.tail = null;
//     } else {
//       let currentNode = this.head;
//       let i = 1;

//       while (i < this.length - 1) {
//         currentNode = currentNode.next;
//         i++;
//       }
//       popValue = currentNode.value;

//       this.tail = currentNode;
//       currentNode.next = null;
//     }

//     this.length--;

//     return popValue;
//   }

//   printAll() {
//     console.log("length = " + this.length);
//     let currentNode = this.head;

//     while (currentNode) {
//       console.log(currentNode.value);
//       currentNode = currentNode.next;
//     }
//   }

//   top() {
//     return this.length > 0 ? this.tail.value : undefined;
//   }

//   isEmpty() {
//     return this.length == 0 ? true : false;
//   }

//   size() {
//     return this.length;
//   }
// }

// Second Implementation

// class Stack {
//   constructor() {
//     this.head = null;
//   }

//   push(value) {
//     const newNode = new Node(value);

//     if (!this.head) {
//       this.head = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//   }

//   pop() {
//     if (!this.head) {
//       console.log("Stack is Empty");

//       return;
//     } else {
//       let popValue = this.head.value;

//       this.head = this.head.next;

//       return popValue;
//     }
//   }

//   printAll() {
//     let currentNode = this.head;

//     while (currentNode) {
//       console.log(currentNode.value);
//       currentNode = currentNode.next;
//     }
//   }

//   top() {
//     return this.head ? this.head.value : undefined;
//   }

//   isEmpty() {
//     return !this.head ? true : false;
//   }

//   size() {
//     let n = 0;
//     let currentNode = this.head;

//     while (currentNode) {
//       currentNode = currentNode.next;
//       n++;
//     }

//     return n;
//   }
// }

let stack = new Stack();

console.log("top = " + stack.top());
console.log("----------------------------");

console.log("isEmpty = " + stack.isEmpty());
console.log("----------------------------");

console.log("size = " + stack.size());
console.log("----------------------------");

console.log("push = 1");
stack.push(1);
stack.printAll();
console.log("----------------------------");

console.log("push = 2");
stack.push(2);
stack.printAll();
console.log("----------------------------");

console.log("push = 3");
stack.push(3);
stack.printAll();
console.log("----------------------------");

console.log("push = 4");
stack.push(4);
stack.printAll();
console.log("----------------------------");

console.log("push = 5");
stack.push(5);
stack.printAll();
console.log("----------------------------");

console.log("push = 6");
stack.push(6);
stack.printAll();
console.log("----------------------------");

console.log("pop = " + stack.pop());
stack.printAll();
console.log("----------------------------");

console.log("pop = " + stack.pop());
stack.printAll();
console.log("----------------------------");

console.log("top = " + stack.top());
console.log("----------------------------");

console.log("isEmpty = " + stack.isEmpty());
console.log("----------------------------");

console.log("size = " + stack.size());
console.log("----------------------------");

module.exports = Stack;
