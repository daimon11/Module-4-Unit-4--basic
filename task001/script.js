const checkSum = (euro) => {
  console.log("Стомость покупки составила: " + Math.round(euro * 1.2 * 73) + " Руб");
}
const euro = +prompt('Стоимость покупки в евро?', '');
checkSum(euro);
