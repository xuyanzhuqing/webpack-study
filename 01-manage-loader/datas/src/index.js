import { join } from 'lodash-es'
import './index.css'

console.info(blue)

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('red')
  return element;
}


document.body.appendChild(component());