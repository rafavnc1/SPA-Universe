const home = document.getElementById('homepage')
const universe = document.getElementById('universePage')
const exploration = document.getElementById('explorationPage')
const addBackgroundImage = document.querySelector('body')


function explorationBackground() {
  addBackgroundImage.classList.add('exploration-background')
  addBackgroundImage.classList.remove('home-background')
  addBackgroundImage.classList.remove('universe-background')

  universe.classList.remove('selected')
  exploration.classList.add('selected')
  home.classList.remove('selected')
}

function homeBackground() {
  addBackgroundImage.classList.remove('exploration-background')
  addBackgroundImage.classList.add('home-background')
  addBackgroundImage.classList.remove('universe-background')

  universe.classList.remove('selected')
  exploration.classList.remove('selected')
  home.classList.add('selected')
}

function universeBackground() {
  addBackgroundImage.classList.add('universe-background')
  addBackgroundImage.classList.remove('exploration-background')
  addBackgroundImage.classList.remove('home-background')

  universe.classList.add('selected')
  exploration.classList.remove('selected')
  home.classList.remove('selected')
}

home.addEventListener('click', homeBackground)

universe.addEventListener('click', universeBackground)

exploration.addEventListener('click', explorationBackground)