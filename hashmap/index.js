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



function leftJoins(hashMap1, hashMap2) {
    let Array1 = [];

    for (let i = 0; i < hashMap1.storage.length; i++) {
        if (hashMap1.storage[i] !== undefined) {
            let Array2 = [];
            let key = (Object.keys(hashMap1.storage[i].head.value)[0]);
            Array2.push(key);
            Array2.push(hashMap1.storage[i].head.value[key]);
            if (hashMap2.contains(key)) {
                Array2.push(hashMap2.get(key));
            } else {
                Array2.push(null);
            }
            Array1.push(Array2);
        }
    }
    return Array1;
}





module.exports = { Node, LinkedList, HashMap, leftJoins}