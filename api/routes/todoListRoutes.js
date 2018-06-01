'use strict';

module.exports = function (app) {
	var productList = require('../controllers/productController');


	app.route('/p/search')
		.get(productList.sample_list)

	app.route('/p/user/:id')
		.get(productList.list_liked_products)

	app.route('/p')
		.post(productList.create_a_product);

	app.route('/p/:pId')
		.get(productList.read_a_product)
		.put(productList.update_a_product)
		.delete(productList.delete_a_product);

};
