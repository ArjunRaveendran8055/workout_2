var arr = [
  [3, 9, 7],
  [29, 11, 13],
  [97, 21, 57, 101],
];

var a = [];
var i = 0;
var j;
var big;

while (i < arr.length) {
  j = 0;
  big = arr[i][j];
  while (j < arr[i].length) {
    if (arr[i][j] > big) {
      big = arr[i][j];
    }
    j++;
  }
  a.push(big);
  i++;
}
console.log(a);
