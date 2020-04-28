const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!

it('should run the test', function () {
    expect(true).toBe(true);
})

// ### Items.

// - Items have `name`, `durability` and `enhancement`.
// - The item's `enhancement` it's a number from 0 to 20.
// - The item's `durability` it's a number from 0 to 100.

const item = {
    'name': 'gunner',
    'durability': 60,
    'enhancement': 6
}


describe('enhancer.js', function () {
    // - a `success(item)` method that accepts an `item` object and **returns a new item** object
    // modified according to the rules defined by the client for enhancement success.
    describe('succeed', function () {
        it.todo('')
    })

    // - a `fail(item)` method that accepts an `item` object and **returns a new item** object 
    //modified according to the rules defined by the client for enhancement failure.
    describe('fail', function () {
        it.todo('')
    })

    // - a `repair(item)` method that accepts an `item` object and **returns a new item** with the durability restored to 100.
    //This method is the simplest of the three and would be a **good starting point** on this project.
    describe('repair', function () {
        it('should restore energy to 100', function () {
            // expect(repair(item)).toBe(item.durability = 100);
            repair(item);
            expect(item.durability).toBe(100);
        })
    })


    // - a `get()` method for use when working on the stretch problem.
    // describe('get', function () {
    //     it.todo('')
    // })


})
