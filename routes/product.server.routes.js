module.exports = function(app){

 var products = require('./../controllers/products.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');

 app.route('/api/products')
    .get(products.list)
	.post(users.requiresLogin, products.create);

  app.route('/api/products/:productId')
	.get(products.read)
    .delete(users.requiresLogin, products.delete);

	app.route('/api/products/edit/:productId')
	.get(products.read)
	.put(users.requiresLogin, products.update);
	
	
app.route('/products/all').get(products.listView);  // show all product 
app.route('/products/new').get(products.createView);  // create and view only  
app.route('/product/:productId').get(products.singleView);  // single product
app.route('/product/:productId/content').get(products.showContent);  // show content of a single product



app.param('productId', products.productByID);


}
