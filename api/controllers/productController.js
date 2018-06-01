'use strict';

var mongoose = require('mongoose'),
  Listing = mongoose.model('Listing');



exports.list_all_products = function (req, res) {
  var searchQuery = {};
  //searchQuery.text = {$regex: req.query.title, $options: 'i'};


  if (req.query != "{}") {
    searchQuery = { 'text': new RegExp(req.query.title, 'i') };
  } else {
    searchQuery = "{}";
  }
  console.log(searchQuery);



  Listing.find(searchQuery, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });

};

exports.list_liked_products = function (req, res) {
console.log(req.path);
   var searchQuery = { 'userId': req.query.id, 'isFavorite': "true" };
  console.log(searchQuery);



  Listing.find(searchQuery, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });

};

exports.sample_list = function (req, res) {
  var uid = req.params.uid,
    //path = req.params[0] ? req.params[0] : 'index.html';
    path = "listing.json";
  res.sendFile(path, { root: './public' });
}

exports.create_a_product = function (req, res) {
  var it = new Listing(req.body);
  it.save(function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.read_a_product = function (req, res) {
  Listing.findById(req.params.pId, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.update_a_product = function (req, res) {
  Listing.findOneAndUpdate({ _id: req.params.pId }, req.body, { new: true }, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};
// Task.remove({}).exec(function(){});
exports.delete_a_product = function (req, res) {

  Listing.remove({
    _id: req.params.pId
  }, function (err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
