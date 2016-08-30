"use strict";
class UtilMath {
    constructor() {
    }

    static mean(list) {
        if (!list) {
            throw 'Error empty list'
        }
        var len = list.length;
        if (len === 0) {
            return 0;
        }
        var sum = this.sum(list);
        var meanList = this.sum(list)
        var means = {
            itemOne: meanList.itemOne/len,
            itemTwo: meanList.itemTwo/len
        };

        return means;
    }
    
      static sum(list) {
        if (!list) {
            throw 'Error empty list'
        }
        var len = list.length;
        if (len === 0) {
            return 0;
        }
        var i, j, sum = {};
        var total = 0;
        var count,obj;
        obj = Object.keys(list.getValue(0));
        count = obj.length;
        for (j = 0; j < count; j++) {
            for (i = 0; i < len; i++) {
                if(!sum[obj[j]]){
                    sum[obj[j]] = 0;
                }
                if(!isNaN(list.getValue(i)[obj[j]])){
                    sum[obj[j]] += parseFloat(list.getValue(i)[obj[j]]);
                }
            }
        }
        return sum;
    }
    
    
    static sumSquared(list) {
        if (!list) {
            throw 'Error empty list'
        }
        var len = list.length;
        if (len === 0) {
            return 0;
        }
        var i, j, obj, count, square = {}
        obj = Object.keys(list.getValue(0));
        count = obj.length;
        for (j = 0; j < count; j++) {
            for (i = 0; i < len; i++) {
                if(!square[obj[j]]){
                    square[obj[j]] = 0;
                }
                square[obj[j]] += Math.pow(parseFloat(list.getValue(i)[obj[j]]),2);
            }
        }
        return square;
    }
    
    static sumProduct(list) {
        if (!list) {
            throw 'Error empty list'
        }
        var len = list.length;
        if (len === 0) {
            return 0;
        }
        var i, j, product = 0;
        var count, obj;
        obj = Object.keys(list.getValue(0));
        count = obj.length;
        for (i = 0; i < len; i++) {
            for (j = 0; j < count; j += 2) {
                product += (parseFloat(list.getValue(i)[obj[j]]) * (parseFloat(list.getValue(i)[obj[j+1]])));
            }
            
        }
        return product;
    }

    static stdDeviation(list) {
        var mean = UtilMath.mean(list)
        var len = list.length;
        var i, deviation = 0;
        for (i = 0; i < len; i++) {
            deviation += Math.pow((parseFloat(list.getValue(i)) - mean), 2);
        }
        deviation = parseFloat(deviation / (len - 1))
        deviation = parseFloat(Math.sqrt(deviation));
        return deviation;
    }

}
module.exports = UtilMath;
