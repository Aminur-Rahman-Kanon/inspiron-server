const express = require('express');
const router = express.Router();
const allProductsModel = require('../schema/schema').allProductsModel;
const popularProductsModel = require('../schema/schema').popularProductsModel;
const newArrivalsModel = require('../schema/schema').newArrivalModel;
const onSaleModel = require('../schema/schema').onSaleModel;


router.get('/', async (req, res) => {
    const all = await allProductsModel.find({}).then(result => result).catch(err => err);
    const popular = await popularProductsModel.find({}).then(result => result).catch(err => err);
    const onSale = await onSaleModel.find({}).then(result => result).catch(err => err);
    const newArrivals = await newArrivalsModel.find({}).then(result => result).catch(err => err);

    const data = {
        allProducts: all,
        popularProducts: popular,
        newArrivals: newArrivals,
        onSale: onSale
    };

    return res.json({ status: 'success', data });
})

module.exports = router;