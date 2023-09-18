import PageContent from "components/PageContent/PageContent";

export default function LeastRecentlyUsedPage() {
  return (
    <PageContent title="Least Recently Used" showCodeLink>
      <p className="mb-4">
        <strong>Problem:</strong> Implement a "Least Recently Used" (LRU) cache,
        which is a data structure that can store a fixed number of items. When
        the cache reaches its limit, it should remove the least recently used
        item to make space for a new item. Implement the LRU cache with the
        following operations:
      </p>
      <ol className="mb-4 list-decimal pl-8">
        <li className="mb-2">
          <code>get(key)</code>: Get the value of the key if it exists in the
          cache, otherwise return <code>-1</code>.
        </li>
        <li>
          <code>put(key, value)</code>: Insert or update the value if the key is
          not already present. When the cache reaches its capacity, it should
          invalidate and remove the least recently used item before inserting
          the new item.
        </li>
      </ol>

      <pre className="mb-4 overflow-x-auto rounded-md border-2 border-indigo-500 p-4">{`const lruCache = new LRUCache(2); // Capacity is 2
lruCache.put(1, 1); // Cache: {1=1}
lruCache.put(2, 2); // Cache: {1=1, 2=2}
lruCache.get(1);    // Returns 1
lruCache.put(3, 3); // Cache: {2=2, 3=3}, 1 is removed because it's the least recently used.
lruCache.get(2);    // Returns -1 (not found)
lruCache.get(3);    // Returns 3`}</pre>

      <p className="mb-4">
        <strong>Constraints</strong>
      </p>
      <ul className="mb-4 list-disc pl-8">
        <li className="mb-2">Capacity of the cache is a positive integer.</li>
        <li>Keys and values of the cache are positive integers.</li>
      </ul>
      <p className="mb-4">
        To solve this problem, you'll need to implement a data structure that
        can efficiently handle both the <code>get</code> and <code>put</code>{" "}
        operations while maintaining the order of usage. This typically involves
        using a combination of a hash map (for fast key-value lookups) and a
        doubly linked list (to keep track of the usage order).
      </p>
      <p className="mb-4">
        You can start by designing the structure of the <code>LRUCache</code>{" "}
        class and then implement the <code>get</code> and <code>put</code>{" "}
        methods accordingly. This problem tests your ability to design a complex
        data structure and implement efficient algorithms for cache management.
      </p>
    </PageContent>
  );
}
