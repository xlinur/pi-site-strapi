module.exports = ({ env }) => ({
  host: env('HOST', 'http://localhost'),
  port: env.int('PORT', 1337),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
});
