//reconhecer quando aperta uma tecla. Adicionar um "observador"
document.body.addEventListener('keyup', (event)=>{ //aperto uma tecla e solto
    playSound( event.code.toLowerCase() ); //para converter em minusculo 
});

document.querySelector('.composer button').addEventListener('click', () => { //botão selecionado via mouse
    let song = document.querySelector('#input').value; //capta o digitado
    //iremos verificar o que foi digitado, e gravar a string
    console.log("Música", song);
    if(song !== '') {
        let songArray = song.split(''); //será capturado o array (cada letra digitada)
        console.log(songArray);
        playComposition(songArray); // executar a função

    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`); // # seleciona o elemento
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.CurrentTime = 0 //para funcionar imediatamente se for presionado
        audioElement.play();
    }

    if(keyElement) { // ativar a class key
        keyElement.classList.add('active');

        setTimeout(()=>{ //função
            keyElement.classList.remove('active'); //espero 300milisegundos e remove
        }, 300);
    }
}

function playComposition(songArray) {
    let wait = 0;

    for(let songItem of songArray) { //looping com espera e acrescimos
        setTimeout(()=>{
            playSound(`key${songItem}`); //irá tocar o que foi capturado na digitação
        }, wait);
        wait += 250;
        
    }
}

