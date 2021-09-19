class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    prepend(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
    get(key) {
        let current = this.head;
        let value = [];
        while (current) {
            if (Object.keys(current.value).includes(key)) {
                value.push(current.value[key]);
            }
            current = current.next;
        }
        return value;
    }
}

class HashMap {
    constructor(size) {
        this.size = size;
        this.storage = new Array(size);
    }

    hash(key) {
        const sumCharCode = key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0);
        const hashKey = (sumCharCode * 19) % this.size;
        return hashKey;
    }

    add(key, value) {
        const hash = this.hash(key);
        if (!this.storage[hash]) {
            const list = new LinkedList();
            list.prepend({ [key]: value });
            this.storage[hash] = list;
        } else {
            this.storage[hash].prepend({ [key]: value });
            return this.storage[hash].head.value[key];
        }
    }

    contains(key) {
        const hash = this.hash(key);
        if (this.storage[hash]) {
            return true;
        } else {
            return false;
        }
    }

    get(key) {
        const hash = this.hash(key);
        if (!this.storage[hash]) {
            return null;
        } else {
            return this.storage[hash].get(key);
        }
    }
}

// code challenge 31
function repeatedWord(paragraph) {
    if (!paragraph) {
        return 'Empty paragraph!';
    }

    let hashMap = new HashMap(2000);
    let words = paragraph.toLowerCase().split(',').join('').split(' ');

    for (let i = 0; i < words.length; i++) {
        if (hashMap.contains(words[i])) {
            return words[i];
        } else {
            hashMap.add(words[i]);
        }
    }
    return 'The paragraph has no repeated words!';
}



module.exports = { Node, LinkedList, HashMap, repeatedWord }