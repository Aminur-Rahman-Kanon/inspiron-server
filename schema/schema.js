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

const allProductsModel = mongoose.model('allProducts', allProducts);
const popularProductsModel = mongoose.model('allProducts', allProducts);
const newArrivalModel = mongoose.model('allProducts', allProducts);
const onSaleModel = mongoose.model('allProducts', allProducts);
const smartPhone = mongoose.model('smartphones', allProducts);
const laptop = mongoose.model('laptops', allProducts);
const game = mongoose.model('games', allProducts);
const headPhone = mongoose.model('headphones', allProducts);
const tablet = mongoose.model('tablets', allProducts);
const tv = mongoose.model('tv', allProducts);
const smartWatch = mongoose.model('watches', allProducts);

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
    tv
}
