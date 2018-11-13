'use strict'
const cats = require('./cats');

module.exports = {
  getProfile(request, h) {
    return cats[request.params.profileId];
  },
};
