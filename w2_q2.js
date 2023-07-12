let str = "arjun anchakkalathara raveendran";
let splitStr = str.split(" ");

let i = 0;
let count = 1;
let wordLenght;
let index;
while (i < splitStr.length) {
  wordLenght = splitStr[i].length;
  if (wordLenght > count) {
    count = wordLenght;
    index = i;
  }
  i++;
}

console.log(`length of the largest word ${splitStr[index]} is :${count}`);
