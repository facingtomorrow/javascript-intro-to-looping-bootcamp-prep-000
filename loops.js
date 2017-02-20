
function forLoop(arr) {
  for(var i = 0; i<25; i++){
    arr.push("I am ${i} strange loop${i === 0 ? '' : 's'}.");
  }
  return arr;
}

function whileLoop(num) {
  while(num>0)
    console.log(num--);
  return 'done';
}

function maybeTrue(){
  return Math.random() >= 0.5;
}

function doWhileLoop(arr) {
  do {
    arr.length--//;
  } while(maybeTrue() && array.length > 0);
  return arr;
}