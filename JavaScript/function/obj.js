const dog = {
  name: '멍멍이',
  sound: '멍멍',
  say: function say(){
    
    console.log(this.sound)
    //여기서 this는 이 dog(객체)를 의미함.
    //
  },
  //say(){
      // console.log(this.sound)  
    // },

  // say2: () => {
  //   console.log(this.sound)
  // }
  //화살표 함수에서 this는 자기가 속해있는 곳으로 연결하지 않음.
  //funtion 키워드 this는 자기가 속해있는 곳으로 가르킴
}




dog.say()
