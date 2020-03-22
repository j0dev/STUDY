const dog = {
  _name: '멍멍이',
  set name(value) {
    console.log('name will change.. : '+ value)
    this._name = value
  },
}


console.log(dog._name);

dog.name = 'asdf'
console.log(dog._name);

//use when set specific value
