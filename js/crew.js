const hamIcon = document.querySelector('#ham-icon').addEventListener('click', () => {
  hamMenu.classList.toggle('hidden')
})
const hamMenu = document.querySelector('#hamb-menu')
const iconClose = document.querySelector('#icon-close').addEventListener('click', () => {
  hamMenu.classList.toggle('hidden')
})


const crewmateImg = document.querySelector('#crewmate-img')
const crewmateNameSpan = document.querySelector('#crewmate-name')
const crewmateRoleSpan = document.querySelector('#crewmate-role')
const crewmateBioSpan = document.querySelector('#crewmate-bio')

const dotList = document.querySelector('#dot-list')

let navActual = 2

const navOptions = document.querySelectorAll('.nav-opt')
for (let index = 0; index < navOptions.length; index++) {
  let option = navOptions[index]
  if (navActual == index) {
    option.classList.add('border-b-2')
  }
}

let crew
let selectedCrewmate = 0
getData()
function getData() {
  fetch('./js/data.json')
  .then(response => response.json())
    .then(data => {
      jsonData = data;
      crew = data.crew
      renderCrewmates()
      renderList()
    })
    .catch(error => {
      console.error('Error al obtener el archivo JSON:', error);
    });
}

function renderList() {
  for (let index = 0; index < crew.length; index++) {
    let newDot = document.createElement('li')
    newDot.classList.add('w-3', 'h-3', 'rounded-full', 'bg-white' ,'cursor-pointer', 'opacity-20', 'hover:opacity-100', 'lg:w-6', 'lg:h-6')
    dotList.append(newDot)
    if (selectedCrewmate == index) {
      newDot.classList.remove('opacity-20')
      newDot.classList.add('opacity-100')
    }
    newDot.addEventListener('click', () => {
      if (selectedCrewmate != index) {
        const previousCrewmate = dotList.children[selectedCrewmate]
        previousCrewmate.classList.add('opacity-20')
        previousCrewmate.classList.remove('opacity-100')
        newDot.classList.remove('opacity-20')
        newDot.classList.add('opacity-100')
        
        
      } 
      selectedCrewmate = index
      renderCrewmates()
    })
    
  }
}
function renderCrewmates() {
  console.log('si')
  crewmateImg.setAttribute('src', crew[selectedCrewmate].images.png)
  crewmateNameSpan.textContent = crew[selectedCrewmate].name
  crewmateRoleSpan.textContent = crew[selectedCrewmate].role
  crewmateBioSpan.textContent = crew[selectedCrewmate].bio
}