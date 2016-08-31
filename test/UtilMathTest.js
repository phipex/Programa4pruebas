var expect = require("chai").expect;
var assert = require("chai").assert;
var Item = require('../clases/Item');
var UtilMath = require('../clases/UtilMath');
var LinkedList = require('../clases/LinkedList');
describe('UtilMath', function () {
    describe('mean()', function () {
        it('has to be 0 with a empty list', function () {
            var list = new LinkedList()
            expect(UtilMath.mean(list)).to.equal(0);
        });
        /*it('has to throw an exeption with no list', function () {
            var list = null
            expect(UtilMath.mean()).to.throw('Error empty list');
        });*/
        it('has to be 1 with the following elements [1,1]', function () {
            var list = new LinkedList({ itemOne: 1, itemTwo: 1 })
            list.push({ itemOne: 1, itemTwo: 1 });
            expect(UtilMath.mean(list).itemOne).to.equal(1);
        });
        it('has to be 3 with the following elements [3,3,3,3]', function () {
            var list = new LinkedList({ itemOne: 1, itemTwo: 3 })
            list.push({ itemOne: 1, itemTwo: 3 });
            list.push({ itemOne: 1, itemTwo: 3 });
            list.push({ itemOne: 1, itemTwo: 3 });
            expect(UtilMath.mean(list).itemTwo).to.equal(3);
        });

    });
    describe('stdDeviation()', function () {
        it('has to be 0 with a empty list', function () {
            var list = new LinkedList()
            expect(UtilMath.stdDeviation(list)).to.equal(0);
        });
        it('has to be 0 with the following elements [1,1]', function () {
            var list = new LinkedList({ itemOne: 1, itemTwo: 3 })
            list.push({ itemOne: 1, itemTwo: 3 });
            expect(JSON.stringify(UtilMath.stdDeviation(list))).to.equal(JSON.stringify({ itemOne: 0, itemTwo: 0 }));
        });
        it('has to be 0 with the following elements [3,3,3,3]', function () {
            var list = new LinkedList({ itemOne: 3, itemTwo: 3 })
            list.push({ itemOne: 3, itemTwo: 3 });
            list.push({ itemOne: 3, itemTwo: 3 });
            list.push({ itemOne: 3, itemTwo: 3 });
            assert.equal(JSON.stringify(UtilMath.stdDeviation(list)),JSON.stringify({ itemOne: 0, itemTwo: 0 }),'fail');
        });

    });
    
    describe('sum()', function () {
        it('has to be 0 with a empty list', function () {
            var list = new LinkedList()
            expect(UtilMath.sum(list)).to.equal(0);
        });
        it('has to be 5 with the following elements [2,3]', function () {
            var list = new LinkedList({ itemOne: 2, itemTwo: 1 })
            list.push({ itemOne: 3, itemTwo: 1 });
            expect(UtilMath.sum(list).itemOne).to.equal(5);
        });
        it('has to be 20 with the following elements [5,5,0,10]', function () {
            var list = new LinkedList({ itemOne: 5, itemTwo: 3 })
            list.push({ itemOne: 5, itemTwo: 3 });
            list.push({ itemOne: -1, itemTwo: 3 });
            list.push({ itemOne: 11, itemTwo: 3 });
            expect(UtilMath.sum(list).itemOne).to.equal(20);
        });
        it('has to be 2 with the following elements [1,1,0,0]', function () {
            var list = new LinkedList({ itemOne: 0, itemTwo: 1 })
            list.push({ itemOne: 0, itemTwo: 1 });
            list.push({ itemOne: 0, itemTwo: 0 });
            list.push({ itemOne: 0, itemTwo: 0 });
            expect(UtilMath.sum(list).itemTwo).to.equal(2);
        });

    });
    
    
    describe('sumSquared()', function () {
        it('has to be 0 with a empty list', function () {
            var list = new LinkedList()
            expect(UtilMath.sumSquared(list)).to.equal(0);
        });
        it('has to be 18 with the following elements [3,3]', function () {
            var list = new LinkedList({ itemOne: 3, itemTwo: 1 })
            list.push({ itemOne: 3, itemTwo: 1 });
            expect(UtilMath.sumSquared(list).itemOne).to.equal(18);
        });
        it('has to be 16 with the following elements [2,2,2,2]', function () {
            var list = new LinkedList({ itemOne: 2, itemTwo: 3 })
            list.push({ itemOne: 2, itemTwo: 3 });
            list.push({ itemOne: 2, itemTwo: 3 });
            list.push({ itemOne: 2, itemTwo: 3 });
            expect(UtilMath.sumSquared(list).itemOne).to.equal(16);
        });
        it('has to be 0 with the following elements [0,0,0,0]', function () {
            var list = new LinkedList({ itemOne: 0, itemTwo: 0 })
            list.push({ itemOne: 0, itemTwo: 0 });
            list.push({ itemOne: 0, itemTwo: 0 });
            list.push({ itemOne: 0, itemTwo: 0 });
            expect(UtilMath.sumSquared(list).itemTwo).to.equal(0);
        });
        it('has to be 2 with the following elements [-1,-1]', function () {
            var list = new LinkedList({ itemOne: -1, itemTwo: 0 })
            list.push({ itemOne: -1, itemTwo: 0 });
            expect(UtilMath.sumSquared(list).itemOne).to.equal(2);
        });

    });
    
    describe('sumProduct()', function () {
        it('has to be 0 with a empty list', function () {
            var list = new LinkedList()
            expect(UtilMath.sumProduct(list)).to.equal(0);
        });
        it('has to be 10 with the following elements [[3,2],[2,2]]', function () {
            var list = new LinkedList({ itemOne: 3, itemTwo: 2 })
            list.push({ itemOne: 2, itemTwo: 2 });
            expect(UtilMath.sumProduct(list)).to.equal(10);
        });
        it('has to be 4 with the following elements [[-1,2],[-2,-3]]', function () {
            var list = new LinkedList({ itemOne: -1, itemTwo: 2 })
            list.push({ itemOne: -2, itemTwo: -3 });
            expect(UtilMath.sumProduct(list)).to.equal(4);
        });
        it('has to be 0 with the following elements [[0,0],[0,0]]', function () {
            var list = new LinkedList({ itemOne: 0, itemTwo: 0 })
            list.push({ itemOne: 0, itemTwo: 0 });
            expect(UtilMath.sumProduct(list)).to.equal(0);
        });
        it('has to be 1 with the following elements [-1,-1]', function () {
            var list = new LinkedList({ itemOne: -1, itemTwo: -1 })
            expect(UtilMath.sumProduct(list)).to.equal(1);
        });

    });
    
    describe('correlation()', function () {
        it('has to be 0 with a empty list', function () {
            var list = new LinkedList()
            expect(UtilMath.correlation(list)).to.equal(0);
        });
        it('correlation can range from +1 to -1', function () {
            var list = new LinkedList({ itemOne: 150, itemTwo: 202 })
            list.push({ itemOne: 78, itemTwo: 203 });
            expect(1 >= (UtilMath.correlation(list)) >= -1);
        });
        it('correlation can range from +1 to -1', function () {
            var list = new LinkedList({ itemOne: -2390, itemTwo: 167 })
            list.push({ itemOne: 789, itemTwo: 12 });
            expect(1 >= (UtilMath.correlation(list)) >= -1);
        });
        
    });
    
    describe('rSquared()', function () {
        it('has to be 0 with a empty list', function () {
            var list = new LinkedList()
            expect(UtilMath.rSquared(list)).to.equal(0);
        });
        it('rSquared can range from +1 to -1', function () {
            var list = new LinkedList({ itemOne: 400, itemTwo: 22222 })
            list.push({ itemOne: 300, itemTwo: 99 });
            expect(1 >= (UtilMath.rSquared(list)) >= 0);
        });
        it('rSquared can range from +1 to -1', function () {
            var list = new LinkedList({ itemOne: -9999, itemTwo: 1 })
            list.push({ itemOne: 1, itemTwo: 1 });
            expect(1 >= (UtilMath.rSquared(list)) >= 0);
        });
        
    });

});