var expect = require("chai").expect;
var Item = require('../clases/Item');
var Regression = require('../clases/Regression');
var LinkedList = require('../clases/LinkedList');
describe('Regression', function () {
    describe('correlation()', function () {
        it('has to be 0 with a empty list', function () {
            var list = new LinkedList()
            expect(Regression.correlation(list)).to.equal(0);
        });
        it('correlation can range from +1 to -1', function () {
            var list = new LinkedList({ itemOne: 150, itemTwo: 202 })
            list.push({ itemOne: 78, itemTwo: 203 });
            expect(1 >= (Regression.correlation(list)) >= -1);
        });
        it('correlation can range from +1 to -1', function () {
            var list = new LinkedList({ itemOne: -2390, itemTwo: 167 })
            list.push({ itemOne: 789, itemTwo: 12 });
            expect(1 >= (Regression.correlation(list)) >= -1);
        });
        
    });
    
    describe('rSquared()', function () {
        it('has to be 0 with a empty list', function () {
            var list = new LinkedList()
            expect(Regression.rSquared(list)).to.equal(0);
        });
        it('rSquared can range from +1 to -1', function () {
            var list = new LinkedList({ itemOne: 400, itemTwo: 22222 })
            list.push({ itemOne: 300, itemTwo: 99 });
            expect(1 >= (Regression.rSquared(list)) >= 0);
        });
        it('rSquared can range from +1 to -1', function () {
            var list = new LinkedList({ itemOne: -9999, itemTwo: 1 })
            list.push({ itemOne: 1, itemTwo: 1 });
            expect(1 >= (Regression.rSquared(list)) >= 0);
        });
        
    });

        
});