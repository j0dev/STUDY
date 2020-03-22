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

const tasksNotDone = toDos.filter(todo => !todo.done)
//false
//const tasksNotDone = toDos.filter(todo => todo.done)
//true
console.log(tasksNotDone)
