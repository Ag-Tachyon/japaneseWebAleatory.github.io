const btnActiveFilters = document.getElementById('btnFiltros');
const arrowIcon = document.getElementById('arrowIcon');
const checkBoxContainer = document.querySelector('.filters__checkbox-container');

btnActiveFilters.addEventListener('click' , ()=>{
    arrowIcon.classList.toggle('active')
    checkBoxContainer.classList.toggle('active')
})