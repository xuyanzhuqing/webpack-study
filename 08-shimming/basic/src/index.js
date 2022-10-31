// import _ from 'lodash-es'
import { file, helpers } from './globals.js'

function component () {
  const div = document.createElement('div')
  div.innerText = join(['hello', 'world'])
  console.info(this)
  return div
}

console.info(file)
document.body.appendChild(component())