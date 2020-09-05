/**
 * Run this script
 *
 * node src/fakeData/generate.js
 */


/* Run this first */
// var generateUsers = require('./users');
// generateUsers(100);

/* Then these */
var generateMentorships = require('./mentorships');
generateMentorships(200);
var generateQuestions = require('./questions');
generateQuestions(50);
