let digitalElement = document.querySelector('.digital'); // selecionamos o ponteiro digital
let sElement = document.querySelector('.p_s'); // selecionamos o ponteiro de segundos
let mElement = document.querySelector('.p_m'); // selecionamos o ponteiro de minutos
let hElement = document.querySelector('.p_h'); // selecionamos o ponteiro de horas

//timer de em um e um segundo, ele vai atualizar 
function updateClock() {
    let now = new Date(); //pegr a hora atual,manipulação da data(completo)
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    //iremos inserir hora no relógio  digital

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`; //inner para adicionar um texto dentro dele

    //sElement.style.transform = `rotate(45deg)`;  //para localizar o ponteiro de seg

    let sDeg = ((360 / 60) * second) - 90; // Deg = Graus. Depois diminuimos - 90
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90; // relogio marca somente 12 horas

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
    
}

function fixZero(time) { //fix para corrigir o Zero quando for menor que 10
    
    
    //para poder entender a logica do "time"
    /* if(time < 10){
        return "0" + time;

    } else {
        return time;
     }*/
     
     return time < 10 ? `0${time}`: time;  //logica do time simplificado, pego na internet
     // se tempo for menor que 10, ele retorna com zero, caso contrário retorna o tempo normal
     
    }


setInterval(updateClock, 1000); //atualiza em 1 segundo = 1000milisegundos
updateClock(); // rodamos a propria função para atualizar de imediato
