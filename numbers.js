// Write your numbers code in this file!
// document.getElementById('pick-a-number').addEventListener('input', event => {
//   let input = event.target.value
//   let nums = /^[0-9]+$/;
//   if (input.match(nums)){
//     fetch(`http://numbersapi.com/${input}/math`)
//       .then (res => res.text())
//       .then (data => {document.getElementById('random-math-fact').innerText = data})
//     } else {
//       document.getElementById('random-math-fact').innerText = 'please enter a valid number'
//     }
// })
document.addEventListener("DOMContentLoaded", setupPage)

function setupPage() {
    addFormHandlers()
    getFact()
}

////////////////////////////////////////////////////////////////
function renderNumberOneFact(fact){
    let div = document.querySelector('#one-facts')
    div.innerText = fact
    return div
}

function randomFactNumberOne(event) {
    event.preventDefault();
    fetch(`http://numbersapi.com/1/trivia`)
    .then(res => res.text())
    .then(res => {
        renderNumberOneFact(res)
    });
}
////////////////////////////////////////////////////////////////
function renderInputNumberFact(fact){
    let div = document.querySelector('#random-math-fact')
    div.innerText = fact
    return div
}

function randomFactInputNumber(event) {
    event.preventDefault();
    console.log(event.input)
    // let input = event.target.value
    let nums = /^[0-9]+$/;
    if (input.match(nums)){
        fetch(`http://numbersapi.com/${input}/trivia`)
        .then(res => res.text())
        .then(res => {
            renderInputNumberFact(res)
        })
    } else {
        document.querySelector('#random-math-fact').innerText = "please enter a valid number"
    }
}
////////////////////////////////////////////////////////////////
function renderAllNumsFacts (facts){
    let div = document.querySelector('#all-the-numbers')
    let list = document.createElement('ul')
    const values = Object.values(facts)
    for (let key of values) {
        let listItem = document.createElement('li')
        listItem.innerText = key
        list.appendChild(listItem)
    }
    div.appendChild(list)
    // return div
}
function randomFactAllNums(event) {
    event.preventDefault();
    fetch(`http://numbersapi.com/1..100/trivia`)
    .then(res => res.json())
    .then(res => {
        renderAllNumsFacts(res)
    });
}
////////////////////////////////////////////////////////////////
function addFormHandlers() {
    let num1 = document.querySelector("#number-one");
    let number = document.querySelector("#pick-a-number");
    let allNums = document.querySelector("#all-numbers-button");
    num1.addEventListener('click', randomFactNumberOne)
    number.addEventListener('input', randomFactInputNumber)
    allNums.addEventListener('click', randomFactAllNums)
}

function getFact(){
    // let year = 2019
    let yearInt = setInterval(yearFacts, 5000)
    function yearFacts(){
        fetch (`http://numbersapi.com/2019/year`)
        .then (res => res.text())
        .then (res => document.querySelector('#year-history').innerText = res)
    }
}
