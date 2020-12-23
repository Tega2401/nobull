function showP(){
  var x = document.getElementById('pow').style.visibility="visible";
}



function showPP(){
  document.getElementById('pow1').style.visibility="visible";
}

const searchbox = document.querySelector('.inputTicker');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13){
    getResults(searchbox.value);
    console.log(searchbox.value);

  }
}
//https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo

function getResults (query) {
    fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${query}&apikey=BBRR31T4MZXDNCY6`)
    .then(symbols => {
      return symbols.json();
    }).then(displayResults);
}

function displayResults (symbols) {
  console.log(symbols);
  let input = document.querySelector('.location .input');
  input.innerText =
  `${symbols.Name}
 ${symbols.Beta}
 ${symbols.EPS}

  `;


  //let now = new Date();
  //let date = document.querySelector('.location .date');
  //date.innerText = dateBuilder(now);
  //let city = document.querySelector('.location .city');
  //city.innerText = '${weather.name}, ${weather.sys.country}';
}
