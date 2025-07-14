const Product = require('../models/Product');

exports.getAll = async (req, res) => {
  const items = await Product.find();
  res.json(items);
};

exports.create = async (req, res) => {
  const newItem = new Product(req.body);
  const saved = await newItem.save();
  res.status(201).json(saved);
};

// TODO: exports.update, exports.delete
