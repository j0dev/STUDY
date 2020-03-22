const array = [1,2,3,4,5,6,7,8]

const squared = array.map(n => n*n);

console.log(squared);




/////////

const items = [
  {
    id: 1,
    text: 'hello',
  },
  {
    id: 2,
    text: 'bye',
  },
]

const texts = items.map(item => item.text)

console.log(texts);
