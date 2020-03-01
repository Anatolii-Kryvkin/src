const { Llist } = require('../lList.js');

describe('addStart', function () {
    it('addStart size ', function () {
        let arrayAddStart = new Llist([8, 10, 4, 2, 26, 25]);
        nodeAddStart.clear();
        nodeAddStart.addStart(77);
        assert.deepEqual(nodeAddStart.size(), 7)
    })
});
describe('addEnd', function () {
    it('size AddEnd', function () {
        let nodeAddEnd = new Llist([8, 10, 4, 2, 26, 25]);
        nodeAddEnd.clear();
        nodeAddEnd.addEnd(88);
        assert.deepEqual(nodeAddEnd.size(), 7)
    })
});
describe('delStart', function () {
    it('Returns the first element', function () {
        let nodeDelStart = new Llist([8, 10, 4, 2, 26, 25]);
        nodeDelStart.delStart();
        assert.deepEqual(nodeDelStart.size(), 5)
    })
    it('Returns the first element string', function () {
        let nodeDelStart = new Llist([8, 10, 4, 2, 26, 25]);
        nodeDelStart.clear();
        nodeDelStart.delStart();
        assert.deepEqual(arrayDelStart.toString(), '10422625')
    })
});
describe('delEnd', function () {
    it('Returns the last element', function () {
        let nodeDelEnd = new Llist([8, 10, 4, 2, 26, 25]);
        nodeDelEnd.delEnd();
        assert.deepEqual(nodeDelEnd.size(), 5)
    })
    it('Returns the last element string', function () {
        let nodeDelEnd = new Llist([8, 10, 4, 2, 26, 25]);
        nodeDelEnd.clear();
        nodeDelEnd.delEnd();
        assert.deepEqual(nodeDelEnd.toString(), '8104226')
    })
});
describe('delPos', function () {
    it('Returns position element', function () {
        let nodeDelPos = new Llist([8, 10, 4, 2, 26, 25]);
        nodeDelPos.delPos(2);
        assert.deepEqual(nodeDelPos.size(), 5)
    })
});
describe('get', function () {
    it('Get elements', function () {
        let nodeGet = new Llist([8, 10, 4, 2, 26, 25]);
        nodeGet.get(3);
        assert.deepEqual(nodeGet.size(), 6)
    })
}); 
describe('set', function () {
    it('Set elements', function () {
        let nodeSet = new Llist([8, 10, 4, 2, 26, 25]);
        nodeSet.set(5, 3);
        assert.deepEqual(nodeSet.size(), 7)
    })
});
describe('toString', function () {
    it('String arrays', function () {
        let nodeToString = new Llist([8, 10, 4, 2, 26, 25]);
        nodeToString.toString ();
        assert.deepEqual(nodeToString.size(), 6)
    })
}); 
describe('size', function () {
    it('Length', function () {
        let arraySize = new Llist([8, 10, 4, 2, 26, 25]);
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
        let arrayMin = new Llist([8, 10, 4, 2, 26, 25]);
        nodeMin.min();
        assert.deepEqual(nodeMin.minIndex(), 3)
    })
});
describe('max', function () {
    it('Return min element', function () {
        let nodeMax = new Llist([8, 10, 4, 2, 26, 25]);
            nodeMax.max();
            assert.deepEqual(nodeMax.maxIndex (), 4)
    })
});
describe('sort', function () {
    it('Return  sort elements', function () {
        let nodeSort = new Llist([8, 10, 4, 2, 26, 25]);
            nodeSort.sort();
            assert.deepEqual(nodeSort.toString(), '248102526')
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
            nodeHalfReverse.halfReverse();
            assert.deepEqual(nodeHalfReverse.toString(), '410825262')
    })
    it('HalfReverse elements size', function () {
        let nodeHalfReverse = new Llist([8, 10, 4, 2, 26, 25]);
            nodeHalfReverse.clear();
            nodeHalfReverse.halfReverse();
            assert.deepEqual(nodeHalfReverse.size(), 6)
    })
});
describe('addPos', function () {
    it('Add position elements', function () {
        let nodeAddPos = new Llist([8, 10, 4, 2, 26, 25]);
            nodeAddPos.addPos(4, 8);
            assert.deepEqual(nodeAddPos.size(), 7)
    })
});

