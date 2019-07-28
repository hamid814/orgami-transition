const max = 12,
      time = 1000,
      halfTime = 500;
let   oNum = 1,
      eNum = 2;

const Oimg = document.querySelector('#img-o'),
      Eimg = document.querySelector('#img-e');

function round() {
  if(oNum < max && eNum < max) {
    setTimeout(() => {
      oNum += 2;
      setImg('odd');
    }, halfTime);
    setTimeout(() => {
      eNum += 2;
      setImg('even');
      round();
    }, time);
  } else {
    oNum = 1;
    eNum = 2;
    round();
  }
  
}

function setImg(oddOrEven) {
  if(oddOrEven === 'odd') {
    Oimg.src = `img/img${oNum}.jpeg`;
  } else if(oddOrEven === 'even') {
    Eimg.src = `img/img${eNum}.jpeg`;
  }
}

round();