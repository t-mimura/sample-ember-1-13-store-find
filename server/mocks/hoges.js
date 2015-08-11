var timeToStr = function(datetime) {
  return datetime.getHours() + ":" + datetime.getMinutes() + ":" + datetime.getSeconds() + "." + datetime.getMilliseconds();
};
var createNewItem = function(i, datetime) {
  return {
    id: i,
    label: 'hoge' + i,
    value: timeToStr(datetime)
  };
};

var MAX = 5;

module.exports = function(app) {
  var express = require('express');
  var hogeRouter = express.Router();

  hogeRouter.get('/', function(req, res) {
    setTimeout(function() {
      var returnValue = [];
      for (var i = 1, n = MAX; i <= n; i++) {
        returnValue.push(createNewItem(i, new Date()));
      }
      res.send({
        'hoges': returnValue
      });
    }, 500);
  });

  hogeRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  hogeRouter.get('/:id', function(req, res) {
    if (req.params.id > MAX) {
      res.status(404).end();
      return;
    }

    setTimeout(function() {
      res.send({
        'hoge': createNewItem(req.params.id, new Date())
      });
    }, 500);
  });

  hogeRouter.put('/:id', function(req, res) {
    res.send({
      'hoge': {
        id: req.params.id
      }
    });
  });

  hogeRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/hoges', hogeRouter);
};
