function showP(){
  var x = document.getElementById('pow').style.visibility="visible";
}



function showPP(){
  document.getElementById('pow1').style.visibility="visible";
}

function showPPP(){
  document.getElementById('pow2').style.visibility="visible";
}

function eraseText() {
    document.getElementById("output").value = "";
}
//var url;
//var ticker = 'ayx';
//var api = 'http://api.marketstack.com/v1/eod?access_key=ddc74200ed3dcf7f15b9412aa301f104&symbols=';
//var symbol = 'ayx'
//$.getJSON('http://api.marketstack.com/v1/eod?access_key=ddc74200ed3dcf7f15b9412aa301f104&symbols=' + symbol,
//function(data){
  //var url = api + ticker;
  //console.log(data);

  //var open = data.data[0].open;
  //var close = data.data[0].close;
  //$(".stock").append(open);
  //$(".extra").append(close);
//}

//);

//const api = {
//  key: 'ecccb7d3827127c3918597339ace7f4f', //ddc74200ed3dcf7f15b9412aa301f104
//  base: 'https://api.openweathermap.org/data/2.5/' //'http://api.marketstack.com/v1/eod'

  //eod?access_key=ddc74200ed3dcf7f15b9412aa301f104&symbols='
//}



const searchbox = document.querySelector('.inputTicker');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13){
    getResults(searchbox.value);
    console.log(searchbox.value);

  }
}
//https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo


//function displayNews(){
//  fetch(`http://api.mediastack.com/v1/news?access_key=4b26ae66982c8c5bbc3b58d9290028e0&symbols=ayx`)
  //  .then(function(response){
  //    return response.text();
  //  })
  //  .then(function(data){
  //      console.log(data);
  //      document.getElementById('result').innerHTML = data;
  //  })
  //    .catch (function(error){
  //      console.log(error);
  //      `${data.author}`
  //    })
//}
function getResults (query) {
    fetch(`http://api.mediastack.com/v1/news?access_key=4b26ae66982c8c5bbc3b58d9290028e0&keywords=${query}`)
    .then(symbols => {
      return symbols.json();
    }).then(displayResults);
}

function displayResults (symbols) {
  console.log(symbols);
 let input= document.querySelector('.location2 .input2');

 input.innerText=
  `
 ${symbols.data[0].description}
  `;

}

function getResults (query) {
   fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${query}&apikey=BBRR31T4MZXDNCY6`)
    .then(symbols => {
     return symbols.json();
    }).then(displayResults);
}

function displayResults (symbols) {
  console.log(symbols);
  let input = document.querySelector('.location .input ');
  input.innerText =
  `

 ${symbols.Name}
 Beta: ${symbols.Beta}
 EPS: ${symbols.EPS}
 TrailingPE: ${symbols.TrailingPE}
 ForwardPE: ${symbols.ForwardPE}
 Price Target: ${symbols.AnalystTargetPrice}



  `;
let inputt = document.querySelector('.about .inputt ');
  inputt.innerText = `

 Employees: ${symbols.FullTimeEmployees}
Industry: ${symbols.Industry}
Exchange: ${symbols.Exchange}

 `;

 let inputtt = document.querySelector('.financials .inputtt ');
   inputtt.innerText = `
   Revenue: ${symbols.RevenueTTM}
   Gross Profit: ${symbols.GrossProfitTTM}
   Revenue Per Share: ${symbols.RevenuePerShareTTM}
   Profit Margin: ${symbols.ProfitMargin}

   `;




}

// function getResults (query){
  // fetch(`http://api.mediastack.com/v1/news?access_key=4b26ae66982c8c5bbc3b58d9290028e0`)
  //   .then(symbols => {
  //     return symbols.json();
//     }).then(displayResults);
// }

//function displayResults(symbols) {
// console.log(symbols);
//   let input = document.querySelector('.news .input');
   //`${symbols.data[1].title}`;
 //input.innerText =
// }
//<div class="hu"> Beta </div>
//<div class="hii"> EPS </div>
//<div class="ho"> P/E Ratio </div>

