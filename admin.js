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
prompt.get(['name', 'price', 'category'], function (err, result) {
​
	console.log('Welcome Master. Add Items to the Menu here:');
	console.log('Item Name : ' + result.name);
	console.log('Item Price: ' + result.price);
	console.log('Item Category: ' + result.category);
​
	storeMenu.addItem(result.name, result.price, result.category)
​
	// Print Menu
	console.log("Items?", storeMenu.items)
​
	// Add Item
	fs.appendFile("menu.txt", JSON.stringify(storeMenu.items) + "\r\n", function(err){
		if(err)
			throw err;
		else{
			console.log("Item added to menu");
		}
	})
});