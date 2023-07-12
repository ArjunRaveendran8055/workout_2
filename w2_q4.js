const Fact = (num) => {
  if (num === 0) {
    return 1;
  } else {
    return num * Fact(num - 1);
  }
};

var num = 5;

var f = Fact(num);
console.log(f);
