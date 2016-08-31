var File = require('./clases/File.js');
var UtilMath = require('./clases/UtilMath')

var firstFileLines = 300;
var secondFileLines = 500;

var lnFirst = Math.log(firstFileLines);
var lnSecond = Math.log(secondFileLines);

var avg = UtilMath.avg([lnFirst ,lnSecond])
var variance = UtilMath.variance([lnFirst ,lnSecond],avg)
var standardDeviation = UtilMath.standardDeviation(variance)



var lnVS = avg-(2*standardDeviation);
var lnS = avg-standardDeviation;
var lnM = avg;
var lnL = avg+standardDeviation;
var lnVL = avg+(2*standardDeviation);
console.log('the LN result is',lnVS,lnS,lnM,lnL,lnVL)


var VS = Math.pow(Math.E,lnVS);
var S = Math.pow(Math.E,lnS);
var M = Math.pow(Math.E,lnM);
var L = Math.pow(Math.E,lnL);
var VL = Math.pow(Math.E,lnVL);

console.log('the result is',VS,S,M,L,VL)