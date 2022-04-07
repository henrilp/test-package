const path = require('path')

module.exports = ({ config }) => {
  config.resolve.modules = [
    path.resolve(__dirname, '..', 'src'), // this line allows absolute imports in StoryBook
    'node_modules',
  ]

  return config
}
