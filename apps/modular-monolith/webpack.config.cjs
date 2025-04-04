const { composePlugins, withNx } = require('@nx/webpack')

module.exports = composePlugins(
  withNx({
    target: 'node',
    skipTypeChecking: true,
  }),
  (config) => {
    // Update the webpack config as needed here.
    // e.g. `config.plugins.push(new MyPlugin())`
    return config
  }
)
