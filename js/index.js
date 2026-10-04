import { hiragana } from "./bd.js"

const containerCaracter = document.querySelector('.btn-container')

let numRandom = Math.random() * hiragana.length;
let numSelected = Math.round(numRandom);

const pTag = document.createElement('p')
pTag.classList.add('caracter__p')
containerCaracter.append(pTag)

pTag.textContent = hiragana[numSelected].caracter;
