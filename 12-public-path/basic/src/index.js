import { join } from 'lodash-es'

function component () {
  const div = document.createElement('div')
  div.innerText = join(['hello', 'world'])

  return div
}

document.body.appendChild(component())