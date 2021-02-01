export const state = () =>
  ({
    schedules: [
        
            {time: '9:00 ~ 10:00' , circle: 'You.aka.peace', event:'今回こういうことする団体なんだよ。', img:'/circle/you.png'},
            {time: '10:00 ~ 11:00' , circle: 'You.aka.peace', event:'今回こういうことする団体なんだよ。', img:'/circle/you.png'},
            {time: '11:00 ~ 12:00' , circle: 'You.aka.peace', event:'今回こういうことする団体なんだよ。', img:'/circle/you.png'},
            {time: '12:00 ~ 13:00' , circle: 'You.aka.peace', event:'今回こういうことする団体なんだよ。', img:'/circle/you.png'},
            {time: '13:00 ~ 14:00' , circle: 'You.aka.peace', event:'今回こういうことする団体なんだよ。', img:'/circle/you.png'},
            {time: '14:00 ~ 15:00' , circle: 'You.aka.peace', event:'今回こういうことする団体なんだよ。', img:'/circle/you.png'},
            {time: '16:00 ~ 17:00' , circle: 'You.aka.peace', event:'今回こういうことする団体なんだよ。', img:'/circle/you.png'},
            {time: '17:00 ~ 18:00' , circle: 'You.aka.peace', event:'今回こういうことする団体なんだよ。', img:'/circle/you.png'},
        
    ]
        
  })

export const getters = {
    scheduleList(state) {
      return state.schedules
    }
}
  