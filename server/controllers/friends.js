var mongoose  = require('mongoose'),
    Friend    = mongoose.model('Friend');

module.exports = {
  index: function(req, res) {
    console.log('Friends index');
    Friend.find({}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(data);
      }
    })
  },
  show: function(req, res) {
    console.log(req.params);
    Friend.findOne({_id: req.params.id}, function(err,data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        console.log(data);
        res.json(data);
      }
    })
  },
  create: function(req, res) {
    console.log('Friends create');
    console.log('REQ.body', req.body);
    var friend = new Friend({name: req.body.name, age: req.body.age});
    console.log(friend);
    friend.save(function(err) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        // res.redirect('/friends');
        res.json({success: true});
      }
    })
  },
  update: function(req, res) {
    console.log(req.params, req.body);
    Friend.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        for (var i in req.body) {
          if (req.body[i] != data[i]) {
            data[i] = req.body[i];
          }
        }
        console.log(data);
        data.save(function(err, data) {
          if (err) {
            console.log(err);
            res.json(err);
          } else {
            console.log(data);
            res.json(data);
          }
        })
      }
    })
  },
  destroy: function(req, res) {
    console.log(req.params.id);
    Friend.findOne({_id: req.params.id}, function(err, data) {
      if (err) {
        console.log(err);
        res.json(err);
      } else {
        Friend.remove(data, function(err) {
          if (err) {
            console.log(err);
            res.json(err);
          } else {
            console.log('deleted');
            res.json({success: true});
          }
        })
      }
    })
  }
}
