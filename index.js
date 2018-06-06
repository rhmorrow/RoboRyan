//Callback functions
const Twitter = require('twitter-node-client').Twitter;
const RoboRyan = require("./roboryan");
const config = require("./data/twitter_config.js");

const roboryan = new RoboRyan();

const twitter = new Twitter(config);

const error = function (err, response, body) {
  console.log('ERROR [%s]', err);
};

const success = function (data) {
  console.log('Data [%s]', data);
};

const tweet = function() {
  const user = roboryan.findUser();
  const message = user === "Ramsey" ? roboryan.compose(user, "mean") : roboryan.compose(user, "nice") 
  twitter.postTweet({ status: message }, error, success)
}

tweet();