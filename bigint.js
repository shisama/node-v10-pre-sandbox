const add = (x, y) => {
  if (typeof x !== 'bigint') {
    console.error("x is not bigint")
  }
  if (typeof y !== 'bigint') {
    console.error("y is not bigint")
  }

  return x + y;
};

const x = 123n
const y = 1n
console.log(x, 'is', typeof x)

console.log(x, '+', y, '=', add(x, y))