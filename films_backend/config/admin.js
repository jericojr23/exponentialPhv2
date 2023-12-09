const crypto = require('crypto');

module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', crypto.randomBytes(16).toString('base64')), // Generate salt if not defined
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', crypto.randomBytes(16).toString('base64')), // Generate salt if not defined
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', crypto.randomBytes(16).toString('base64')), // Generate salt if not defined
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});