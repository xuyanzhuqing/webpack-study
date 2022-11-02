import { join } from 'lodash-es'
import print from './print.js'
import './index.css'

function component () {
  const div = document.createElement('div')
  div.innerText = join(['hello', 'cungen'])

  div.onclick = print

  div.classList.add('red')

  return div
}

let element = component()
document.body.appendChild(element)

// 更新dom
if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!')
    document.body.removeChild(element)
    element = component()
    document.body.appendChild(element)
  })
}