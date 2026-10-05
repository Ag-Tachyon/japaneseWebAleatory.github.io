import { hiragana } from "./bd.js";
const containerCaracter = document.querySelector('.caracter__container')
const btnContainer = document.querySelector('.btn-container')

const pTag = document.createElement('p')
pTag.classList.add('caracter__p')

const btnNext = document.createElement('button')
btnNext.classList.add('button-primary')
btnNext.textContent = 'Siguiente';

const caracterNamePTag = document.createElement('p')
caracterNamePTag.classList.add('romaji-p')
caracterNamePTag.classList.add('hidden')

const btnSecond = document.createElement('button')
btnSecond.classList.add('button-second')
btnSecond.textContent = 'Mostrar'

let numRandomFunction = ()=> {
    let numRandom = Math.random() * hiragana.length;
    let numSelected = Math.round(numRandom);
    
    pTag.textContent = hiragana[numSelected].caracter; // Colocamos el valor acá mismo porque el eventListener NO retorna un valo como tal para poder asignar al valor más adelante
    caracterNamePTag.textContent = hiragana[numSelected].romaji;

    caracterNamePTag.classList.add('hidden');
    btnSecond.textContent = 'Mostrar';
}

let showRomaji = ()=> {
    caracterNamePTag.classList.toggle('hidden')
    btnSecond.textContent = caracterNamePTag.classList.contains('hidden') ? 'Mostrar' : 'Ocultar'
}

btnNext.addEventListener('click' , numRandomFunction)
btnSecond.addEventListener('click' , showRomaji)

containerCaracter.prepend(caracterNamePTag)


numRandomFunction() // La llamamos acá para que no inicie vacío el contenido del p
 
 
btnContainer.append(btnNext)
btnContainer.append(btnSecond)
containerCaracter.append(pTag)

