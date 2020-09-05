var faker = require('faker');
var helpers = require('./helpers');
var categoriesData = require('./categories.json');

function createPortfolio() {
  var hasPortfolio = helpers.getRandomBoolean();

  let portfolio = null;

  if (hasPortfolio) {
    portfolio = faker.internet.url();
  }

  return portfolio;
}

function createLinkedIn() {
  var hasLinkedIn = helpers.getRandomBoolean();

  if (hasLinkedIn) {
    return "https://www.linkedin.com/";
  };

  return null;
}

function createCategories() {
  var count = helpers.getRandomInt(3);

  if (count === 0) {
    return null;
  }

  let categories = [];

  for (let i = 0; i < count; i++) {
    var categoryIndex = helpers.getRandomInt(categoriesData.length);

    categories.push({
      category: categoriesData[categoryIndex],
      years: helpers.getRandomInt(25),
      months: helpers.getRandomInt(12),
    })
  }

  return categories;
}

function createUsers(limit) {
  var users = {};

  for (let i = 0; i < limit; i++) {
    var userId = faker.random.number();

    var user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      avatar: faker.image.avatar(),
      gender: faker.name.gender(),
      jobTitle: faker.name.jobTitle(),
      companyName: faker.company.companyName(),
      bio: faker.lorem.sentences(),
      linkedIn: createLinkedIn(),
      portfolio: createPortfolio(),
      categories: createCategories(),
    };

    users[userId] = user;
  }

  helpers.createFile('users', users);
}

module.exports = createUsers;
