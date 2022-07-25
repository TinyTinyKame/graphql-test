const singerResolvers = require('./singer');
const songResolvers = require('./song');

module.exports = {
  ...singerResolvers,
  ...songResolvers
};
