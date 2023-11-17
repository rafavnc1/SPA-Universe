import * as selectors from "./selectors.js"

export class Router {

  routes = {}

  add(routeName, pageLink) {
    this.routes[routeName] = pageLink
  }


  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    if(pathname === "/") {
      selectors.addBackgroundImage.classList.remove('exploration-background')
      selectors.addBackgroundImage.classList.add('home-background')
      selectors.addBackgroundImage.classList.remove('universe-background')

      selectors.exploration.classList.remove('selected')
      selectors.universe.classList.remove('selected')
      selectors.home.classList.add('selected')
    } else if ( pathname === "/universe"){
      selectors.addBackgroundImage.classList.remove('exploration-background')
      selectors.addBackgroundImage.classList.remove('home-background')
      selectors.addBackgroundImage.classList.add('universe-background')

      selectors.exploration.classList.remove('selected')
      selectors.universe.classList.add('selected')
      selectors.home.classList.remove('selected')
    } else if ( pathname === "/exploration") {
      selectors.addBackgroundImage.classList.add('exploration-background')
      selectors.addBackgroundImage.classList.remove('home-background')
      selectors.addBackgroundImage.classList.remove('universe-background')

      selectors.exploration.classList.add('selected')
      selectors.universe.classList.remove('selected')
      selectors.home.classList.remove('selected')
    }

    fetch(route)
    .then(data => data.text())
    .then(html => document.querySelector('#pages').innerHTML = html)
  }
}

