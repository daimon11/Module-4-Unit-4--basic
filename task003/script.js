let sum = +prompt('Общая сумма товаров в корзине? ', '');
let quantity = +prompt('Общее количество товаров в корзине? ', '');
let promoCode = prompt('Введите промокод: ', '');

const calculate = (sum, quantity, promoCode) => {
  if (!Number.isNaN(sum) || !Number.isNaN(quantity)) {
    let sale = 0;
    if (sum > 30000) {
      sale = (sum - 30000) * 0.15;
      sum = sum - sale;
    }
    if (quantity > 10) {
      sale += sum * 0.03;
      sum = sum - sale;
    }
    if (promoCode === 'METHED') {
      sale += sum * 0.1;
      sum = sum - sale;
    } else if (promoCode === 'G3H2Z1' && sum > 2000) {
      sale += 500;
      sum = sum - sale;
    }
  } else {
    console.log(`Некорректные данные`);
  }
  return sum;
}

console.log(`Общая сумма с учетом всех скидок = ${calculate(sum, quantity, promoCode)}`);