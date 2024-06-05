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
    if(language == 'pt-PT') {
        document.querySelector('#txtApresentacao').innerHTML = 'Olá, eu sou Felipe A. Bueno.'
        //document.querySelector('#txtSubApresentacao').innerHTML = ''
        document.querySelector('#btnProjetosTitle').innerHTML = 'Projetos'
        return
    }
    document.querySelector('#txtApresentacao').innerHTML = "Hey, I'm Felipe A. Bueno."
    //document.querySelector('#txtSubApresentacao').innerHTML = ''
    document.querySelector('#btnProjetosTitle').innerHTML = 'Projects'
}

function preencherTextoSobre(language) {
    if(language == 'pt-PT') {
        document.querySelector('#tituloSobre').innerHTML = 'Sobre'
        document.querySelector('#subTituloSobre').innerHTML = 'Sobre mim'
        document.querySelector('#btnTxtContato').innerHTML = 'Contato'
        document.querySelector('#subTituloHabilidades').innerHTML = 'Habilidades'
        return
    }

    document.querySelector('#tituloSobre').innerHTML = 'About'
    document.querySelector('#subTituloSobre').innerHTML = 'About me'
    document.querySelector('#btnTxtContato').innerHTML = 'Contact'
    document.querySelector('#subTituloHabilidades').innerHTML = 'Skills'
}

function preencherTextoProjetos(language) {
    if(language == 'pt-PT') {

    }
}

function preencherTextoContato(language) {
    if(language == 'pt-PT') {

    }
}

function preencherTextoFooter(language) {
    if(language == 'pt-PT') {

    }
}