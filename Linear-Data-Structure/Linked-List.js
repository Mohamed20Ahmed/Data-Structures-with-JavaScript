class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index) {
    if (index >= this.length || index < 0) {
      return undefined;
    }

    let currentNode = this.head;

    while (index) {
      currentNode = currentNode.next;

      index--;
    }

    return currentNode.value;
  }

  set(index, value) {
    let currentNode = this.head;

    while (index) {
      currentNode = currentNode.next;
      index--;
    }

    if (currentNode) {
      currentNode.value = value;
    }
  }

  addFirst(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  addLast(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  addAtPosition(index, value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let i = 0;
      let currentNode = this.head;

      while (i < index - 1 && currentNode) {
        currentNode = currentNode.next;
        i++;
      }

      if (currentNode) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }
    }

    this.length++;
  }

  deleteFirst() {
    if (this.length == 0) {
      return;
    } else if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;
  }

  deleteLast() {
    if (this.length == 0) {
      return;
    } else if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let i = 1;
      let currentNode = this.head;

      while (i < this.length - 1) {
        currentNode = currentNode.next;
        i++;
      }

      this.tail = currentNode;
      currentNode.next = null;
    }

    this.length--;
  }

  deleteSpecificPosition(index) {
    if (this.length == 0) {
      return;
    } else if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let i = 0;
      let currentNode = this.head;

      while (i < index - 1 && currentNode) {
        currentNode = currentNode.next;
        i++;
      }

      if (currentNode) {
        currentNode.next = currentNode.next.next;
      }
    }

    this.length--;
  }

  indexOf(value) {
    let i = 0;
    let currentNode = this.head;

    while (i < this.length) {
      if (currentNode.value == value) {
        return i;
      }

      currentNode = currentNode.next;
      i++;
    }

    return -1;
  }

  size() {
    let size = 0;
    let currentNode = this.head;

    while (currentNode) {
      currentNode = currentNode.next;
      size++;
    }

    return size;
  }

  printAll() {
    let i = 0;
    let currentNode = this.head;
    while (currentNode) {
      console.log(i + " " + currentNode.value);

      currentNode = currentNode.next;
      i++;
    }
  }
}

const linkedList = new LinkedList();

linkedList.addFirst("First");
linkedList.printAll();
console.log("----------------------------");

linkedList.addLast("Last");
linkedList.printAll();
console.log("----------------------------");

linkedList.addAtPosition(1, "position 1");
linkedList.printAll();
console.log("----------------------------");

console.log("get 0 = " + linkedList.get(0));
console.log("get 1 = " + linkedList.get(1));
console.log("----------------------------");

linkedList.set(1, "set 1");
linkedList.printAll();
console.log("----------------------------");

linkedList.deleteFirst();
linkedList.printAll();
console.log("----------------------------");

linkedList.deleteLast();
linkedList.printAll();
console.log("----------------------------");

linkedList.deleteSpecificPosition(1);
linkedList.printAll();
console.log("----------------------------");

console.log("indexOf 'set 0' = " + linkedList.indexOf("set 0"));
console.log("----------------------------");

console.log("size = " + linkedList.size());
console.log("----------------------------");
