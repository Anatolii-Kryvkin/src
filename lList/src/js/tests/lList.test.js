const { Llist } = require('../lList.js');

describe('addStart', function () {
    it('size after adding an item to the beginning', function () {
        let nodeAddStart = new Llist([8, 10, 4, 2, 26, 25]);
        nodeAddStart.addStart(77);
        assert.deepEqual(nodeAddStart.size(), 7)
    })
});
describe('addEnd', function () {
    it('size after adding an item to the end', function () {
        let nodeAddEnd = new Llist([8, 10, 4, 2, 26, 25]);
        nodeAddEnd.addEnd(88);
        assert.deepEqual(nodeAddEnd.size(), 7)
    })
});
describe('delStart', function () {
    it('Returns the first element', function () {
        let nodeDelStart = new Llist([8, 10, 4, 2, 26, 25]);
        assert.deepEqual(nodeDelStart.delStart(), 8)
    })
    it('Returns the first element', function () {
        let nodeDelStart = new Llist([8, 10, 4, 2, 26, 25]);
        nodeDelStart.delStart();
        assert.deepEqual(nodeDelStart.get(0), 10)
    })
    it('Length after return first element', function () {
        let nodeDelStart = new Llist([8, 10, 4, 2, 26, 25]);
        nodeDelStart.delStart();
        assert.deepEqual(nodeDelStart.size(), 5)
    })
});
describe('delEnd', function () {
    it('Returns the last element', function () {
        let nodeDelEnd = new Llist([8, 10, 4, 2, 26, 25]);
        nodeDelEnd.delEnd();
        assert.deepEqual(nodeDelEnd.get(nodeDelEnd.size()-1), 26)
    })
    it('Length after return last element', function () {
        let nodeDelEnd = new Llist([8, 10, 4, 2, 26, 25]);
        nodeDelEnd.delEnd();
        assert.deepEqual(nodeDelEnd.size(), 5)
    })
});
describe('delPos', function () {
    it('Returns position element', function () {
        let nodeDelPos = new Llist([8, 10, 4, 2, 26, 25]);
        nodeDelPos.delPos(2);
        assert.deepEqual(nodeDelPos.size(), 5)
    })
});
describe('addPos', function () {
    it('Add position elements', function () {
        let nodeAddPos = new Llist([8, 10, 4, 2, 26, 25]);
            nodeAddPos.addPos(4, 8);
            assert.deepEqual(nodeAddPos.get(4), 8)
    })
    it('Length after return add position elements', function () {
        let nodeAddPos = new Llist([8, 10, 4, 2, 26, 25]);
            nodeAddPos.clear();
            nodeAddPos.addPos(4, 8);
            assert.deepEqual(nodeAddPos.size(), 7)
    })
});
describe('get', function () {
    it('Get elements', function () {
        let nodeGet = new Llist([8, 10, 4, 2, 26, 25]);
        nodeGet.get(3);
        assert.deepEqual(nodeGet.get(3), 2)
    })
    it('Length after get elements', function () {
        let nodeGet = new Llist([8, 10, 4, 2, 26, 25]);
        nodeGet.clear();
        nodeGet.get(3);
        assert.deepEqual(nodeGet.size(), 6)
    })
}); 
describe('set', function () {
    it('Set elements', function () {
        let nodeSet = new Llist([8, 10, 4, 2, 26, 25]);
        nodeSet.set(5, 3);
        assert.deepEqual(nodeSet.get(3), 5)
    })
});
describe('toString', function () {
    it('String arrays', function () {
        let nodeToString = new Llist([8, 10, 4, 2, 26, 25]);
        assert.deepEqual(nodeToString.toString(), '810422625')
    })
}); 
describe('size', function () {
    it('Length', function () {
        let nodeSize = new Llist([8, 10, 4, 2, 26, 25]);
        nodeSize.size();
        assert.deepEqual(nodeSize.toString(), '810422625')
    })
});
describe('clear', function () {
    it('Return array', function () {
        let nodeClear = new Llist([8, 10, 4, 2, 26, 25]);
       	nodeClear.clear();
        assert.deepEqual(nodeClear.toString(), '810422625')
    })
});
describe('min', function () {
    it('Return min element', function () {
        let nodeMin = new Llist([8, 10, 4, 2, 26, 25]);
        assert.deepEqual(nodeMin.min(), 2)
    })
});
describe('max', function () {
    it('Return max element', function () {
        let nodeMax = new Llist([8, 10, 4, 2, 26, 25]);
            assert.deepEqual(nodeMax.max(), 26)
    })
});
describe('sort', function () {
    it('Return sort elements', function () {
        let nodeSort = new Llist([8, 10, 4, 2, 26, 25]);
            assert.deepEqual(nodeSort.sort(), [ 2, 4, 8, 10, 25, 26 ])
    })
});
describe('maxIndex', function () {
    it('Return index max element', function () {
        let nodeMaxIndex = new Llist([8, 10, 4, 2, 26, 25]);
            nodeMaxIndex.maxIndex();
            assert.deepEqual(nodeMaxIndex.max(), 26)
    })
});
describe('minIndex', function () {
    it('Return index min element', function () {
        let nodeMinIndex = new Llist([8, 10, 4, 2, 26, 25]);
            nodeMinIndex.minIndex();
            assert.deepEqual(nodeMinIndex.min(), 2)
    })
});
describe('reverse', function () {
    it('Reverse elements', function () {
        let nodeReverse = new Llist([8, 10, 4, 2, 26, 25]);
            nodeReverse.reverse();
            assert.deepEqual(nodeReverse.toString(), '252624108')
    })

    it('Reverse elements size', function () {
        let nodeReverse = new Llist([8, 10, 4, 2, 26, 25]);
            nodeReverse.clear();
            nodeReverse.reverse();
            assert.deepEqual(nodeReverse.size(), 6)
    })
});
describe('halfReverse', function () {
    it('HalfReverse elements', function () {
        let nodeHalfReverse = new Llist([8, 10, 4, 2, 26, 25]);
            assert.deepEqual(nodeHalfReverse.halfReverse(), [ 4, 10, 8, 25, 26, 2 ])
    })
    it('HalfReverse elements size', function () {
        let nodeHalfReverse = new Llist([8, 10, 4, 2, 26, 25]);
            nodeHalfReverse.clear();
            nodeHalfReverse.halfReverse();
            assert.deepEqual(nodeHalfReverse.size(), 6)
    })
});
describe('toArray', function () {
    it('String to array elements', function () {
        let nodeToArray = new Llist('810422625');
            nodeToArray.toArray();
            assert.deepEqual(nodeToArray.size(), 9)
    })
});
