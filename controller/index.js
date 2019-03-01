var Https = require('https');
var Common = require('./common');

exports.main = {
  handler: function (request, reply) {
    var params = Common.getRoomParameters(request, null, null, null);

    reply.view('index_template', params);
  }
};

exports.turn = {
  handler: function (request, reply) {
    var getOptions = {
      host: 'instant.io',
      port: 443,
      path: '/__rtcConfig__',
      method: 'GET'
    };
    reply(JSON.stringify(
      {

        "iceServers": [
          {
            "username": "shobured@gmail.com",
            "credential": "turn",
            "urls": ["turn:numb.viagenie.ca"]

          }]
      }
    ));
  }
};
