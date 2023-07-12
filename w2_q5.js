const addElement = (ar, item, index) => {
  ar.splice(index, 0, item);
  console.log(ar);
};

var ar = [1, 2, 3, 4, 5, 6];
var index = 5;
var item = -777;
addElement(ar, item, index);
