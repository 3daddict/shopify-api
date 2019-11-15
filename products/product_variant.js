const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const Shopify = require('../node_modules/shopify-api-node');
const writeJSON = require('../components/writeJSON');
 
const shopify = new Shopify({
  shopName: process.env.SHOPNAME,
  apiKey: process.env.APIKEY,
  password: process.env.PASSWORD,
  apiVersion: process.env.APIVERSION
});

(async () => {
    let params = { limit: 10 };
   
    do {
      const products = await shopify.product.list(params);
   
      //console.log(products);
      console.log('Before:', params);
      params = products.nextPageParameters;
      console.log('After:', params);
      //writeJSON(products, './data/product_variants.json')
    } while (params !== undefined);
  })().catch(console.error);
