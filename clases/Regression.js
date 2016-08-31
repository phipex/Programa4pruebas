"use strict";
var UtilMath = require('../clases/UtilMath');
class Regression {
    constructor() {
    }
    
    static betaOne(list) {
        if (list.length == 0)
            return 0;
        var sum = UtilMath.sum(list)
        var mean = UtilMath.mean(list) 
        var square = UtilMath.sumSquared(list)
        var product = UtilMath.sumProduct(list); 
        var len = list.length;
        var betaOne = ((product - (parseFloat(len) * ( mean.itemOne * mean.itemTwo)))/((square.itemOne - (len * Math.pow(mean.itemOne, 2)))));
        return betaOne;
    }
    
    static betaZero(list) {
        if (list.length == 0)
            return 0;
        var betaOne = Regression.betaOne(list)
        var mean = UtilMath.mean(list) 
        var betaZero = (mean.itemTwo - (betaOne * mean.itemOne)) 
        return betaZero;
    }
    
    static correlation(list) {
        if (list.length == 0)
            return 0;
        var sum = UtilMath.sum(list)
        var mean = UtilMath.mean(list) 
        var square = UtilMath.sumSquared(list)
        var product = UtilMath.sumProduct(list); 
        var len = list.length;
        var correlationNum = ((len * product) - (sum.itemOne * sum.itemTwo));
        var correlationDen = Math.sqrt((len * (square.itemOne) - (Math.pow(sum.itemOne, 2))) * (len * (square.itemTwo) - (Math.pow(sum.itemTwo, 2))));
        var correlation = correlationNum/correlationDen;
        return correlation;
    }
    
    static rSquared(list) {
        var r = Regression.correlation(list)
        return Math.pow(r, 2);
    }
    
    static prediction(list) {
        var betaOne = Regression.betaOne(list)
        var betaZero = Regression.betaZero(list)
        return (betaZero + (betaOne * 386));
    }

}
module.exports = Regression;