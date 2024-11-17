module.exports = () => ({
  'strapi-plugin-populate-deep': {
    config: {
      defaultDepth: 5,
    }
  },
  'admin-styles-override': {
    enabled: true,
    resolve: './src/plugins/admin-styles-override'
  },
  'media-prefix': {
    enabled: false,
  },
  upload: {
    provider: 'local',
    providerOptions: {
      // путь для хранения файлов на сервере
      sizeLimit: 10000000,
      publicPath: '/uploads',
    },
  },
});
