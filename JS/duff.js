function process(v){
  console.log(v);
}

list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
var startTime = new Date();
for(var i=0;i<list.length;i++){
  process(list[i])
}
var endTime = new Date();
var cost = endTime - startTime
console.log("Normal cost time is "+cost);

var times = Math.ceil(list.length/8);
console.log("Times is "+times);
var starAt = list.length%8;
console.log("Star at is "+starAt);
var i = 0;
var startTime = new Date();
do{
  console.log("Start at %d",starAt);
  switch(starAt){
    case 0: process(list[i++]);
    case 7: process(list[i++]);
    case 6: process(list[i++]);
    case 5: process(list[i++]);
    case 4: process(list[i++]);
    case 3: process(list[i++]);
    case 2: process(list[i++]);
    case 1: process(list[i++]);
  }
  starAt=0;
  console.log("Start at %d",starAt);
} while(--times >0);
var endTime = new Date();
var cost = endTime - startTime
console.log("Duff cost time is "+cost);
