const paineis = document.querySelectorAll('.painel');

paineis.forEach(painel =>{
    painel.addEventListener('click', () =>{
        removeClasse()
        painel.classList.add('primeiro')
    })
})

function removeClasse() {
    paineis.forEach(painel =>{
        painel.classList.remove('primeiro')        
    })
}