const { func } = require('../logic.js');

describe('Create', function () {
    it('input id 2', function () {
        assert.equal(func.create(2, 'Anatolii', 'Root', 23).id, 2)
    })
    it('input firstname Anatolii', function () {
        assert.equal(func.create(2, 'Anatolii', 'Root', 23).firstName, 'Anatolii')
    })
    it('input lastname Root', function () {
        assert.equal(func.create(2, 'Anatolii', 'Root', 23).lastName, 'Root')
    })
    it('input age 23', function () {
        assert.equal(func.create(2, 'Anatolii', 'Root', 23).age, 23)
    })
});

describe('Delete', function () {
    it('input id 2', function () {
        assert.equal(func.del(2), 2)
    })
});