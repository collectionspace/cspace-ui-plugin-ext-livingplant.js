import conservation from './conservation';

module.exports = () => configContext => ({
  extensions: {
    livingplant: {
      conservation: conservation(configContext),
    },
  },
});
