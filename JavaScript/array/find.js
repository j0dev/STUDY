const toDos = [
  {
    id: 1,
    text: 'js 입문',
    done: true
  },
  {
    id: 2,
    text: 'js 중급',
    done: true
  },
  {
    id: 3,
    text: 'js 고급',
    done: true
  },
  {
    id: 4,
    text: 'js 부수기',
    done: false
  },
]

const index = toDos.find(todo => todo.id === 3)
console.log(index)
// 해당 객체를 반환 해줌
