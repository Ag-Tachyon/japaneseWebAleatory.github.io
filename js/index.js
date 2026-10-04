import { hiragana } from "./bd.js";
const containerCaracter = document.querySelector('.caracter__container')
const btnContainer = document.querySelector('.btn-container')

const pTag = document.createElement('p')
pTag.classList.add('caracter__p')

const btnNext = document.createElement('button')
btnNext.classList.add('button-primary')

let numRandomFunction = ()=> {
    let numRandom = Math.random() * hiragana.length;
    let numSelected = Math.round(numRandom);
    
    pTag.textContent = hiragana[numSelected].caracter; // Colocamos el valor acá mismo porque el eventListener NO retorna un valo como tal para poder asignar al valor más adelante
}

btnNext.textContent = 'Siguiente';
btnNext.addEventListener('click' , numRandomFunction)

numRandomFunction() // La llamamos acá para que no inicie vacío el contenido del p
 
 
btnContainer.append(btnNext)
containerCaracter.append(pTag)

