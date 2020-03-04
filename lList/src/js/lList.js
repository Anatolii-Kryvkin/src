const List = require('../../../List/List').List;
const Node = require('./Node');


function Llist(array) {
    this.root = null;
    this.init(array);
    this.defaultArray = array;
}

Llist.prototype = Object.create(List.prototype);
Llist.prototype.constructor = Llist;

Llist.prototype.init = function (array) {
    this.root = new Node(array[array.length - 1]);
    for(let i = array.length - 2; i >= 0; i--)
    {
        this.addStart(array[i])
    }
};

Llist.prototype.size = function () {
    if(this.root) {
        let node = this.root;
        let size = 1;
        while (node.next) {
            node = node.next;
            size++
        }
        return size;
    }
    return 0;
};

Llist.prototype.addStart = function (elem) {
    const node = new Node(elem);
    node.next = this.root;
    this.root = node;
};

Llist.prototype.addEnd = function(elem) {
    const node = new Node(elem);
    let last = this.root;
    while (last.next){
        last = last.next;
    }

    last.next = node;
};

Llist.prototype.delStart = function() {
    let node = this.root;
    if (this.root != null) {
        this.root = this.root.next;
    } 
    return node.val;
}

Llist.prototype.get = function(position) {
    let node = this.root;
    for(let i=0; i<position; i++) {
        if (node.next != null) {
            node = node.next;   
        } else {
             return 'index out of range'
        }       
    }
    return node.val;
}

Llist.prototype.delEnd = function() {
    let node = this.root;
    let value;
    while (node.next.next) {
        node = node.next;
    }
    value = node.next.val;
    node.next = null;
    return value;
}

Llist.prototype.addPos = function(position, elem) {
    let node = new Node(elem);
    let newElem = this.root;
        if(position == 0) {
            return this.addStart(node.val)
        } 
        if (position == this.size()) {
            return this.addEnd(node.val);
        }
        for (i = 0; i < position-1; i++) {
            newElem = newElem.next;
        }
        node.next = newElem.next;
        newElem.next = node;

    return;
}
    
Llist.prototype.delPos = function(position) {
    let node = this.root;
    let value;
   
        if(position == 0) {
            return this.delStart()
        } 
        if (position == this.size()-1) {
            return this.delEnd();
        }
        for (i = 0; i < position-1; i++) {
            node = node.next;
        }
        value = node.next.val;
        node.next = node.next.next;

    return value;
}

Llist.prototype.set = function(elem, position) { 
        let node = this.root;
        if (position == 0) {
             this.addStart(elem);
         } else {
            for (i = 0; i !== position; i++) {
                node = node.next;
            }
            node.val = elem;
         }
}

Llist.prototype.toString = function() {
    let node = this.root;
    let str = node.val;
        do {
            node = node.next;
            str += '' + node.val;
        }
        while(node.next)
    return str;
}

Llist.prototype.clear = function() {
    this.root = null;
    this.init(this.defaultArray);
}

Llist.prototype.min = function() {
    let min = this.root.val;
    for (let i=0; i<this.size(); i++) {
        if (this.get(i) < min) {
            min = this.get(i)
        }
    }
    return min;
}

Llist.prototype.max = function() {
    let max = this.root.val;
    for (let i=0; i<this.size(); i++) {
        if (this.get(i) > max) {
            max = this.get(i)
        }
    }
    return max;
}
Llist.prototype.toArray = function() {
    let newArr=[];
    for (let i=0; i < this.size(); i++) {
        newArr[i] = this.get(i);
    } 
    return newArr
}

Llist.prototype.sort = function() {
    let arr = this.toArray();
    for (let i = 1, l = arr.length; i < l; i++) {
        const current = arr[i];
        let j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
};

Llist.prototype.maxIndex = function() {
    let maxIndex = 0;
    for (let i=1; i<this.size(); i++) {
        if (this.get(i) > this.get(maxIndex)) {
            maxIndex = i;
        }   
    }
    return maxIndex
}

Llist.prototype.minIndex = function() {
    let minIndex = 0;
    for (let i=1; i<this.size(); i++) {
        if (this.get(i) < this.get(minIndex)) {
            minIndex = i;
        }   
    }
    return minIndex
}

Llist.prototype.reverse = function() {
    let first = null;
    let next = null;
    let node = this.root;
        while (node) {
            next = node.next;
            node.next = first;
            first = node;
            node = next;
        }
        this.root = first;
}

Llist.prototype.halfReverse = function() {
    const half = this.size()/2;
    let arr = this.toArray();
    let node = [];
    for(let i = 0; i < this.size(); i++) {
        node[i] = this.get(i);
        arr[i] = node[i];
    }
    
    for (let i = 0, j = half-1; i < half; j--, i++) {
        node[i] = this.get(i);
        node[i] = arr[j];
     }

    for (let i = half, j = this.size()-1; i < this.size(); j--, i++) {
        node[i] = this.get(i)
        node[i] = arr[j];
     }
     return node
}

Llist.prototype.full = function() {
    let full = this.root;
    let fullz = full.val;
        do {
            full = full.next;
            fullz += ' ' + full.val;
        }
        while(full.next)
    
    return fullz;
    
}

module.exports.Llist = Llist;