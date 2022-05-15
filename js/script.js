function trocarBebida(src,cor){
    const imagem = document.getElementById("imagem");
    imagem.src = src;
    const fundo = document.getElementById("fundo");
    fundo.style.background = cor;
}