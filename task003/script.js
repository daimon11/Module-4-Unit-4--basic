let sum = +prompt('Общая сумма товаров в корзине? ', '');
let quantity = +prompt('Общее количество товаров в корзине? ', '');
let promoCode = prompt('Введите промокод: ', '');

const calculate = () => {
  if (quantity > 10 && sum < 30000) {
    sum = sum - (sum * 0.03);
  } else if (quantity > 10 && sum > 30000) {
    sum = sum - (sum * 0.03) - ((sum - 30000) * 0.15);
  } else if (sum > 30000) {
    sum = sum - ((sum - 30000) * 0.15);
  } else if (promoCode === 'METHED') {
    sum = sum - (sum * 0.1);
  } else if (promoCode === 'G3H2Z1' && sum > 2000) {
    sum = sum - 500;
  }
  return sum;
};

console.log(calculate());