const calculate = (sum) => {
if (quantity > 10) {
  sum = sum - (sum*0.03); 
} 
if (sum > 30000) {
  sum = sum - ((sum-30000)*0.15); 
} 
if (promoCode === 'METHED') {
  sum = sum - sum*0.1;
} else if (promoCode === 'G3H2Z1' && sum > 2000) {
  sum = sum - 500;
} 
return sum;
};

const sum = +prompt('Общая сумма товаров в корзине? ', '');
const quantity = +prompt('Общее количество товаров в корзине? ', '');
const promoCode = prompt('Введите промокод: ', '');

alert(calculate(sum));