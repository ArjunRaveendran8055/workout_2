var str = "arjun anchakkalathara raveendran";

var revStr = str.split(" ");

var i = 0;
while (i < revStr.length) {
  revStr[i] = revStr[i].split("").reverse().join("");
  i++;
}
console.log(revStr);
