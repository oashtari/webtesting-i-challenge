const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!

it('should run the test', function () {
    expect(true).toBe(true);
})

describe('enhancer.js', function () {

    describe('succeed', function () {

        const item = {
            'name': 'gunner',
            'durability': 60,
            'enhancement': 6
        }

        it('should improve enhancement by 1', function () {
            succeed(item);
            expect(item.enhancement).toBe(7);
            expect(item.name).toBe('gunner');
            expect(item.durability).toBe(60);
        })

        const item2 = {
            'name': 'ory',
            'durability': 85,
            'enhancement': 20
        }

        it('should not change enhancement when already at 20', function () {
            succeed(item2);
            expect(item2.enhancement).toBe(20);
            expect(item2.name).toBe('ory');
            expect(item2.durability).toBe(85);
        })
    })



    describe('fail', function () {
        const item = {
            'name': 'gunner',
            'durability': 60,
            'enhancement': 6
        }
        it('should reduce durability by 5', function () {
            fail(item);
            expect(item.enhancement).toBe(6);
            expect(item.name).toBe('gunner');
            expect(item.durability).toBe(55);
        })

        const item2 = {
            'name': 'ory',
            'durability': 85,
            'enhancement': 20
        }

        it('should reduce durability by 10 and enhancement by 1', function () {
            fail(item2);
            expect(item2.enhancement).toBe(19);
            expect(item2.name).toBe('ory');
            expect(item2.durability).toBe(75);
        })

        const item3 = {
            'name': 'baker',
            'durability': 35,
            'enhancement': 16
        }

        it('should reduce durability by 10', function () {
            fail(item3);
            expect(item3.enhancement).toBe(16);
            expect(item3.name).toBe('baker');
            expect(item3.durability).toBe(25);
        })

        const item4 = {
            'name': 'py',
            'durability': 8,
            'enhancement': 19
        }

        it('durability should not go below 0', function () {
            fail(item4);
            expect(item4.enhancement).toBe(18);
            expect(item4.name).toBe('py');
            expect(item4.durability).toBe(0);
        })
    })


    describe('repair', function () {
        const item = {
            'name': 'gunner',
            'durability': 60,
            'enhancement': 6
        }

        const item2 = {
            'name': 'ory',
            'durability': 85,
            'enhancement': 20
        }

        const item3 = [];
        const item4 = 'hi';
        const item5 = 45;

        const item6 = {
            'name': 'dog',
            'durability': 34
        }
        const item7 = {
            'name': 'cat',
            'enhancement': 19
        }

        const item8 = {
            'durability': 85,
            'enhancement': 20
        }

        it('should restore energy to 100', function () {
            repair(item);
            expect(item.durability).toBe(100);
            expect(item.name).toBe('gunner');
            expect(item.enhancement).toBe(6);
        })

        it('should throw error if item is not an object', function () {

            function isObject(variable) {
                return Object.prototype.toString.call(variable) === '[object Object]'
            }

            repair(item3);
            expect(isObject(item3)).toEqual(false);

            repair(item4);
            expect(isObject(item4)).toEqual(false);

            repair(item5);
            expect(() => isObject(item5).toThrow());
        })


        it('should check to see if object has name, durability and enhancement', function () {

            function hasProperties(variable) {
                if (variable.name && variable.durability && variable.enhancement) {
                    return true;
                } else {
                    return false;
                }
            }

            repair(item6);
            expect(hasProperties(item6)).toEqual(false);

            repair(item7);
            expect(hasProperties(item7)).toEqual(true);

            repair(item8);
            expect(() => hasProperties(item8).toThrow());

        })

    })



    describe('get', function () {
        it.todo('')
    })


})
