// import _ from 'lodash-es'

function component () {
  const div = document.createElement('div')
  div.innerText = _.join(['hello', 'world'])
  return div
}

document.body.appendChild(component())