const path = require('path')

module.exports = (env) => {
  // Use env.<YOUR VARIABLE> here:
  console.log('Goal: ', env.goal); // 'local'
  console.log('Production: ', env.production, typeof env.production); // true
  console.info('-'.repeat(100))
  return {
    entry: './src/index.js',
    output: {
      filename: 'xxxx.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
}