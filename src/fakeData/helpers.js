var fs = require('fs');

function createFile(name, data) {
  fs.writeFile(`src/fakeData/generated/${name}.json`, JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log(name + '.json is saved!');
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomBoolean() {
  var num = Math.round(Math.random());

  if (num === 1) {
    return true;
  }

  return false;
}

module.exports = {
  createFile,
  getRandomInt,
  getRandomBoolean
}
