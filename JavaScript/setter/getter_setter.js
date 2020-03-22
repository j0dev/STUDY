const dog = {
  _name: '멍멍이',
  get name() {
    console.log('_name 조회');
    return this._name;
  },
  set name(value) {
    console.log('name will change.. : '+ value)
    this._name = value
  },
}


console.log(dog.name);

dog.name = 'asdf'
console.log(dog.name);
