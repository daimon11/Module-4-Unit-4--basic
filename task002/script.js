const capitalizeFirstLetter = (str1) => {
  return str1.charAt(0).toUpperCase() + str1.slice(1).toLowerCase();
}

const str1 = prompt('Введите строки:', '');
alert('Модернизировали строку: ' + capitalizeFirstLetter(str1));