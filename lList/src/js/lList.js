// const List = require('../../../List/List');
const Node = require('./Node');


function Llist(array) {
    this.root = null;
    this.init(array);
    this.defaultArray = array;
}

// Llist.prototype = Object.create(List.prototype);
// Llist.prototype.constructor = Llist;

Llist.prototype.init = function (array) {
    this.root = new Node(array[array.length - 1]);
    for(let i = array.length - 2; i >= 0; i--)
    {
        this.addStart(array[i])
    }
};

Llist.prototype.size = function () {
    if(this.root) {
        let current = this.root;
        let size = 1;
        while (current.next) {
            current = current.next;
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
    return node;
}

Llist.prototype.delEnd = function() {
    let node = this.get(this.size()-2)
    let last = this.get(this.size()-1);
    node.next = null;
    return last.val;
}

Llist.prototype.addPos = function(position, elem) {
    let node = new Node(elem);
   
        if(position == 0) {
            return this.addStart(node.val)
        } 
        if (position == this.size()) {
            return this.addEnd(node.val);
        }
        node.next = this.get(position)
        this.get(position-1).next = node;

    return;
}
    
Llist.prototype.delPos = function(position) {
    let pos = this.get(position);
   
        if(position == 0) {
            return this.delStart()
        } 
        if (position == this.size()-1) {
            return this.delEnd();
        }
        this.get(position-1).next = this.get(position+1) 

    return pos.val;
}

Llist.prototype.set = function(elem, position) {
         if (position == 0) {
             this.addStart(node);
         } else {
            let node = new Node(elem);
            node.next = this.get(position)
            this.get(position-1).next = node;
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
    return this.defaultArray;
}

Llist.prototype.min = function() {
    let min = this.root;
    for (let i=0; i<this.size(); i++) {
        if (this.get(i).val < min.val) {
            min = this.get(i)
        }
    }
    return min.val;
}

Llist.prototype.max = function() {
    let max = this.root;
    for (let i=0; i<this.size(); i++) {
        if (this.get(i).val > max.val) {
            max = this.get(i)
        }
    }
    return max.val;
}

Llist.prototype.sort = function() {
    for (let j = 0; j < this.size(); j++) {
     for (let i = 0; i < this.size(); i++) {
         if (this.get(i).val > this.get(i+1).val) {
            let newArr = this.get(i).val;
            this.get(i).val = this.get(i+1).val;
            this.get(i+1).val = newArr;
         }
     }
 }
 return 
}

Llist.prototype.maxIndex = function() {
    let max = 0;
    for (let i=1; i<this.size(); i++) {
        if (this.get(i).val > this.get(max).val) {
            max = i;
        }   
    }
    return max
}

Llist.prototype.minIndex = function() {
    let min = 0;
    for (let i=1; i<this.size(); i++) {
        if (this.get(i).val < this.get(min).val) {
            min = i;
        }   
    }
    return min
}

Llist.prototype.toArray = function() {
    let newArr=[];
    for (let i=0; i < this.size(); i++) {
        newArr[i] = this.get(i).val;
    } 
    return newArr
}

Llist.prototype.reverse = function() {
    let arr = this.toArray();
    for(let i = 0; i < this.size(); i++) {
        arr[i] = this.get(i).val;
    }
    
    for (let i = 0, j = this.size()-1; i < this.size(); j--, i++) {
        this.get(i).val = arr[j];
     }

     let result = new Llist(arr)
     return result
}

Llist.prototype.halfReverse = function() {
    const half = this.size()/2;
    let arr = this.toArray();
    for(let i = 0; i < this.size(); i++) {
        arr[i] = this.get(i).val;
    }
    
    for (let i = 0, j = half-1; i < half; j--, i++) {
        this.get(i).val = arr[j];
     }

    for (let i = half, j = this.size()-1; i < this.size(); j--, i++) {
        this.get(i).val = arr[j];
     }
     let result = new Llist(arr)
     return result
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


