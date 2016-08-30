//var assert = require('assert');
var expect = require("chai").expect;
var File = require('../clases/File');
describe('File', function () {
    describe('constructor()', function () {
        it('has to throw exeption if the constructor has no path', function () {
            expect(new File()).to.throw('No path');
        });
    });
    describe('toList()', function () {
        it('has to read first before convert to list', function () {
            var file = new File()
            expect(file.toList()).to.throw('error, must read a file');
        });
        it('has to ', function () {

        });
    });

});
