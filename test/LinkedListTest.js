//var assert = require('assert');
var expect = require("chai").expect;
var Item = require('../clases/Item');
var LinkedList = require('../clases/LinkedList');
describe('LinkedList', function () {
    describe('isEmpty()', function () {
        it('has to be true with no arguments in the contructor', function () {
            var list = new LinkedList()
            expect(list.isEmpty()).to.equal(true);
        });
        it('has to be false with arguments in the contructor', function () {
            var list = new LinkedList(10);
            expect(list.isEmpty()).to.equal(false);
        });
        it('has to be false with one or more elements', function () {
            var list = new LinkedList();
            list.push(10)
            expect(list.isEmpty()).to.equal(false);
        });
    });
    describe('get()', function () {
        it('has to throw an exeption', function () {
            var list = new LinkedList(1)
            expect(list.get(11)).to.throw('out of bound');
        });

        it('has an string argument', function () {
            var list = new LinkedList(10)
            expect(list.get("sdsada")).to.throw('must be an integer');
        });
    });
});