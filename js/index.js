let navActual = 0

const navOptions = document.querySelectorAll('.nav-opt')
for (let index = 0; index < navOptions.length; index++) {
  let option = navOptions[index]
  if (navActual == index) {
    option.classList.add('border-b-2')
  }
}

const hamIcon = document.querySelector('#ham-icon').addEventListener('click', () => {
  hamMenu.classList.toggle('hidden')
})
const hamMenu = document.querySelector('#hamb-menu')
const iconClose = document.querySelector('#icon-close').addEventListener('click', () => {
  hamMenu.classList.toggle('hidden')
})
const buttonContainer = document.querySelector('#btn-container');
const btnExplore = document.querySelector('#btn-explore')

  btnExplore.addEventListener('mouseover', () => {
    buttonContainer.classList.remove('bg-transparent')
    buttonContainer.classList.add('bg-[#bec3dd73]')
})
  btnExplore.addEventListener('mouseout', () => {
    buttonContainer.classList.remove('bg-[#bec3dd73]')
    buttonContainer.classList.add('bg-transparent')


})