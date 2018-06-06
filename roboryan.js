const dictionary = require("./dictionary.js")

const RoboRyan = function(){
  this.friends = ["Tessa", "Ramsey"]
};

RoboRyan.prototype.findUser = function() {
  return Math.random() > 0.5 ? "Ramsey" : "Tessa";
};

RoboRyan.prototype.compose = function(user, tone) {
  let intro = dictionary.intro[Math.floor(Math.random() * dictionary.intro.length)]
  let connector = dictionary.connector[Math.floor(Math.random() * dictionary.intro.length)];
  let outro = Math.random() > 0.8 ? dictionary.outro[Math.floor(Math.random() * dictionary.outro.length)] : "";
  let adj = tone === "mean" ? dictionary.mean_adj[Math.floor(Math.random() * dictionary.mean_adj.length)] : dictionary.nice_adj[Math.floor(Math.random() * dictionary.nice_adj.length)];
  let noun = tone === "mean" ? dictionary.mean_noun[Math.floor(Math.random() * dictionary.mean_noun.length)] : dictionary.nice_noun[Math.floor(Math.random() * dictionary.nice_noun.length)];
  return intro + user + " " + connector + adj + " " + noun + " " + outro;
};

module.exports = RoboRyan;