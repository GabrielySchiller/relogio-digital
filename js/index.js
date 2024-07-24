let hora = document.querySelector('#hora')
let minutos = document.querySelector('#minutos')
let segundos = document.querySelector('#segundos')
let dataC = document.querySelector('#data')
let semana = document.querySelector('#semana')


function atualizarHora(){
    let data = new Date();

    let horaAtual = data.getHours();
    let minutosAtual = data.getMinutes();
    let segundosAtual = data.getSeconds();
    let diaAtual = data.getDate();
    let mesAtual = data.getMonth() +1 ;
    let anoAtual = data.getFullYear();
    let diaSemana = data.getDay();

    if(mesAtual < 10){
      mesAtual = '0' + mesAtual
    }


    const dias = ['Domingo', 'Segunda', 'Terça' , 'Quarta' , 'Quinta' , 'Sexta' , 'Sábado']
    let diaEscrito = dias[diaSemana];
   

    semana.innerHTML = `${diaEscrito}`

    dataC.innerHTML = ` ${diaAtual}  -  ${mesAtual}  -  ${anoAtual} `
   
    hora.innerHTML = ` ${horaAtual} `
    minutos.innerHTML = `${minutosAtual} `
    segundos.innerHTML = `${segundosAtual} `


}

  atualizarHora();
  setInterval(atualizarHora, 1000);








