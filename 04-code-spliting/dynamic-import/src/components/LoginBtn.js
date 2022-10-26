

const loadAsync = () => import(/* webpackPrefetch: true */ './Modal.js')

export default function () {
  const btn = document.createElement('button')
  btn.type = 'button'
  btn.onclick = () => {
    // 登陆之后可能需要用到的资源
    loadAsync().then((res) => {
      res.openModal()
    })
    console.info('u click the button')
  }
  btn.innerText = 'check prefetch'
  return btn
}