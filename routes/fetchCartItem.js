const express = require('express');
const router = express.Router();
const cartModel = require('../schema/schema').cartModel;

router.post('/', async (req, res) => {
    const { deviceId } = req.body;
    const product = await cartModel.find({ deviceId: deviceId }).then(result => result.length ? result[0].product : {}).catch(err => err);
    return res.status(200).json({ data: product });
})

module.exports = router;
