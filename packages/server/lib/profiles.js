'use strict'
const cats = require('./cats');

module.exports = {
  getProfile(request, h) {
    const { profileId } = request.params;

    if (cats.length <= profileId) {
      return h.response({ err: 'profile not found' }).code(404);
    }

    return cats[profileId];
  },
};
