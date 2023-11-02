const dialog = document.querySelector('.popup')
const showButton = document.querySelector('.preview-text__button')
const closeButton = document.querySelector('.popup__close')

showButton.addEventListener('click', () => {
  dialog.showModal()
})

closeButton.addEventListener('click', () => {
  dialog.close()
})