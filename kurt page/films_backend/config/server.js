const crypto = require('crypto');

module.exports = ({ env }) => {
  // Generate random app keys if not already defined
  let appKeys = env.array('APP_KEYS');
  if (!appKeys || appKeys.length === 0) {
    appKeys = [
      crypto.randomBytes(32).toString('hex'),
      crypto.randomBytes(32).toString('hex'),
    ];
  }

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: appKeys,
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
  };
};