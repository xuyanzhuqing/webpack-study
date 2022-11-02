
// const cache = {};

// function importAll(r) {
//   r.keys().forEach((key) => (cache[key] = r(key)));
// }

// importAll(require.context('./', true, /\.js$/));

// console.info(
//   require.context('./', false, /\.js$/).keys(),
//   require.context('./', true, /\.js$/).keys(),
// )

const load =  async function (name) {
  return await import('./' + name + '.js')
}

load('table').then((res) => {
  console.info('res', res.default())
}).catch(err => {
  console.info('err', err)
})