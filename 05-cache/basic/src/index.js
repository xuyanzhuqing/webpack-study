
import { join } from 'lodash-es'
import print from './print'
function component () {
  const div = document.createElement('div')
  div.innerText = join(['hello', 'cungen', '!'], '')
  div.onclick = print
  return div
}

document.body.appendChild(component())