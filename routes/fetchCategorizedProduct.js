const express = require('express');
const router = express.Router({ mergeParams: true });
const watches = require('../schema/schema').smartWatch;
const tv = require('../schema/schema').tv;
const tablet = require('../schema/schema').tablet;
const smartphone = require('../schema/schema').smartPhone;
const game = require('../schema/schema').game;
const laptop = require('../schema/schema').laptop;
const headphone = require('../schema/schema').headPhone;
const allProduct = require('../schema/schema').allProductsModel;
const popularProduct = require('../schema/schema').popularProductsModel;
const  newArrival= require('../schema/schema').newArrivalModel;
const onSale = require('../schema/schema').onSaleModel;

router.get('/', async (req, res) => {

    const category = req.params.category;
    
    switch(category) {
        case 'watches':
            await watches.find({}).then(result => {
                if (!result.length) return res.json({ status: 'nothing found' })
                return res.status(200).json({ data: result });
            }).catch(err => res.json({ status: 'failed' }));
            break;

        case 'tv':
            await tv.find({}).then(result => {
                if (!result.length) return res.json({ status: 'nothing found' })
                return res.status(200).json({ data: result });
            }).catch(err => res.json({ status: 'failed' }));
            break;

        case 'tablet':
            await tablet.find({}).then(result => {
                if (!result.length) return res.json({ status: 'nothing found' })
                return res.status(200).json({ data: result });
            }).catch(err => res.json({ status: 'failed' }));
            break;

        case 'smartphone':
            await smartphone.find({}).then(result => {
                if (!result.length) return res.json({ status: 'nothing found' })
                return res.status(200).json({ data: result });
            }).catch(err => res.json({ status: 'failed' }))
            break;

        case 'game':
            await game.find({}).then(result => {
                if (!result.length) return res.json({ status: 'nothing found' })
                return res.status(200).json({ data: result });
            }).catch(err => res.json({ status: 'failed' }));
            break;

        case 'laptop':
            await laptop.find({}).then(result => {
                if (!result.length) return res.json({ status: 'nothing found' })
                return res.status({ data: result })
            }).catch(err => res.json({ status: 'failed' }));
            break;

        case 'headphone':
            await headphone.find({}).then(result => {
                if (!result.length) return res.json({ status: 'nothing found' })
                return res.status(200).json({ data: result })
            }).catch(err => res.json({ status: 'failed' }));
            break;

        case 'allProducts':
            await allProduct.find({}).then(result => {
                if (!result.length) return res.json({ status: 'nothing found' })
                return res.status(200).json({ data: result })
            }).catch(err => res.json({ status: 'failed' }));
            break;

        case 'popularProducts':
            await popularProduct.find({}).then(result => {
                if (!result.length) return res.json({ status: 'nothing found' })
                return res.status(200).json({ data: result })
            }).catch(err => res.status(500));
            break;

        case 'newArrivals':
            await newArrival.find({}).then(result => {
                if (!result.length) return res.json({ status: 'nothing found' })
                return res.status(200).json({ data: result })
            }).catch(err => res.status(500));
            break;

        case 'onSale':
            await onSale.find({}).then(result => {
                if (!result.length) return res.json({ status: 'nothing found' })
                return res.status(200).json({data: result});
            }).catch(err => res.status(500));
            break;

        default:
            return res.json({ status: 'request not found' });
    }
})

module.exports = router;
