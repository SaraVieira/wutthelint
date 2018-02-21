const OfflinePlugin = require('offline-plugin');
const preactCliLodash = require('preact-cli-lodash');

export default (config, env, helpers) => {
	const plugins = config.plugins
	plugins.push(new OfflinePlugin())
	preactCliLodash(config);

	return config
};
