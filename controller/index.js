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
            "username": “muazkh”,
            "credential": "muazkh",
            "urls": ['stun:webrtcweb.com:7788' ,'stun:stun.l.google.com:19302']

          }]
      }
    ));
  }
};
