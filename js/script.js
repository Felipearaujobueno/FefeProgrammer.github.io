const img = document.getElementById('img')

img.addEventListener('mouseover', entrar)
img.addEventListener('mouseout', sair)

function entrar(){ img.src = "img/crypto-anim.gif" }

function sair(){ img.src = "img/crypto.png" }