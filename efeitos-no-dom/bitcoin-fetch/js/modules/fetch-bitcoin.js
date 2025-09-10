export default function initFetchBitcoin() {}

async function fetchBtc(url) {
  try{
    const responseBtc = await fetch(url);
    const BtcJSON = await responseBtc.json();
    const valorCompra = (1000 / BtcJSON.BRL.sell).toFixed(4);

    const valorDoacao = document.querySelector("[data-bitcoin]");
    valorDoacao.innerText = valorCompra;
  }
  catch{
    console.log('estamos passando por uma instabilidade momentanea em relação a doação de bitcoin.')
  }
}

fetchBtc("https://blockchain.info/ticker");
