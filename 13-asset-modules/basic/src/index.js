import { join } from 'lodash-es'
import mark from './mark.jpg'
import loadError from './load-error.svg'

function component () {
  const div = document.createElement('div')
  div.innerText = join(['hello', 'world'])

  const img = document.createElement('img')
  img.src = mark

  const svg = img.cloneNode(true)
  svg.src = loadError

  div.appendChild(img)
  div.appendChild(svg)

  return div
}

document.body.appendChild(component())