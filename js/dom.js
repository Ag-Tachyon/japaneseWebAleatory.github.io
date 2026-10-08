export function crearElemento(etiqueta, { clases = [], texto = '' } = {}) {
    const el = document.createElement(etiqueta);
    el.classList.add(...clases);
    el.textContent = texto;
    return el;
}


// ============================================================
// ============================================================

    //Cómo podemos ver en la parte de abajo, el código es MUY repetitivo, podemos optimizarlo,
    //usamos una función que nos haga todo. Usamos desestructuración junto a otros atributos. La función nos retorna
    //el elemento que queremos, más sus clases y textos. 

    // Para entender la desestructuración: https://chatgpt.com/share/6ac701b7-008c-83e9-9a53-59c1d3247f0d     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    //  { clases = [], texto = '' }  --> DESESTRUCTURACIÓN
    // La parte de [] y ''  quiere decir que en caso de que el objeto no tenga atributos con los nombres de "clases" y "texto", por defecto tengan [] y '' como valor

    // La parte del = {}, al final: { clases = [], texto = '' } = {}   quiere decir que "Si no me dan objeto, dame {}."

// ============================================================
// ============================================================

// const pTag = document.createElement('p')
// pTag.classList.add('caracter__p')
// pTag.textContent = hiragana[numSelected].caracter; // Colocamos el valor acá mismo porque el eventListener NO retorna un valo como tal para poder asignar al valor más adelante
// caracterNamePTag.textContent = hiragana[numSelected].romaji;


// const btnNext = document.createElement('button')
// btnNext.classList.add('button-primary')
// btnNext.textContent = 'Siguiente';


// const caracterNamePTag = document.createElement('p')
// caracterNamePTag.classList.add('romaji-p')
// caracterNamePTag.classList.add('hidden')


// const btnSecond = document.createElement('button')
// btnSecond.classList.add('button-second')
// btnSecond.textContent = 'Mostrar'