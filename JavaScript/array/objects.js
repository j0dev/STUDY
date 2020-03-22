const doggy = {
  name: 'asdf',
  sound: ' asas ',
  age: 2,
}

console.log(Object.entries(doggy))
console.log(Object.keys(doggy))
console.log(Object.values(doggy))


const doggy = {
  name: 'asdf',
  sound: ' asas ',
  age: 2,
}

for (let key  in doggy){
  console.log(`${key}; ${doggy[key]}`)
}
