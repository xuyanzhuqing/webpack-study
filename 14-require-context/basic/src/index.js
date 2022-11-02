import { join } from 'lodash-es'
import { word } from './template/lib/reg'
import './template/lib/index'
import './template/index'

console.info(word.test('cungen'))

function component () {
  const div = document.createElement('div')
  div.innerText = join(['hello', 'world'])
  return div
}

document.body.appendChild(component())