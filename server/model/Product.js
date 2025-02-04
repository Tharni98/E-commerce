// const mongoose = require('mongoose');

// const ProductModel = mongoose.Schema(
//     {
//         "id": {
//             require:true,
//             type:Number,
//             unique:true,
//             index:true
//         },
//         "name": {
//             require: true,
//             type:String
//         },
//         "price": {
//             require:true,
//             type:Number
//         },
//         "currency": {require: true,
//                      type:String},

//         "image": {
//             require: true,
//             type:String
//         }
//     }

// );

// const Product=mongoose
//     .model('Product',ProductModel);

// module.exports=Product;

const mongoose =require('mongoose');
const ProductModel = mongoose.Schema(
    {
    "id":{
        require: true,
        type: Number,
        unique: true,
        index: true //fro better perfomence
        },
    "name": {
        require: true,
        type: String
    },
    "price": {
        require:true,
        type: Number
    },
    "currency": {
        require:true,
        type: String
    },
    "image": {
        require: true,
        type: String
    }
    },
    {versionKey:false}
);
const Product =mongoose.model('Product',ProductModel);
module.exports = Product;