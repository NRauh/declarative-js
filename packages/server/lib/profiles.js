'use strict'
const cats = require('./cats');

module.exports = {
  getProfile(request, h) {
    const { profileId } = request.params;
    const profile = cats.find(cat => cat.id === profileId);

    if (!profile) {
      return h.response({ err: 'profile not found' }).code(404);
    }

    return profile;
  },
};
