import heapq

class Node:
    def __init__(self, char, freq):
        self.char = char
        self.freq = freq
        self.left = None
        self.right = None

    def __lt__(self, other):
        return self.freq < other.freq

def generate_huffman_codes(chars, freqs):
    n = len(chars)
    
    # Create leaf nodes and initialize the priority queue
    pq = [Node(chars[i], freqs[i]) for i in range(n)]
    heapq.heapify(pq)

    # Build the Huffman tree
    while len(pq) > 1:
        left = heapq.heappop(pq)
        right = heapq.heappop(pq)
        merged_node = Node(None, left.freq + right.freq)
        merged_node.left = left
        merged_node.right = right
        heapq.heappush(pq, merged_node)

    root = pq[0]

    # Traverse the tree to generate Huffman codes
    def assign_codes(node, code, huffman_codes):
        if node:
            if node.char:
                huffman_codes[node.char] = code
            assign_codes(node.left, code + "0", huffman_codes)
            assign_codes(node.right, code + "1", huffman_codes)

    huffman_codes = {}
    assign_codes(root, "", huffman_codes)
    
    return huffman_codes

# Input
T = int(input())
for _ in range(T):
    N = int(input())
    chars = input().split()
    freqs = list(map(int, input().split()))

    # Generate Huffman codes
    huffman_codes = generate_huffman_codes(chars, freqs)

    # Output
   # Output
    for char, freq in sorted(zip(chars, freqs), key=lambda x: huffman_codes[x[0]]):
       print("{}: {}".format(char, huffman_codes[char]))
