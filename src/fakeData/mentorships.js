var faker = require('faker');
var helpers = require('./helpers');
var users = require('./generated/users.json');
var categories = require('./categories.json');

function createMentorship(userIds) {
  var usersTotal = userIds.length;

  var types = ['skill', 'project', 'coffee'];
  var lengths = ['15 min', '30 min', '45 min', '1 hour'];
  var frequencies = ["one", "two", "three"];

  var categoryIndex = helpers.getRandomInt(categories.length);
  var typeIndex = helpers.getRandomInt(types.length);
  var lengthIndex = helpers.getRandomInt(lengths.length);
  var frequencyIndex = helpers.getRandomInt(frequencies.length);
  var mentorIndex = helpers.getRandomInt(usersTotal);
  var menteeIndex = helpers.getRandomInt(usersTotal);

  if (mentorIndex === menteeIndex) {
    return null;
  }

  var hasMentor = helpers.getRandomBoolean();
  var hasMentee = helpers.getRandomBoolean();

  var mentorId = null;
  var menteeId = null;
  var active = true;

  if (!hasMentor && hasMentee) {
    // Seeking mentor
    mentorId = null;
    menteeId = userIds[menteeIndex];
  } else if (hasMentor && !hasMentee) {
    // Seeking mentee
    mentorId = userIds[mentorIndex];
    menteeId = null;
  } else {
    // Completed
    mentorId = userIds[mentorIndex];
    menteeId = userIds[menteeIndex];
    active = false;
  }

  return {
    mentorId,
    menteeId,
    category: categories[categoryIndex],
    type: types[typeIndex],
    length: lengths[lengthIndex],
    frequency: frequencies[frequencyIndex],
    description: faker.lorem.sentences(),
    active,
  };
}

function createMentorships(limit) {
  var userIds = Object.keys(users);
  var mentorships = {};

  for (let i = 0; i < limit; i++) {
    var mentorship = createMentorship(userIds);
    var mentorshipId = faker.random.number();

    if (mentorship !== null) {
      mentorships[mentorshipId] = mentorship;
    }
  }

  helpers.createFile('mentorships', mentorships);
}

module.exports = createMentorships;
