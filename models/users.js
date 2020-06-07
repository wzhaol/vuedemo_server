var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  "userId":String,
  "userName":String,
  "userPwd":String,
  "orderList":Array,
  "cartList":[
     {
      "productId":String,
     "productName":String,
      "salePrice":String,
      "productImage":String,
      "checked":String,
      "productNum":Number
     }
  ],
  "addressList":[{
    "addressId":String,
    "userName":String,
    "srteetName":String,
    "postCode":String,
    "tel":Number,
    "isDefault":Boolean
  }
  ]
})
module.exports = mongoose.model('User',userSchema)

