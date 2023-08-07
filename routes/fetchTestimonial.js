const express = require('express');
const router = express.Router();
const testimonial = require('../schema/schema').testimonials;

router.get('/', async (req, res) => {
    await testimonial.find({}).then(result => {
        if (result.length){
            return res.json({ status: 'success',  data: result })
        }
        else {
            return res.json({ status: 'failed' })
        }
    }).catch(err => res.status(500));
})

module.exports = router;
