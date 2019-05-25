import conservation from './conservation';

export default () => configContext => ({
  extensions: {
    livingplant: {
      conservation: conservation(configContext),
    },
  },
});
