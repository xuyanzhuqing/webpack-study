import { join } from 'lodash-es'
import './index.css'
import styles from './style.css'
import cover from './cover.lazy.css'

function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  element.classList.add('red')
  return element;
}

// 动态插入样式
window.setTimeout(cover.use, 3000)
window.setTimeout(cover.unuse, 6000)


document.body.appendChild(component());