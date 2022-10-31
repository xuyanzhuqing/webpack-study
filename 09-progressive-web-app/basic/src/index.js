import { join } from 'lodash-es'

function component () {
  const div = document.createElement('div')
  div.innerText = join(['hello', 'cungen'])
  return div
}

document.body.appendChild(component())

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}