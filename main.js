var File = require('./clases/File.js');
var UtilMath = require('./clases/UtilMath')


var simpson = UtilMath.simpson(2.750,10,30);
console.log('Esto da:.....................',simpson);

var linesArray = [6,6,8.3333,10.3333,12.3333,16.3333,20.5,21.75,22.25,23,28.3333,29,55.8];
var lnLinesArray = UtilMath.lnArray(linesArray);
console.log('The logaritmic values are ',lnLinesArray);

var avg = UtilMath.avg(lnLinesArray)
console.log('avg: '+avg);
var variance = UtilMath.variance(lnLinesArray,avg)
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

