const hamIcon = document.querySelector('#ham-icon').addEventListener('click', () => {
  hamMenu.classList.toggle('hidden')
})
const hamMenu = document.querySelector('#hamb-menu')
const iconClose = document.querySelector('#icon-close').addEventListener('click', () => {
  hamMenu.classList.toggle('hidden')
})

const CircList = document.querySelector('#circ-list')

const techImg =document.querySelector('#tech-img')
const techNameSpan =document.querySelector('#tech-name')
const techDesc =document.querySelector
('#tech-description')






let navActual = 3

const navOptions = document.querySelectorAll('.nav-opt')
for (let index = 0; index < navOptions.length; index++) {
  let option = navOptions[index]
  if (navActual == index) {
    option.classList.add('border-b-2')
  }
}

let selectedTech = 0
let technology


let imgSize

window.addEventListener('resize', getImage)
function getImage() {
  console.log('xd')
  if (screen.width >= 1024) {
    imgSize = 'portrait'

  } else if(screen.width <= 1024){
    imgSize = 'landscape'

  }renderTech()
}



getData()
function getData() {
  fetch('./js/data.json')
  .then(response => response.json())
    .then(data => {
      jsonData = data;
      console.log(data)
      technology = data.technology
      getImage()
      renderList()


    })
    .catch(error => {
      console.error('Error al obtener el archivo JSON:', error);
    });
}

function renderList() {
  for (let index = 0; index < technology.length; index++) {
    let newCircle = document.createElement('li')
    newCircle.classList.add('border','border-white', 'w-10', 'h-10', 'rounded-full',  'flex', 'justify-center', 'items-center', 'font-Bellefair', 'hover:bg-white', 'hover:text-primary-bg', 'cursor-pointer', 'md:w-16', 'md:h-16')
    newCircle.textContent = index + 1
    CircList.append(newCircle)
    if (selectedTech == index) {
      newCircle.classList.toggle('bg-white')
      newCircle.classList.toggle('text-primary-bg')
    }
    newCircle.addEventListener('click', () => {
      if (selectedTech != index) {
        newCircle.classList.toggle('bg-white')
        newCircle.classList.toggle('text-primary-bg')
        let previousCirc = CircList.children[selectedTech]
        previousCirc.classList.toggle('bg-white')
        previousCirc.classList.toggle('text-primary-bg')
      }
      selectedTech = index
      getImage()
      
    })
    
  }
}

function renderTech() {
  console.log('si')
  techImg.setAttribute('src', technology[selectedTech].images[imgSize])
  techNameSpan.textContent = technology[selectedTech].name
  techDesc.textContent = technology[selectedTech].description
}