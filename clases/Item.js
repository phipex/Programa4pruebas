"use strict";
class Item {
	constructor (payload,index,next) {
	  this.payload = payload;
	  this.index = index
	  this.next = next;
	}
	getPayload(){
		return this.payload
	}
	setPayload(obj){
		this.payload = obj
	}
}
module.exports = Item;