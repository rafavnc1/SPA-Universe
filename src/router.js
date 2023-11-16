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
    fetch(route)
    .then(data => data.text())
    .then(html => document.querySelector('#pages').innerHTML = html)
  }
}