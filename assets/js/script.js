  let hasFlippedCard = false;
  let firstCard, secondCard;
  let lockBoard = false;
  let correctMatch = 0;
  let wrongMatch = 0;
  let id = 1;
  var name;

  function getName(){
   name = window.prompt('Olá vingadorx, qual o seu nome?');
   document.getElementById('name').innerHTML = 'Bem vindx ! ' + name;
  }

  const cards = document.querySelectorAll('.memory-card');


  function flipCard() {
    if (lockBoard) return;

    if (this === firstCard) return;

    this.classList.add('flip');

     if (!hasFlippedCard) {
       hasFlippedCard = true;
       firstCard = this;
       return;
     }

     secondCard = this;
     checkForMatch();
   }

 function associated() {
   alert('Essa carta já foi encontrada!');
 }


 function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
 	isMatch ? disableCards() : unflipCards();
 }


 function disableCards() {
   firstCard.removeEventListener('click', flipCard);
   secondCard.removeEventListener('click', flipCard);

   firstCard.addEventListener('click', associated);
   secondCard.addEventListener('click', associated);

   correctMatch++;

   document.getElementById('correct').innerHTML = correctMatch;

   spawnNotification({
    opt: {
        body: congratulations(),
    },
    title: "Acertou!",
   })

   if (correctMatch == 10) {
     setCookie(name, document.getElementById('minutes').innerHTML, document.getElementById('seconds').innerHTML);
     percentCorrect();
     var resetGame = confirm('Parabéns! Você completou o jogo! Deseja reiniciar?');
     if (resetGame == true) {
      window.location.reload(false); 

     } else {
      window.alert('Obrigada por jogar!');
     } 
   }
   resetBoard();
 }

  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {

     firstCard.classList.remove('flip');

     secondCard.classList.remove('flip');

     wrongMatch++;

     document.getElementById('wrong').innerHTML = wrongMatch;

    spawnNotification({
      opt: {
          body: motivation(),
      },
      title: "Não houve acertos",
    })

   resetBoard();

   }, 1500);
 }

function resetBoard() {
 [hasFlippedCard, lockBoard] = [false, false];
 [firstCard, secondCard] = [null, null];
}

(function shuffle() {
 cards.forEach(card => {
   let ramdomPos = Math.floor(Math.random() * 12);
   card.style.order = ramdomPos;
 });
})();

function motivation(){
  var phrase = new Array ();
  phrase[0] = 'Não desista! "As escolhas mais difíceis requerem as vontades mais fortes - Thanos"';
  phrase[1] = 'Poxa... "A falha é a neblina na qual vislumbramos o triunfo — Homem de Ferro 3"';
  phrase[2] = 'Continue! “A vida é sobre amadurecer. É sobre mudar — Thor Ragnarok”';
  phrase[3] = 'Persista! “A vitória as custas de inocentes não é vitória alguma — Capitão América: Guerra Civil"';
  phrase[4] = 'Tente mais uma vez! “As leis da natureza transcendem as leis do homem — Homem-Formiga"';
  phrase[5] = 'Vamos lá! “Às vezes temos que correr antes de andar — Homem de Ferro"';
  phrase[6] = 'Avante! “E quem decide quem são os fracos? A vida. A vida sempre decide — Vingadores: Era de Ultron"';
  var i = Math.floor(Math.random() * 7)
  return phrase[i];
}

function congratulations(){
  var phrase_c = new Array ();
  phrase_c[0] = 'Parabéns! Acho que você sim é Vingadorx';
  phrase_c[1] = 'Você é incrível! Juntando os vigadores não dá metade do seu poder';
  phrase_c[2] = 'Demais! Seria você o gênio, bilionário, playboy, filantropo?';
  phrase_c[3] = 'Show de bola! Dá de 10 a 0 no Thanos';
  phrase_c[4] = 'Você é muito mais que as joias do infinito';
  phrase_c[5] = 'Vingadores pediu para te contratar';
  phrase_c[6] = 'Com você ninguém pode!';
  var i = Math.floor(Math.random() * 7)
  return phrase_c[i];
}

cards.forEach(card => card.addEventListener('click', flipCard));

Notification.requestPermission();

function spawnNotification(opcoes) {
    var n = new Notification(opcoes.title, opcoes.opt);
    
    if (opcoes.link !== '') {
        n.addEventListener("click", function() {               
            n.close();
            window.focus();
            window.location.href = opcoes.link;
        });
    }
    setTimeout(n.close.bind(n), 4000);
}

function percentCorrect(){
  let totalplay = wrongMatch + correctMatch;
  let percent = (correctMatch * 100) / totalplay 
  var percentFix = parseFloat(percent.toFixed(2));
  document.getElementById('percent').innerHTML = '% acerto - ' + percentFix + '%';
}
  
 let gamers = [];

function test() {
  getCookie();

  gamers.sort(sortGamers);

  printArray('ordem', gamers);

  }

  function sortGamers(a, b){
    if (a.tempo > b.tempo) {
      return 1;
    }
    if (a.tempo < b.tempo) {
      return -1;
    }
    return 0;
  }

  function printArray(id, array) {
    let numberContent = document.getElementById('rank-number');
    numberContent.innerHTML = '';

    let nameContent = document.getElementById('rank-name');
    nameContent.innerHTML = '';

    let timeContent = document.getElementById('rank-time');
    timeContent.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
      let n = i + 1;
      numberContent.innerHTML += '<li>'+ n+'º</li>';
      nameContent.innerHTML += '<li>'+ array[i].nome+'</li>';
      timeContent.innerHTML += '<li>'+ array[i].tempo+'</li>';
    }
  }

function deleteRank() {
  let timeContent = document.getElementById('rank-time');
  let numberContent = document.getElementById('rank-number');
  let nameContent = document.getElementById('rank-name');

  if (timeContent.parentNode && numberContent.parentNode && nameContent.parentNode) {
    timeContent.parentNode.removeChild(timeContent);
    numberContent.parentNode.removeChild(numberContent);
    nameContent.parentNode.removeChild(nameContent);

    deleteAllCookies();
  }
}

function setCookie(name, minutos, segundos){
  var cookie = [name, '=', JSON.stringify(minutos+":"+segundos),';'].join('');
  document.cookie = cookie;
} 

function getCookie() {
  var cookie = document.cookie.split(';');
  var reg = /=([^;]+)/;
  var reg2 = /([^;]+)=/;
  var result;
  for (var i = 0; i < cookie.length; i++) {
    result = reg.exec(cookie[i]);
    nameR = reg2.exec(cookie[i]);
    gamers.push({nome: nameR[1], tempo:result[1]});

  }
  // var result = document.cookie.match(new RegExp('=([^;]+)'));
  //  console.log(result);
  //  result && (result = JSON.parse(result[1]));
}

var minutesL = document.getElementById("minutes");
var secondsL= document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsL.innerHTML = formatTime(totalSeconds % 60);
  minutesL.innerHTML = formatTime(parseInt(totalSeconds / 60));
}

function formatTime(time) {
  var timeString = time + "";

  if (timeString.length < 2) {
    return "0" + timeString;
  } else {
    return timeString;
  }
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}