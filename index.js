const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.set("trust proxy", true);

//importing routes
const allProductsRoute = require('./routes/fetchProducts');
const fetchTestimonial = require('./routes/fetchTestimonial');
const postTestimonial = require('./routes/postTestimonial');
const categorizedProduct = require('./routes/fetchCategorizedProduct');


app.use('/products/initial-product', allProductsRoute);
app.use('/get-testimonial', fetchTestimonial);
app.use('/post-testimonial', postTestimonial);
app.use('/shop/:category', categorizedProduct);

//initiating mongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true 
}).then(res => console.log('database is connected')).catch(err => console.log(err));

//temporary data writing code
// data.map(async item => await model.create({
//     title: item.title,
//     rating: item.rating,
//     watching: item.watching,
//     price: item.price,
//     total: item.total,
//     details: item.details,
//     img: item.img,
//     about: item.about
// }).then(res => console.log(res)).catch(err => console.log(err)));

//staticaly serving the public folder
app.use(express.static('public'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('public'))
}

//initiating express server
const port = process.env.PORT
app.listen(port || '8000', (err) => {
    if (err) {
        return new Error('Server failed to run');
    }
    console.log('server is running on port 8000');
})