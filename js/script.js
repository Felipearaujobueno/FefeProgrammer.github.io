window.onload = function(){
    carregarPagina()
}

function carregarPagina(){
    const language = window.navigator.language;
    console.log(language);
    preencherTextoPagina(language)
}

function preencherTextoPagina(language) {
    preencherTextoHeader(language)
    preencherTextoHome(language)
    preencherTextoSobre(language)
    preencherTextoProjetos(language)
    preencherTextoContato(language)
    preencherTextoFooter(language)
}

function preencherTextoHeader(language) {
    if(language == 'pt-PT'){
        document.querySelector('#header_inicio').innerHTML = 'Inicio'
        document.querySelector('#header_sobre').innerHTML = 'Sobre'
        document.querySelector('#header_projetos').innerHTML = 'Projetos'
        document.querySelector('#header_contato').innerHTML = 'Contato'
        return
    }

    document.querySelector('#header_inicio').innerHTML = 'Home'
    document.querySelector('#header_sobre').innerHTML = 'About'
    document.querySelector('#header_projetos').innerHTML = 'Projects'
    document.querySelector('#header_contato').innerHTML = 'Contact'
}

function preencherTextoHome(language) {

}

function preencherTextoSobre(language) {

}

function preencherTextoProjetos(language) {

}

function preencherTextoContato(language) {

}

function preencherTextoFooter(language) {

}