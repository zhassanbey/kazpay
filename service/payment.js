function Payment(){
	this.account = {};
}

Payment.prototype = {
	register:function(id){
		this.account[id] = 0;
		return true;
	},
	putMoney:function(id, amount){
		if(this.account[id] === undefined){
			return false;
		} else {
		   this.account[id] = parseFloat(this.account[id])+parseFloat(amount);
		   return true;
		}
	},
	payTo:function(fromId, toId, amount){
		if(this.account[fromId] === undefined ||
		    this.account[toId] === undefined ||
			this.account[fromId] < amount){
			return false;	
		} else {
			this.account[fromId] = parseFloat(this.account[fromId])-parseFloat(amount);
			this.account[toId] = parseFloat(this.account[toId])+parseFloat(amount);
			return true;		
		}
	},
	getReceipt:function(id){
		if(this.account[id] === undefined){
			return -1;
		} else {
			return this.account[id];
		}
	},
	isRegistered:function(id){
		return this.account[id] !== undefined;
	}
};

function create(){
	return new Payment();
}

module.exports = {
	create: create	
};
