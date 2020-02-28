const { AList } = require('../AList');

describe('addStart', function () {
    it('input 77 addStart', function () {
        let arrayAddStart = new AList([8, 10, 4, 2, 26, 25]);
        arrayAddStart.addStart(77);
        assert.deepEqual(arrayAddStart.get(0), 77)
    })
    it('addStart size ', function () {
        let arrayAddStart = new AList([8, 10, 4, 2, 26, 25]);
        arrayAddStart.clear();
        arrayAddStart.addStart(77);
        assert.deepEqual(arrayAddStart.size(), 7)
    })
});
describe('addEnd', function () {
    it('input 88 addEnd', function () {
        let arrayAddEnd = new AList([8, 10, 4, 2, 26, 25]);
        arrayAddEnd.addEnd(88);
        assert.deepEqual(arrayAddEnd.get(5), 25)
    })
    it('size AddEnd', function () {
        let arrayAddEnd = new AList([8, 10, 4, 2, 26, 25]);
        arrayAddEnd.clear();
        arrayAddEnd.addEnd(88);
        assert.deepEqual(arrayAddEnd.size(), 7)
    })
});
describe('delStart', function () {
    it('Returns the first element', function () {
        let arrayDelStart = new AList([8, 10, 4, 2, 26, 25]);
        arrayDelStart.delStart();
        assert.deepEqual(arrayDelStart.size(), 5)
    })
    it('Returns the first element string', function () {
        let arrayDelStart = new AList([8, 10, 4, 2, 26, 25]);
        arrayDelStart.clear();
        arrayDelStart.delStart();
        assert.deepEqual(arrayDelStart.toString(), '10422625')
    })
});
describe('delEnd', function () {
    it('Returns the last element', function () {
        let arrayDelEnd = new AList([8, 10, 4, 2, 26, 25]);
        arrayDelEnd.delEnd();
        assert.deepEqual(arrayDelEnd.size(), 5)
    })
    it('Returns the last element string', function () {
        let arrayDelEnd = new AList([8, 10, 4, 2, 26, 25]);
        arrayDelEnd.clear();
        arrayDelEnd.delEnd();
        assert.deepEqual(arrayDelEnd.toString(), '8104226')
    })
});
describe('delPos', function () {
    it('Returns position element', function () {
        let arrayDelPos = new AList([8, 10, 4, 2, 26, 25]);
        arrayDelPos.delPos(2);
        assert.deepEqual(arrayDelPos.size(),1)
    })
});
describe('get', function () {
    it('Get elements', function () {
        let arrayGet = new AList([8, 10, 4, 2, 26, 25]);
        arrayGet.get(3);
        assert.deepEqual(arrayGet.size(), 6)
    })
}); 
describe('set', function () {
    it('Set elements', function () {
        let arraySet = new AList([8, 10, 4, 2, 26, 25]);
        arraySet.set(3);
        assert.deepEqual(arraySet.size(), 6)
    })
});
describe('toString', function () {
    it('String arrays', function () {
        let arrayToString = new AList([8, 10, 4, 2, 26, 25]);
        arrayToString.toString ();
        assert.deepEqual(arrayToString.size(), 9)
    })
}); 
describe('size', function () {
    it('Length', function () {
        let arraySize = new AList([8, 10, 4, 2, 26, 25]);
        arraySize.size();
        assert.deepEqual(arraySize.toString(), '810422625')
    })
});
describe('clear', function () {
    it('Return array', function () {
        let arrayClear = new AList([8, 10, 4, 2, 26, 25]);
        arrayClear.clear();
        assert.deepEqual(arrayClear.toString(), '810422625')
    })
});
describe('min', function () {
    it('Return min element', function () {
        let arrayMin = new AList([8, 10, 4, 2, 26, 25]);
        arrayMin.min();
        assert.deepEqual(arrayMin.minIndex(), 3)
    })
});
describe('max', function () {
    it('Return min element', function () {
        let arrayMax = new AList([8, 10, 4, 2, 26, 25]);
            arrayMax.max();
            assert.deepEqual(arrayMax.maxIndex (), 4)
    })
});
describe('sort', function () {
    it('Return  sort elements', function () {
        let arraySort = new AList([8, 10, 4, 2, 26, 25]);
            arraySort.sort();
            assert.deepEqual(arraySort.get(0), 2)
    })
});
describe('maxIndex', function () {
    it('Return index max element', function () {
        let arrayMaxIndex = new AList([8, 10, 4, 2, 26, 25]);
            arrayMaxIndex.maxIndex();
            assert.deepEqual(arrayMaxIndex.max(), 26)
    })
});
describe('minIndex', function () {
    it('Return index min element', function () {
        let arrayMinIndex = new AList([8, 10, 4, 2, 26, 25]);
            arrayMinIndex.minIndex();
            assert.deepEqual(arrayMinIndex.min(), 2)
    })
});
describe('reverse', function () {
    it('Reverse elements', function () {
        let arrayReverse = new AList([8, 10, 4, 2, 26, 25]);
            arrayReverse.reverse();
            assert.deepEqual(arrayReverse.toString(), '252624108')
    })

    it('Reverse elements size', function () {
        let arrayReverse = new AList([8, 10, 4, 2, 26, 25]);
            arrayReverse.clear();
            arrayReverse.reverse();
            assert.deepEqual(arrayReverse.size(), 6)
    })
});
describe('halfReverse', function () {
    it('HalfReverse elements', function () {
        let arrayHalfReverse = new AList([8, 10, 4, 2, 26, 25]);
            arrayHalfReverse.halfReverse();
            assert.deepEqual(arrayHalfReverse.toString(), '410825262')
    })
    it('HalfReverse elements size', function () {
        let arrayHalfReverse = new AList([8, 10, 4, 2, 26, 25]);
            arrayHalfReverse.clear();
            arrayHalfReverse.halfReverse();
            assert.deepEqual(arrayHalfReverse.size(), 6)
    })
});
describe('addPos', function () {
    it('Add position elements', function () {
        let arrayAddPos = new AList([8, 10, 4, 2, 26, 25]);
            arrayAddPos.addPos(4, 8);
            assert.deepEqual(arrayAddPos.size(), 7)
    })
});
describe('toArray', function () {
    it('String to array elements', function () {
        let arrayToArray = new AList('810422625');
            arrayToArray.toArray();
            assert.deepEqual(arrayToArray.size(), 9)
    })
});
