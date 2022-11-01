import { join } from 'lodash-es'
import mark from './mark.jpg'
import loadError from './load-error.svg'
import minLoadError from './load-error.min.svg'
import welcome from './example.txt'
import config from './config.yaml'
// import './index.css'
import './index.css?external'
// import './index.css?inline'

function read () {
  console.info(config)
}


function component () {
  const div = document.createElement('div')
  div.innerText = join(['hello', 'world', welcome])

  div.classList.add('red')

  const img = document.createElement('img')
  img.src = mark

  const svg = img.cloneNode(true)
  svg.src = loadError

  const minSvg = img.cloneNode(true)
  minSvg.src = minLoadError

  div.appendChild(img)

  div.onclick = read
  // div.appendChild(svg)
  // div.appendChild(minSvg)

  return div
}

document.body.appendChild(component())