import { hiragana } from './bd.js';
import { crearElemento } from './dom.js';
import { elegirAleatorio } from './aleatorio.js';
import { crearTarjeta } from './tarjeta.js';

const tarjeta = crearTarjeta(document.querySelector('.caracter__container'));
const btnContainer = document.querySelector('.btn-container');

const btnActiveFilters = document.getElementById('btnFiltros');
const arrowIcon = document.getElementById('arrowIcon');
const checkBoxContainer = document.querySelector('.filters__checkbox-container');

const btnNext = crearElemento('button', { clases: ['button-primary'], texto: 'Siguiente' });
const btnSecond = crearElemento('button', { clases: ['button-second'], texto: 'Mostrar' });

const siguiente = () => {
    tarjeta.mostrar(elegirAleatorio(hiragana));
    btnSecond.textContent = 'Mostrar';
};

btnNext.addEventListener('click', siguiente);

btnSecond.addEventListener('click', () => {
    const oculto = tarjeta.alternarRomaji();
    btnSecond.textContent = oculto ? 'Mostrar' : 'Ocultar';
});

btnContainer.append(btnNext, btnSecond);
siguiente();

btnActiveFilters.addEventListener('click' , ()=>{
    arrowIcon.classList.toggle('active')
    checkBoxContainer.classList.toggle('active')
})