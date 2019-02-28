# WebRTC Screen Share, Nodejs backend based on AppRTC
Nodejs based AppRTC server

## Config

Update the url where this server will be hosted at in the config/index.js TURN_BASE_URL variable.

Also update the new URL in the android app acompanying this either within the app or in the source code.

## Setup
For heroku simply either push the directry to a heroku app or link it with a github repo & heroku will automatcially take care of SSL as well.

For manual SSL/nginx based SSL you'll have to configure the node app or nginx conf accordingly. Free SSL certs from "Let's Encrypt" tool.

cd into directory & run the below
```
$ npm install
```

## Run node-apprtc
```
$ node index.js
```

Open your browser and navigate to http://localhost:4567


## License
MIT

## Author 

Akash Paul