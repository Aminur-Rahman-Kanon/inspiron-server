const express = require('express');
const router = express.Router();
const addToCartModel = require('../schema/schema').cartModel;

router.post('/', async (req, res) => {
    const { deviceId, product } = await req.body;
    await addToCartModel.find({ deviceId }).then(async response => {
        if (response.length) {
            await addToCartModel.updateOne({ deviceId: deviceId }, {
                $set: {
                    product: product
                }
            }).then(success => res.status(200).json({ status: 'added' })).catch(err => res.status(400));
        }
        else {
            await addToCartModel.create({ deviceId, product }).then(success => res.status(200).json({ status: 'added' })).catch(err => res.status(400));
        }
    }).catch(err => console.log(err));
})

module.exports = router;
