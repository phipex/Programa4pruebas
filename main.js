var File = require('./clases/File.js');
var UtilMath = require('./clases/UtilMath')

var firstFileLines = 300;
var secondFileLines = 500;

console.log('firstFileLines: '+firstFileLines);
console.log('secondFileLines: '+secondFileLines);

var lnFirst = Math.log(firstFileLines);
var lnSecond = Math.log(secondFileLines);

console.log('lnFirst: '+lnFirst);
console.log('lnSecond: '+lnSecond);

var avg = UtilMath.avg([lnFirst ,lnSecond])
console.log('avg: '+avg);
var variance = UtilMath.variance([lnFirst ,lnSecond],avg)
console.log('variance: '+variance);
var standardDeviation = UtilMath.standardDeviation(variance)
console.log('standardDeviation: '+standardDeviation);


var lnVS = avg-(2*standardDeviation);
console.log('lnVS: '+lnVS);

var lnS = avg-standardDeviation;
console.log('lnS: '+lnS);

var lnM = avg;
console.log('lnM: '+lnM);

var lnL = avg+standardDeviation;
console.log('lnL: '+lnL);

var lnVL = avg+(2*standardDeviation);
console.log('lnVL: '+lnVL);


var VS = Math.pow(Math.E,lnVS);
console.log('VS: '+VS);
var S = Math.pow(Math.E,lnS);
console.log('S: '+S);
var M = Math.pow(Math.E,lnM);
console.log('M: '+M);
var L = Math.pow(Math.E,lnL);
console.log('L: '+L);
var VL = Math.pow(Math.E,lnVL);
console.log('VL: '+VL);

