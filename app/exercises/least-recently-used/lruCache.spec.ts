import { DoublyLinkedList, LRUCache } from "./lruCache";

describe("DoublyLinkedList", () => {
  it("works as expected", () => {
    const dll = new DoublyLinkedList();
    expect(dll.head).toBeNull();
    expect(dll.tail).toBeNull();

    for (const i of Array.from(Array(8).keys())) {
      dll.append(i);
    }

    expect(String(dll)).toEqual("[0, 1, 2, 3, 4, 5, 6, 7]");
    expect(dll.head!.data).toEqual(0);
    expect(dll.tail!.data).toEqual(7);

    expect(dll.search(7)!.data).toEqual(7);
    expect(dll.search(11)).toBeNull();

    dll.delete(0);
    dll.delete(3);
    dll.delete(7);
    expect(String(dll)).toEqual("[1, 2, 4, 5, 6]");
    expect(dll.head!.data).toEqual(1);
    expect(dll.tail!.data).toEqual(6);

    dll.moveToTail(6);
    expect(String(dll)).toEqual("[1, 2, 4, 5, 6]");
    expect(dll.tail!.data).toEqual(6);

    dll.moveToTail(1);
    expect(String(dll)).toEqual("[2, 4, 5, 6, 1]");
    expect(dll.tail!.data).toEqual(1);

    dll.moveToTail(4);
    expect(String(dll)).toEqual("[2, 5, 6, 1, 4]");
    expect(dll.tail!.data).toEqual(4);
  });
});

describe("LRUCache", () => {
  it("should correctly evict least recently used items (small capacity)", () => {
    const lruCache = new LRUCache(2);
    lruCache.put(1, 1);
    lruCache.put(2, 2);
    expect(lruCache.get(1)).toEqual(1);
    lruCache.put(3, 3);
    expect(lruCache.get(1)).toEqual(-1);
    expect(lruCache.get(2)).toEqual(2);
    expect(lruCache.get(3)).toEqual(3);
  });

  it("should correctly evict least recently used items (large capacity)", () => {
    const lruCache = new LRUCache(5);

    // Populate the cache with 8 values
    lruCache.put(1, 1);
    lruCache.put(2, 2);
    lruCache.put(3, 3);
    lruCache.put(4, 4);
    lruCache.put(5, 5);
    lruCache.put(6, 6);
    lruCache.put(7, 7);
    lruCache.put(8, 8);

    // Expect values 1, 2, 3, 4 to be evicted (least recently used)
    expect(lruCache.get(1)).toBe(-1);
    expect(lruCache.get(2)).toBe(-1);
    expect(lruCache.get(3)).toBe(-1);

    // Expect values 4, 5, 6, 7, 8 to still be in the cache
    expect(lruCache.get(4)).toBe(4);
    expect(lruCache.get(5)).toBe(5);
    expect(lruCache.get(6)).toBe(6);
    expect(lruCache.get(7)).toBe(7);
    expect(lruCache.get(8)).toBe(8);

    // Update a value to make it the most recently used
    lruCache.put(5, 55);

    // Add another new value
    lruCache.put(9, 9);

    // Expect value 4 to be evicted (least recently used)
    expect(lruCache.get(4)).toBe(-1);

    // Expect values 6, 7, 8, 5, and 9 to still be in the cache
    expect(lruCache.get(6)).toBe(6);
    expect(lruCache.get(7)).toBe(7);
    expect(lruCache.get(8)).toBe(8);
    expect(lruCache.get(5)).toBe(55);
    expect(lruCache.get(9)).toBe(9);
  });
});
