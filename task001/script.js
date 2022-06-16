let checkSum = (euro) => {
    alert("Стомость покупки составила: " + Math.round(euro * 1.2 * 73) + " Руб");
}
  let euro = +prompt('Стоимость покупки в евро?', '');
  checkSum(euro);
