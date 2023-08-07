const express = require('express');
const router = express.Router();
const testimonial = require('../schema/schema').testimonials;

router.post('/', async (req, res) => {
    const { name, title, comment } = req.body;

    await testimonial.create({
        name, title, comment
    }).then(res => console.log(res)).catch(err => console.log(err));
})

module.exports = router;
