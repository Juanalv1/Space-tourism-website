const hamIcon = document.querySelector('#ham-icon').addEventListener('click', () => {
  hamMenu.classList.toggle('hidden')
})
const hamMenu = document.querySelector('#hamb-menu')
const iconClose = document.querySelector('#icon-close').addEventListener('click', () => {
  hamMenu.classList.toggle('hidden')
})

let selectedPlanet = 0

let jsonData
let destinations

const planetList = document.querySelector('#planet-list')

function renderList() {
  for (let index = 0; index < destinations.length; index++) {
    const planet = destinations[index];
    let newPlanet = document.createElement('li')
    newPlanet.textContent = planet.name
    newPlanet.classList.add('pb-2','border-b-white', 'cursor-pointer', 'uppercase', 'text-center')
    if (selectedPlanet == index) {
      newPlanet.classList.toggle('border-b-2')
      newPlanet.classList.toggle('text-white')
    }
    newPlanet.addEventListener('click', () => {
      
      if (selectedPlanet != index) {
        const previousPlanet = planetList.children[selectedPlanet]
        previousPlanet.classList.toggle('border-b-2')
        previousPlanet.classList.toggle('text-white')
        newPlanet.classList.toggle('border-b-2')
        newPlanet.classList.toggle('text-white') 
      }
      selectedPlanet = index
      renderPlanets()
    })
    planetList.append(newPlanet)
  ;
  }
}




const planetImg = document.querySelector('#planet-img')
const planetNameSpan = document.querySelector('#planet-name')
const planetDescriptionSpan = document.querySelector('#planet-description')
const planetDistanceSpan = document.querySelector('#planet-distance')
const planetTimeSpan = document.querySelector('#travel-time')


let navActual = 1

const navOptions = document.querySelectorAll('.nav-opt')
for (let index = 0; index < navOptions.length; index++) {
  let option = navOptions[index]
  if (navActual == index) {
    option.classList.add('border-b-2')
  }
}

function getData() {
  fetch('./js/data.json')
  .then(response => response.json())
    .then(data => {
      jsonData = data;
      destinations = data.destinations
      showdata()
      renderList()
      renderPlanets()
    })
    .catch(error => {
      console.error('Error al obtener el archivo JSON:', error);
    });
}
function showdata() {
  console.log(jsonData)
  console.log(destinations)
}
function renderPlanets() {
  console.log('si')
  planetImg.setAttribute('src', destinations[selectedPlanet].images.png)
  planetNameSpan.textContent = destinations[selectedPlanet].name
  planetDescriptionSpan.textContent = destinations[selectedPlanet].description
  planetDistanceSpan.textContent = destinations[selectedPlanet].distance
  planetTimeSpan.textContent = destinations[selectedPlanet].travel
}

getData()

