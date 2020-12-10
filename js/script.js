function escolheu(x) {
    let escolhaPc = Math.floor(Math.random() * 3);
    var imagem = document.createElement("IMG");
    imagem.setAttribute('id', 'img');
    var para2 = document.createElement("h2");

    // 0 papel // 1 tesoura // 2 pedra

    switch (escolhaPc) {
        case 0: // papel

            if (x == 0) {
                para2.innerHTML = "Empate, ambos escolheram a mesma coisa!"; // cliente ganha   
            }
            if (x == 1) {
                para2.innerHTML = "Voce ganhou: Tesoura corta o papel."; // cliente ganha   
            }
            if (x == 2) {
                para2.innerHTML = "Voce perdeu: Papel embrulha pedra."; // cliente ganha   
            }


            imagem.setAttribute('src', 'img/papel.png');
            break;
        case 1: // tesoura
            if (x == 0) {
                para2.innerHTML = "Voce perdeu, tesoura corta papel"; // cliente ganha   
            }
            if (x == 1) {
                para2.innerHTML = "Empate, ambos escolheram a mesma coisa"; // cliente ganha   
            }
            if (x == 2) {
                para2.innerHTML = "Voce ganhou, pedra quebra a tesoura."; // cliente ganha   
            }

            imagem.setAttribute('src', 'img/tesoura.png');
            break;
        case 2: // pedra
            if (x == 0) {
                para2.innerHTML = "Você ganhou, papel embrulha pedra."; // cliente ganha   
            }
            if (x == 1) {
                para2.innerHTML = "Voce perdeu, pedra quebra tesoura"; // cliente ganha   
            }
            if (x == 2) {
                para2.innerHTML = "Empate, ambos escolheram a mesma coisa"; // cliente ganha   
            }

            imagem.setAttribute('src', 'img/pedra.png');
            break;
    }
    para2.setAttribute('id', 'texto');
    document.getElementById("resultado").appendChild(para2);
    document.getElementById("resultado").appendChild(imagem);
    remove();
}

function remove() {
    var image_x2 = document.getElementById('texto');
    image_x2.parentNode.removeChild(image_x2);
    var image_x = document.getElementById('img');
    image_x.parentNode.removeChild(image_x);
}