const botoes = document.querySelectorAll('.botao');
const abasConteudo = document.querySelectorAll('.aba-conteudo-item');

for(let i = 0; i < botoes.length; i++){
    botoes[i].addEventListener('click', function() {
        const indice = this.getAttribute('data-indice');

        for(let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove('ativo');
            abasConteudo[j].remove('ativo');
        }
        this.classList.add('ativo');
        abasConteudo[indice].classList.add('ativo');
        atualizarContador(abasConteudo[indice]);
    });
}

function atualizarContador(abaConteudo){
    const contador = abaConteudo.querySelector('.contador');
    const tempoObjetivo = new Date (abaConteudo.getAttribute('data-tempo-objetivo'));
    contador.textContent = calculaTempo(tempoObjetivo);
    contador.innerHTML = `
    <div class = 'contador-digito'>
        <p class= 'contador-digito-numero'>${tempoRestante[0]}</p>
        <p class= 'contador-digito-texto'>dias</p>
    </div>
    <div class = 'contador-digito'>
        <p class= 'contador-digito-numero'>${tempoRestante[1]}</p>
        <p class= 'contador-digito-texto'>horas</p>
    </div>
    <div class = 'contador-digito'>
        <p class= 'contador-digito-numero'>${tempoRestante[2]}</p>
        <p class= 'contador-digito-texto'>minutos</p>
    </div>    <div class = 'contador-digito'>
    <   p class= 'contador-digito-numero'>${tempoRestante[3]}</p>
        <p class= 'contador-digito-texto'>segundos</p>
    </div>
    `;
}

function calculaTempo(tempoObjetivo){
    const tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor (segundos / 60);
    let horas = Math.floor (minutos / 60);
    let dias = Math.floor (horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    if (tempoFinal > 0){
        return [dias,horas,minutos,segundos];
    }else{
        return[0,0,0,0];
    }   
}

function atualizaCronometro(){
    for(let i=0; i<contadores.length; i++){
        const tempoRestante = calculaTempo(tempos[i]);
        document.getElementById('dias'+i).textContent = tempoRestante[0];
        document.getElementById('horas'+i).textContent = tempoRestante[1];
        document.getElementById('mnutos'+i).textContent = tempoRestante[2];
        document.getElementById('segundos'+i).textContent = tempoRestante[3];
    }
}


atualizaCronometro();
setInterval(atualizaCronometro, 1000);