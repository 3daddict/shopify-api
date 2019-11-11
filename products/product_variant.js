const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const Shopify = require('../node_modules/shopify-api-node');
 
const shopify = new Shopify({
  shopName: process.env.SHOPNAME,
  apiKey: process.env.APIKEY,
  password: process.env.PASSWORD
});

(async () => {
    let params = { limit: 10 };
   
    do {
      const products = await shopify.product.list(params);
   
      console.log(products);
   
      params = products.nextPageParameters;
    } while (params !== undefined);
  })().catch(console.error);
