const express = require('express');
const router = express.Router({ mergeParams: true });
const productsModel = require('../schema/schema');

router.get('/', async (req, res) => {
    const params = req.params.productType;

    switch (params){
        case 'all-products':
            const all = await productsModel.allProductsModel.find({}).then(result => result);
            const popular = await productsModel.popularProductsModel.find({}).then(result => result);
            const onSale = await productsModel.onSaleModel.find({}).then(result => result);
            const newArrivals = await productsModel.newArrivalModel.find({}).then(result => result);
            const data = {
                allProducts: all,
                popularProducts: popular,
                newArrivals: newArrivals,
                onSale: onSale
            };

            return res.json({ status: 'success', data });

        default:
            return res.status(500);
    }
})

module.exports = router;