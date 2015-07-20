angular.module('Cart', [])
.factory('cart', function(){

var cartData = [];

var addProduct = function(id, name, price){
 	var alreadyExist = false;
 	for(var i = 0; i < cartData.length; i+=1){
 		if(cartData[i].id == id){
 			cartData[i].counter++;
 			alreadyExist = true;
 		} 
 	}
 	if(!alreadyExist){
 		cartData.push({id: id, name: name, price: price: counter: 1})
 	}
};
var removeProduct = function(){
	for(var i = 0; i < cartData.length; i+=1){
		if(cartData[i].id == id){
			cartData.splice(i, 1);
			// break;
		}
	}
};
var getProducts = function(){
	return cartData;
};

return {
	addProduct: addProduct,
	removeProduct: removeProduct,
	getProducts: getProducts
}
})