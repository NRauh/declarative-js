'use strict'

const profiles = require('./profiles');

module.exports = [
  {
    method: 'GET',
    path: '/api/profiles/{profileId}',
    handler: profiles.getProfile,
  },
];
