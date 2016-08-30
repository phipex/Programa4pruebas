var File = require('./clases/File.js');
var Regression = require('./clases/Regression')
var file = new File('./Test1');
file.read();
var list = file.toList();
var prediction = Regression.prediction(list);
console.log('prediction',prediction)
var betaOne = Regression.betaOne(list);
console.log('betaOne',betaOne)
var betaZero = Regression.betaZero(list);
console.log('betaZero',betaZero)
var correlation = Regression.correlation(list);
console.log('correlation',correlation)
var rSquared = Regression.rSquared(list);
console.log('rSquared',rSquared)

