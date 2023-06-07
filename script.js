class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.listHead = null;
    }

    append(value) {
        if (this.listHead == null) {
            this.listHead = new Node(value);
        } else {
            let tmp = this.listHead;
            while (tmp.nextNode != null) {
                tmp = tmp.nextNode;
            }
            tmp.nextNode = new Node(value);
        }
    }

    prepend(value) {
        if (this.listHead == null) {
            this.listHead = new Node(value);
        } else {
            let tmp = this.listHead;
            this.listHead = new Node(value);
            this.listHead.nextNode = tmp;
        }
    }

    size() {
        let tmp = this.listHead;
        let size = 0;
        while (tmp != null) {
            size++;
            tmp = tmp.nextNode;
        }
        return size;
    }

    head() {
        return this.listHead;
    }

    tail() {
        if (this.listHead == null) {
            return null;
        } else {
            let tmp = this.listHead;
            while (tmp.nextNode != null) {
                tmp = tmp.nextNode;
            }
            return tmp;
        }
    }

    at(index) {
        let size = this.size();
        if (index < 0 || index >= size || this.listHead == null) {
            return 'There is no item for this index';
        }
        let counter = 0;
        let tmp = this.listHead;
        while (counter < index) {
            counter++;
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    pop() {
        if (this.listHead == null) {
            return;
        }
        if (this.listHead.nextNode == null) {
            this.listHead = null;
        } else {
            let tmp = this.listHead;
            while (tmp.nextNode.nextNode != null) {
                tmp = tmp.nextNode;
            }
            tmp.nextNode = null;
        }
    }
    
    contains(value) {
        let tmp = this.listHead;
        while (tmp != null) {
            if (value == tmp.value) {
                return true;
            }
            tmp = tmp.nextNode;
        }
        return false;
    }

    find(value) {
        let size = this.size();
        let tmp = this.listHead;
        for (let i = 0; i < size; i++) {
            if (tmp.value == value) {
                return i;
            }
            tmp = tmp.nextNode;
        }
        return null;
    }

    toString() {
        let tmp = this.listHead;
        let finalString = '';
        while (tmp != null) {
            finalString = finalString + `( ${tmp.value} ) -> `;
            tmp = tmp.nextNode;
        }
        if (tmp == null) {
            finalString = finalString + 'null';
        }
        return finalString;
    }

    insertAt(value, index) {
        if (index < 0) {
            console.log('Please enter valid index');
            return;
        }
        if (index == 0 || this.listHead == null) {
            this.prepend(value);
        } else {
            let prev = null;
            let cur = this.listHead;
            let i = 0;
            while (i < index) {
                prev = cur;
                cur = cur.nextNode;
                i++;
                if (cur == null) {
                    break; // if index is bigger than last node of list, add to the end
                }
            }
            let newNode = new Node(value);
            prev.nextNode = newNode;
            newNode.nextNode = cur;
        }
    }

    removeAt(index) {
        let size = this.size();
        if (index < 0 || index >= size) {
            return;
        }
        if (index == 0) {
            this.listHead = this.listHead.nextNode;
        } else {
            let prev = null;
            let cur = this.listHead;
            for (let i = 0; i < index; i++) {
                prev = cur;
                cur = cur.nextNode;
            }
            prev.nextNode = cur.nextNode;
        }
    }
}

const linkedList = new LinkedList();
const emptyList = new LinkedList();
const oneItemList = new LinkedList();

oneItemList.append('hello');
linkedList.append('test1');
linkedList.append('test2');
linkedList.append('test3');
linkedList.append('test4');
linkedList.prepend('prepend test');
console.log(linkedList.toString());
// console.log(linkedList.size());
// console.log(emptyList.size());
// console.log(oneItemList.size());
// console.log(linkedList.head());
// console.log(emptyList.head());
// console.log(oneItemList.head());
// console.log(linkedList.tail());
// console.log(emptyList.tail());
// console.log(oneItemList.tail());
// console.log(emptyList);
// console.log(linkedList.at(4));
// console.log(linkedList.at(5));
// console.log(linkedList.at(-1));
// console.log(emptyList.at(0));
// console.log(oneItemList.at(0));
// console.log(oneItemList.at(1));
// linkedList.pop();
// console.log(JSON.stringify(linkedList));
// emptyList.pop();
// console.log(JSON.stringify(emptyList));
// oneItemList.pop();
// console.log(JSON.stringify(oneItemList));
// console.log(linkedList.contains('test3'));
// console.log(linkedList.contains('lksdjfl'));
// console.log(emptyList.contains('fjlsdkjf'));
// console.log(oneItemList.contains('hello'));
// console.log(linkedList.find('test4'));
// console.log(linkedList.find('lkdfjslk'));
// console.log(emptyList.find('jkdfjs'));
// console.log(oneItemList.find('hello'));
// console.log(oneItemList.find('ldkfjs'));
// console.log(linkedList.toString());
// console.log(emptyList.toString());
// console.log(oneItemList.toString());
// linkedList.insertAt('TEST', 3);
// console.log(linkedList.toString());
// emptyList.insertAt('TEST', 0);
// console.log(emptyList.toString());
// oneItemList.insertAt('TEST', 1);
// console.log(oneItemList.toString());
// linkedList.removeAt(3);
// console.log(linkedList.toString());
// emptyList.removeAt(0);
// console.log(emptyList.toString());
// oneItemList.removeAt(0);
// console.log(oneItemList.toString());