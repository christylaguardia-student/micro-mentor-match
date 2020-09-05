var faker = require('faker');
var helpers = require('./helpers');
var usersData = require('./generated/users.json');

function createMentorship(userIds) {
  const usersTotal = userIds.length;
  const mentorIndex = helpers.getRandomInt(usersTotal);
  const menteeIndex = helpers.getRandomInt(usersTotal);

  if (mentorIndex === menteeIndex) {
    return null;
  }

  const hasMentor = helpers.getRandomBoolean();
  const hasMentee = helpers.getRandomBoolean();

  let mentorId = null;
  let menteeId = null;
  let active = true;

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
    title: faker.lorem.words(),
    description: faker.lorem.sentences(),
    categories: helpers.createCategories(),
    type: helpers.createType(),
    length: helpers.createLength(),
    frequency: helpers.createFrequency(),
    formats: helpers.createFormats(),
    active,
  };
}

function createMentorships(limit) {
  const userIds = Object.keys(usersData);
  const mentorships = {};

  for (let i = 0; i < limit; i++) {
    const mentorship = createMentorship(userIds);
    const mentorshipId = faker.random.number();

    if (mentorship !== null) {
      mentorships[mentorshipId] = mentorship;
    }
  }

  helpers.createFile('mentorships', mentorships);
}

module.exports = createMentorships;
