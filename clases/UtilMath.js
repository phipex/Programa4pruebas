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
        var obj = Object.keys(list.getValue(0));
        var meanList = this.sum(list)

        for(var i = 0;i<obj.length;i++){ //se toman todos lo valores sumados de cada tipo en el object payload de la lista y se divide sobre la longitud
            sum[obj[i]] = sum[obj[i]]/list.length
        }
        return sum;
    }
    
    static sum(list) { // metodo par arealizar la sumatoria
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
        obj = Object.keys(list.getValue(0)); // se asume que todos los elementos de la lista tengan la misma estructura
        count = obj.length;
        for (i = 0; i < len; i++) {
            for (j = 0; j < count; j += 2) {
                product += (parseFloat(list.getValue(i)[obj[j]]) * (parseFloat(list.getValue(i)[obj[j+1]])));
            }
            
        }
        return product;
    }

    static stdDeviation(list) {
        if (list.length === 0)
            return 0;
        var mean = UtilMath.mean(list)
        var len = list.length;
        var i = 0;
        var deviation = {};
        var obj = Object.keys(list.getValue(0));// se asume que todos los elementos de la lista tengan la misma estructura
        var count = obj.length; // el numero de llaves diferente itemOne itemTwo
        for (i = 0; i < len; i++) {
            for (var j = 0; j < count; j++) {
                if(!deviation[obj[j]]){
                    deviation[obj[j]] = 0;
                }
                deviation[obj[j]] += Math.pow((parseFloat(list.getValue(i)[obj[j]]) - mean[obj[j]]), 2);
            }
        }
        for (var j = 0; j < count; j++) {
            deviation[obj[j]] = parseFloat(deviation[obj[j]] / (len - 1));
            deviation[obj[j]] = parseFloat(Math.sqrt(deviation[obj[j]]));
        }
        return deviation;
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
        var betaOne = UtilMath.betaOne(list)
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
        var r = UtilMath.correlation(list)
        return Math.pow(r, 2);
    }
    
    static prediction(list) {
        var betaOne = UtilMath.betaOne(list)
        var betaZero = UtilMath.betaZero(list)
        return (betaZero + (betaOne * 386));
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////PROGRAMA 3//////////////////////////////////////////////////////////////
    static lnArray(arr){
        if(typeof(arr) !== 'object'){
            throw 'list must be an array';
        }
        let item,ln=[];
        for(item in arr){
            if(isNaN(arr[item])){
                throw 'there is a not a number element';
                return;
            }
            ln.push(Math.log(arr[item]));
        }
        return(ln)
    }
    static avg(list){
        let total = 0;
        if(typeof(list) !== 'object'){
            throw 'list must be an array';
        }
        let num;
        let len = 0;
        for(num in list){
            num = list[num];
            if(isNaN(num)){
                continue;
            }
            len++;
            total += parseFloat(num);
        }
        if(list.length == 0 || len == 0){
            throw 'List length must be bigger than 0';
        }
        return total/len;
    }
    static variance(list,avg){
        let num, len = 0, total = 0;
        for(num in list){
            num = list[num];
            if(isNaN(num)){
                continue;
            }
            total += Math.pow(num-avg,2);
            len++;
        }
        len--;
        if(list.length == 0 || len == 0){
            throw 'List length must be bigger than 1';
        }
        return total/len;
    }
    static standardDeviation(variance){
        if(isNaN(variance)){
            throw 'variance must be a number';
        }
        if(variance < 0){
            throw 'variance must be a positive number';
        }
        return Math.sqrt(variance)
    }
    
    static gamma(x){
        if(isNaN(x)){
            throw 'x must be a number';
        }
        if(x <= 0){
            throw 'x must be a positive number major than cero';
        }
        if(x ==1){
            return 1;
        }
        if(x ==1/2){
            return Math.sqrt(Math.PI);
        }
        return (x-1) * UtilMath.gamma(x-1)
    }
    
    static F(x,dof){
        var factorOne = (UtilMath.gamma((dof+1)/2))/((Math.pow(dof*Math.PI,1/2))*(UtilMath.gamma(dof/2)));
        var factorTwo = Math.pow((1 + (Math.pow(x,2)/dof)),((-dof+1)/2));
        return factorOne * factorTwo;
    }
    
    static simpson(x,numseg, dof){
        var w = x/numseg;
        var value=0
        var multiplier;
        for (var i = 0; i <= numseg; i++) {
            if(i%2==0){
                multiplier=2
            }
            if(i%2!=0){
                multiplier=4
            }
            if(i==0 || i==numseg){
                multiplier=1
            }
            value= value + ((w/3) * multiplier * UtilMath.F(w*i,dof))
        }
        return value
    }


}
module.exports = UtilMath;
