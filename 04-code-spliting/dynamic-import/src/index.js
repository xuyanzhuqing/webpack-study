
import loginBtn from './components/LoginBtn'

async function component () {
  const div = document.createElement('div')
  const loadsh = await import('lodash-es')

  div.innerHTML = loadsh.join(['hello', 'world', '!'], '')
  return div
}

component().then(el => {
  document.body.appendChild(el)
  document.body.appendChild(loginBtn())
})