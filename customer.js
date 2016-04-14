var Menu = require('./menu.js');
var prompt = require('prompt');
var fs = require('fs');
​
// =============================================
​
var storeMenu = new Menu();
​
// ==============================================
​
prompt.start();
​
prompt.get(['name', 'quantity'], function (err, result) {
​
	console.log('Welcome to Ahmeds Hut. Please select your option:');
	console.log('Item Name : ' + result.name);
	console.log('Item Quantity: ' + result.quantity);
​
	// Print Menu
	// console.log("Items?", storeMenu.items)
​
	// Add Item
	fs.readFile("menu.txt", "utf-8", function(err, readResult){
		if(err)
			throw err;
		else{		
				var items = readResult.split('\r\n');
				for (var i=0; i< items.length-1; i++){
​
					var itemJSON = JSON.parse(items[i].replace(/[\[\]']+/g,''));
					console.log(items[i].name);
					console.log(itemJSON);
					console.log(itemJSON.name);
​
					if(result.name == itemJSON.name) {
						console.log("GRAND TOTAL: $" + parseFloat(itemJSON.price) *  parseInt(result.quantity));
					}
				}
		}
	})
});