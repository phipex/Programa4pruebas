var File = require('./clases/File.js');
var UtilMath = require('./clases/UtilMath')
var file = new File('./Test1');
file.read();
var list = file.toList();
var prediction = UtilMath.prediction(list);
console.log('prediction',prediction)
var betaOne = UtilMath.betaOne(list);
console.log('betaOne',betaOne)
var betaZero = UtilMath.betaZero(list);
console.log('betaZero',betaZero)
var correlation = UtilMath.correlation(list);
console.log('correlation',correlation)
var rSquared = UtilMath.rSquared(list);
console.log('rSquared',rSquared)

