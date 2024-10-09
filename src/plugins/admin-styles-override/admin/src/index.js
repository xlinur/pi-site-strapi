import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import './global.css';

const name = pluginPkg.strapi.name;

export default {
  register(app) {
    app.registerPlugin({
      id: pluginId,
      name,
    });
  },

  bootstrap(app) {},
};
