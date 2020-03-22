const caption = {
  name : 'stive',
  actor: 'criss',
  alias : 'captin',

}


function print(hero){
  const { alias, name, actor} = hero
  const text = `${alias}(${name}) 역활을 맡은 배우는 ${actor} 이다.`
  console.log(text)
}


print(caption)
