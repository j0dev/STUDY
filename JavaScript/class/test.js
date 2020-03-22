class Animal {
  constructor(type, name, sound) {
//생성자
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
//prototype
    console.log(this.sound);
  }
}
class Dog extends Animal {
//extends == Anmal 상송
  constructor(name, sound) {
    super("개", name, sound);
//constructor는 기존 상속받은 Animal의 constructor을 호출하여 덮어씀
  }
}
class Cat extends Animal {
  constructor(name, sound) {
    super("고양이", name, sound);
  }
}

const dog = new Dog("멍멍이", "멍멍");
const cat = new Cat("고양이", "야옹이", "야옹");

dog.say();
cat.say();
