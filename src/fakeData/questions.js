var faker = require('faker');
var helpers = require('./helpers');
var users = require('./generated/users.json');
var categories = require('./categories.json');

function createComments(userIds) {
  var count = helpers.getRandomInt(10);

  if (count === 0) {
    return null;
  }

  var comments = {};

  for (let i = 0; i < count; i++) {
    var commentId = faker.random.number();
    var userIndex = helpers.getRandomInt(userIds.length);

    var comment = {
      userId: userIds[userIndex],
      comment: faker.lorem.sentences()
    };

    comments[commentId] = comment;
  }

  return comments;
};

function createQuestions(limit) {
  var userIds = Object.keys(users);
  var questions = {};

  for (let i = 0; i < limit; i++) {
    var questionId = faker.random.number();
    var userIndex = helpers.getRandomInt(userIds.length);
    var categoryIndex = helpers.getRandomInt(categories.length);

    var question = {
      userId: userIds[userIndex],
      category: categories[categoryIndex],
      question: faker.lorem.sentences().replace('.', '?'),
      answered: helpers.getRandomBoolean(),
      comments: createComments(userIds) // TODO: should comments not be nested?
    }

    questions[questionId] = question;
  }

  helpers.createFile('questions', questions);
}

module.exports = createQuestions;
