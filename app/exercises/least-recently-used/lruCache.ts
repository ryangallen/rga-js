class LinkedNode<T> {
  data: T;
  previous: LinkedNode<T> | null = null;
  next: LinkedNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }

  toString(): string {
    return String(this.data);
  }
}

export class DoublyLinkedList<T> {
  head: LinkedNode<T> | null = null;
  tail: LinkedNode<T> | null = null;
  length: number = 0;

  constructor() {}

  append(data: T): void {
    const node = new LinkedNode(data);
    node.previous = this.tail;

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      if (this.tail) {
        this.tail.next = node;
      }
      this.tail = node;
    }
    this.length++;
  }

  search(data: T): LinkedNode<T> | null {
    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.data === data) {
        break;
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  delete(data: T): void {
    const nodeToDelete = this.search(data);
    if (!nodeToDelete) return;

    if (nodeToDelete === this.head) {
      this.head = nodeToDelete.next;
      this.head!.previous = null;
    } else if (nodeToDelete === this.tail) {
      this.tail = nodeToDelete.previous;
      this.tail!.next = null;
    } else {
      nodeToDelete.previous!.next = nodeToDelete.next;
      nodeToDelete.next!.previous = nodeToDelete.previous;
    }
    this.length--;
  }

  deleteHead(): void {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
    this.head!.previous = null;
    this.length--;
  }

  moveToTail(data: T): void {
    const nodeToMove = this.search(data);
    if (!nodeToMove || nodeToMove === this.tail) return;

    if (nodeToMove === this.head) {
      this.head = nodeToMove.next;
    } else {
      const prev = nodeToMove.previous;
      const next = nodeToMove.next;
      prev!.next = next;
      next!.previous = prev;
    }

    this.tail!.next = nodeToMove;
    nodeToMove.previous = this.tail;
    nodeToMove.next = null;
    this.tail = nodeToMove;
  }

  getNodes(): Array<LinkedNode<T>> {
    const nodes = [];
    let currentNode = this.head;

    while (currentNode != null) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }

  toString(): string {
    return `[${this.getNodes().join(", ")}]`;
  }
}

export class LRUCache<T> {
  capacity: number;
  items: {
    [key: number]: number;
  };
  cacheKeys: DoublyLinkedList<number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.items = {};
    this.cacheKeys = new DoublyLinkedList();
  }

  get(key: number): number {
    return this.cacheKeys.search(key) != null ? this.items[key] : -1;
  }

  put(key: number, value: number): void {
    this.items[key] = value;

    const existingNode = this.cacheKeys.search(key);
    if (existingNode) {
      this.cacheKeys.moveToTail(existingNode.data);
    } else {
      this.cacheKeys.append(key);
    }

    if (this.cacheKeys.length > this.capacity) {
      this.cacheKeys.deleteHead();
    }
  }
}
