const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    price: { type: Number, required: true },
    productImage: { type: String, required: true }
});

// const productSchema = mongoose.Schema({
//     // _id: mongoose.Schema.Types.ObjectId,
//     name: { type: String},
//     price: { type: Number},
//     productImage: { type: String}
// });

module.exports = mongoose.model('Product', productSchema); 