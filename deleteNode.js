class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let head;

const deleteNode = (key) => {
    let current = head;
    let prev = null;
    if (current != key && current.val == key) {
        head = current.next;
        return;
    }
    while (current != null && current.val != key) {
        prev = current;
        current.next = prev.next;
    }
    if (current == null) return;
    prev.next = current.next;
}

const push = (data) => {
    let newNode = new Node(data);
    newNode.next = head;
    head = newNode;
}

const print = () => {
    let current = head;
    while (current != null) {
        console.log(current.val);
        current = current.next;
    }
}

push(1);
push(2);
push(3);
deleteNode(3)
print()