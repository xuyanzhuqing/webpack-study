const loadLodash = () => import(/* webpackPreload: true */'./ModalLib')

export const openModal = async () => {
  const { join } = await loadLodash()
  console.info('join', join('', 'cun', 'gen'))
  console.info('modal is open')
}