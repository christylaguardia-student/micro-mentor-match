var faker = require('faker');
var helpers = require('./helpers');

function createUsers(limit) {
  const users = {};

  for (let i = 0; i < limit; i++) {
    const userId = faker.random.number();

    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      avatar: faker.image.avatar(),
      gender: faker.name.gender(),
      jobTitle: faker.name.jobTitle(),
      companyName: faker.company.companyName(),
      bio: faker.lorem.sentences(),
      location: helpers.createLocation(),
      linkedIn: helpers.createLinkedIn(),
      portfolio: helpers.createPortfolio(),
      categories: helpers.createCategoriesWithYears(),
    };

    users[userId] = user;
  }

  helpers.createFile('users', users);
}

module.exports = createUsers;
