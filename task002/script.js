const capitalizeFirstLetter = (words) => {
  return words.charAt(0).toUpperCase() + words.slice(1).toLowerCase();
}

const words = prompt('Введите строки:', '');
console.log('Модернизировали строку: ' + capitalizeFirstLetter(words.trim()));