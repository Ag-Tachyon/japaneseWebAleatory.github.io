import { crearElemento } from './dom.js';

export function crearTarjeta(contenedor) {
    const kana = crearElemento('p', { clases: ['caracter__p'] });
    const romaji = crearElemento('p', { clases: ['romaji-p', 'hidden'] });

    contenedor.append(romaji, kana);

    return { // Retornamos objetos literales, pero con funciones como atributos RECORDAR!!
        mostrar: function(item) {
            kana.textContent = item.caracter;
            romaji.textContent = item.romaji;
            romaji.classList.add('hidden');
        },
        alternarRomaji: function() {
            return romaji.classList.toggle('hidden'); // true si quedó oculto
        },
    };
}