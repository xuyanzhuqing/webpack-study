import { join } from 'lodash-es'
import './index.css'
import Mark from './mark.jpg'

function component () {
  const div = document.createElement('div')
  div.innerText = join(['hello', 'world'])

  const img = document.createElement('img')
  img.src = Mark

  div.appendChild(img)
  return div
}

document.body.appendChild(component())