export const state = () =>
  ({
    schedules: [
        
            {time: '9:00 ~ 10:00' , circle: 'You.aka.peace', event:'今回こういうことする団体なんだよ。', img:'/circle/you.jpg'},
            {time: '10:00 ~ 11:00' , circle: 'You.aka.peace', event:'今回こういうことする団体なんだよ。', img:'/circle/you.jpg'},
            {time: '11:00 ~ 12:00' , circle: 'You.aka.peace', event:'今回こういうことする団体なんだよ。', img:'/circle/you.jpg'},
            {time: '12:00 ~ 13:00' , circle: 'You.aka.peace', event:'今回こういうことする団体なんだよ。', img:'/circle/you.jpg'},
            {time: '13:00 ~ 14:00' , circle: 'You.aka.peace', event:'今回こういうことする団体なんだよ。', img:'/circle/you.jpg'},
            {time: '14:00 ~ 15:00' , circle: 'You.aka.peace', event:'今回こういうことする団体なんだよ。', img:'/circle/you.jpg'},
            {time: '16:00 ~ 17:00' , circle: 'You.aka.peace', event:'今回こういうことする団体なんだよ。', img:'/circle/you.jpg'},
            {time: '17:00 ~ 18:00' , circle: 'You.aka.peace', event:'今回こういうことする団体なんだよ。', img:'/circle/you.jpg'},
        
    ]
        
  })

export const getters = {
    scheduleList(state) {
      return state.schedules
    }
}
  