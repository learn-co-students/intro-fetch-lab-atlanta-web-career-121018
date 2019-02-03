
document.addEventListener("DOMContentLoaded", setupPage)

function setupPage() {
    addFormHandlers()
}

function renderOpeningCrawl(text) {
    let element = document.createElement('p')
    element.className = 'crawlParagraph' // element.classList.push('card')
    element.textContent = text
    // element.appendChild(pokeImg)
    // element.appendChild(pokeName)
    return element
}

function getOpeningCrawl(event) {
    event.preventDefault();
    fetch('https://swapi.co/api/films/1/')
    .then(res => res.json())
    .then(res => {
        let openText = renderOpeningCrawl(res.opening_crawl)
        let element = document.querySelector('#crawlDiv')
        element.appendChild(openText)
    });
}

function renderPlanet(name, climate) {
    let div = document.querySelector('#planetData')
    let nameElement = document.createElement('p')
    let climateElement = document.createElement('p')
    nameElement.className = 'planet-name'
    climateElement.className = 'planet-climate'
    nameElement.textContent = `Planet Name: ${name}`
    climateElement.textContent = `Planet Climate: ${climate}`
    div.appendChild(nameElement)
    div.appendChild(climateElement)
    return div
}

function getPlanet(event) {
    event.preventDefault();
    let id = event.target.planetId.value
    let url = `https://swapi.co/api/planets/${id}/`
    fetch(url)
    .then(res => res.json())
    .then(res => {
        renderPlanet(res.name, res.climate)
    });
}

function addFormHandlers() {
    let crawl = document.querySelector("#crawlBtn");
    let planet = document.querySelector("#planetForm");
    crawl.addEventListener('click', getOpeningCrawl)
    planet.addEventListener('submit', getPlanet)
}
