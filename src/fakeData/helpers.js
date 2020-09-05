var faker = require('faker');
var fs = require('fs');

var data = require('./static-data.json')

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

function createPortfolio() {
  const hasPortfolio = getRandomBoolean();

  let portfolio = null;

  if (hasPortfolio) {
    portfolio = faker.internet.url();
  }

  return portfolio;
}

function createLinkedIn() {
  const hasLinkedIn = getRandomBoolean();

  if (hasLinkedIn) {
    return "https://www.linkedin.com/";
  };

  return null;
}

function createCategories() {
  const count = getRandomInt(3);

  if (count === 0) {
    return null;
  }

  let categories = [];

  for (let i = 0; i < count; i++) {
    const categoryIndex = getRandomInt(data.categories.length);

    categories.push(data.categories[categoryIndex]);
  }

  return categories;
}

function createCategoriesWithYears() {
  const count = getRandomInt(3);

  if (count === 0) {
    return null;
  }

  let categories = [];

  for (let i = 0; i < count; i++) {
    const categoryIndex = getRandomInt(data.categories.length);

    categories.push({
      category: data.categories[categoryIndex],
      years: getRandomInt(25),
      months: getRandomInt(12),
    })
  }

  return categories;
}

function createCategory() {
  const index = getRandomInt(data.categories.length);
  return data.categories[index];
}

function createType() {
  const index = getRandomInt(data.types.length);
  return data.types[index];
}

function createLength() {
  const index = getRandomInt(data.lengths.length);
  return data.lengths[index];
}

function createFrequency() {
  const index = getRandomInt(data.frequencies.length);
  return data.frequencies[index];
}

function createFormats() {
  const count = getRandomInt(data.format.length);

  if (count === 0) {
    return null;
  }

  const formats = data.format.slice(0, count - 1);
  return formats;
}

function createLocation() {
  return {
    city: faker.address.city(),
    state: faker.address.state(),
    timeZone: faker.address.timeZone(),
  };
}

module.exports = {
  createFile,
  getRandomInt,
  getRandomBoolean,
  createPortfolio,
  createLinkedIn,
  createCategories,
  createCategoriesWithYears,
  createCategory,
  createType,
  createLength,
  createFrequency,
  createFormats,
  createLocation,
}
