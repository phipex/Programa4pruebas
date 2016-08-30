"use strict";
var Item = require('../clases/Item');
class LinkedList {

    constructor(payload) { //contructor vacio
        this.length = 0; //tamaño de la lista
        if(!payload) {
            this.head = null;
        }
        else{
            var item = new Item(payload,this.length,null)
            this.head = item;
            this.length++;
        }
    }
    push(payload){ //agrega al final de la lista
        var item = new Item(payload,this.length,null)
        //item.set(payload)
        if(this.isEmpty()){
            this.head = item;
        }
        else{
            var aux = this.get(this.length-1);
            aux.next = item;
        }
        this.length++;
    }

    get(index){ //obtiene el nodo en al posicion index
        if(typeof(index) != 'number' ){
            throw 'must be an integer';
        }
        var auxNode = this.head
        for(var i = 0;i<this.length;i++){
            if(auxNode.index == index)
            {
                return auxNode
            }
            auxNode = auxNode.next
        }
        throw 'out of bound'

    }
    getValue(index){ //obtiene el valor en la posicion index
        return this.get(index).getPayload()
    }

    isEmpty(){ // returna true si la lista esta vacia
        if ((this.head == undefined)||(this.head == null)||(!this.head)){
            return true
        }
        return false
    }

}
module.exports = LinkedList