const numbers = {
  a: 1,
  b: 2,
  get sum() {
    //getter함수는 특정 값을 조회하려고 할때, 사용.
    console.log('sum exectued');
    return this.a + this.b;
  },
  
}

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);

//use when search specific value
