const num = 1000;
const formatter = new Intl.NumberFormat('ja', {
  style: 'currency',
  currency: 'JPY'
});
const yen = formatter.formatToParts(num).map(({type, value}) => {
  switch (type) {
    case 'currency': return value.substr(-1);
    default: return value;
  }
}).reduce((string, part) => {return string + part});
console.log(yen);
