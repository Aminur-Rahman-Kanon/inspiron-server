const mongoose = require('mongoose');

const allProducts = {
    title: { type: String, required: true },
    rating: Number,
    watching: String,
    price: { type: String, require: true },
    total: { type: Number, required: true },
    details: Array,
    img: Array,
    about: String
}

const testimonial = {
    name: {type: String, required: true},
    title: {type: String, required: true},
    comment: {type: String, required: true},
    img: {type: String, required: true}
}

const allProductsModel = mongoose.model('allProducts', allProducts);
const popularProductsModel = mongoose.model('popularProducts', allProducts);
const newArrivalModel = mongoose.model('newArrival', allProducts);
const onSaleModel = mongoose.model('onSale', allProducts);
const smartPhone = mongoose.model('smartphones', allProducts);
const laptop = mongoose.model('laptops', allProducts);
const game = mongoose.model('games', allProducts);
const headPhone = mongoose.model('headphones', allProducts);
const tablet = mongoose.model('tablets', allProducts);
const tv = mongoose.model('tv', allProducts);
const smartWatch = mongoose.model('watches', allProducts);

const testimonials = mongoose.model('testimonial', testimonial);

module.exports = {
    allProductsModel,
    popularProductsModel,
    newArrivalModel,
    onSaleModel,
    smartPhone,
    smartWatch,
    laptop,
    game,
    headPhone,
    tablet,
    tv,
    testimonials
}
