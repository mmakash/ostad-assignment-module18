const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  store_id: {
    type: String,
    required: true,
  },
  store_passwd: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  success_url: {
    type: String,
    required: true,
  },
  fail_url: {
    type: String,
    required: true,
  },
  cancel_url: {
    type: String,
    required: true,
  },
  ipn_url: {
    type: String,
    required: true,
  },
  init_url: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('productDetails', dataSchema)