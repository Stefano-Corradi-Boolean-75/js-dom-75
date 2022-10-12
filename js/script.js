
// con query selector posso utilizzare qualsiasi selettore html e avrò la prima referenza trovata
console.log(document.querySelector('.red').innerHTML);

console.log(document.getElementById('test').innerHTML);
console.log(document.querySelector('#test').innerHTML);

// salvo l'elemento dentro una const così è più comodo gestirlo
const elementLorem1 = document.querySelector('#lorem1');

//classList restituisce l'elenco delle classi di un elemento
console.log(elementLorem1.classList);
// con add aggiungo una classe
elementLorem1.classList.add('upper');

elementLorem1.classList.remove('italic');
console.log('classList',elementLorem1.classList);
console.log('className',elementLorem1.className);

// metodo (sconsiglato) di aggiunta di una classe con className. Attenzione ad aggiungere uno spazio!
elementLorem1.className += ' under';
console.log('classList',elementLorem1.classList);

// resetto il testo
//elementLorem1.innerHTML = '';
// resetto tutte le classi
//elementLorem1.classList = '';

// seleziono il primo container
const primoContainer = document.querySelector('.container');
// lo nascondo aggiungendo la classe hide
primoContainer.classList.add('hide');

elementLorem1.style.backgroundColor = "yellow";

const terzoContainer = document.querySelector('.terzo');
//cssText mi dà la ossibilità di scrivere più classi come una stringa in sintassi css
terzoContainer.style.cssText = "background-color: pink; font-size:0.8rem; padding: 1rem; border: 1px dotted black";
console.log('terzoContainer',terzoContainer.classList)

const quartoContainer = document.querySelector('.quarto');
//quartoContainer.className += ' custom-container';
quartoContainer.classList.add('custom-container');

const pDiQuintoContainer = document.querySelector('.quinto p');

//pDiQuintoContainer.innerHTML += " -- altro testo"
// aggiungo prima o dopo del testo a quello già presente
pDiQuintoContainer.prepend(' prima del testo --  ');
pDiQuintoContainer.append(' -- altro testo .... ');

const bottone1 = document.querySelector('#btn1');
// primo paramentro il tipo di evento da ascoltare
// secono paramentro una funzione
bottone1.addEventListener('click',function(){
  alert('Mi hai cliccato!')
});

let isTerzoVisible = true;


const bottone2 = document.querySelector('#btn2');
bottone2.addEventListener('click',function(){
  terzoContainer.classList.add('hide');
  isTerzoVisible = false;
});

const bottone3 = document.querySelector('#btn3');
bottone3.addEventListener('click',toggleText);

function toggleText(){
  // è come scrivere if(isTerzoVisible === true)
  if(isTerzoVisible){
    terzoContainer.classList.add('hide');
    isTerzoVisible = false;
  }else{
    terzoContainer.classList.remove('hide');
    isTerzoVisible = true;
  }
}

const bottoneInfo = document.querySelector('#btn-info');
bottoneInfo.addEventListener('click', startQuestion);

function startQuestion(){
  /*
    1 chiedere il nome all'utente
    2 chiedere il genere (maschio, femmina, nd)
    3 stampare il nome
    4 se maschio -> verde / femmina -> blu / nd -> rosso
  
  */

  const nome = prompt('Come ti chiami?');
  let genere = prompt('Inserire il genere').toLowerCase();
  const outputEl = document.getElementById('output-info-user');
  outputEl.innerHTML = nome;

  console.log(genere);

  if(genere === 'maschio'){
    outputEl.className = 'green';  
  }else if(genere === 'femmina'){
    outputEl.className = 'blue';  
  }else{
    outputEl.className = 'red';
  }

}

// INTERAZIONE CON L'UTENTE TRAMITE INPUT

const btnInput = document.getElementById('btn-input');
btnInput.addEventListener('click', function(){
  const name = prompt('Come ti chiami?')
  console.log(name);
  console.log(document.getElementById('input').value);
  document.getElementById('input').value = name;
});

const btnInput2 = document.getElementById('btn-input2');
btnInput2.addEventListener('click', function(){
  const name = document.getElementById('input2').value;
  //alert('Nell\'input c\'è scritto: ' + name);
  document.getElementById('output-name').innerHTML = name;

  //resetto i lvalue dell'input
  document.getElementById('input2').value = '';
});
