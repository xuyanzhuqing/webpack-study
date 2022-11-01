import { join } from 'lodash-es'
import mark from './mark.jpg'
import loadError from './load-error.svg'
import minLoadError from './load-error.min.svg'
import welcome from './example.txt'

function component () {
  const div = document.createElement('div')
  div.innerText = join(['hello', 'world', welcome])

  const img = document.createElement('img')
  img.src = mark

  const svg = img.cloneNode(true)
  svg.src = loadError

  const minSvg = img.cloneNode(true)
  minSvg.src = minLoadError

  div.appendChild(img)
  div.appendChild(svg)
  div.appendChild(minSvg)

  return div
}

document.body.appendChild(component())