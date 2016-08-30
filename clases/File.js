"use strict";
var fs = require('fs');
var LinkedList = require('../clases/LinkedList');
class File {
    constructor(path) {
        if (!path) {
            throw 'No path'
            return
        }
        this.path = path;
    }

    //This method read a file from the path attr
    read() {
        this.info = fs.readFileSync(this.path, 'utf8');
    }

    //This method convert the readed file to a list
    toList() {
        if (!this.info) {
            throw('error, must read a file');
        }
        if (typeof(this.info) !== 'object') {
            this.info = this.info.split(',');
        }
        var list = new LinkedList();
        var element;
        var itemOne;
        var itemTwo;
        var payload;
        for (element = 0; element < this.info.length; element += 2) {
            itemOne = this.info[element];
            itemTwo = this.info[element + 1];
            if((itemOne) && (itemTwo)){
                payload = {
                    itemOne: itemOne,
                    itemTwo: itemTwo
                };
                list.push(payload);
            }
        }
        return list;
    }
}
module.exports = File;