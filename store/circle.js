export const state = () =>
  ({
    circles: [
        
            {circle: 'You.aka.peace', event:'今回こういうことする団体なんだよ。', img:'/circle/you.png'},
            {circle: '団体名', event:'今回こういうことする団体なんだよ。', img:'/circle/jikko.png'},
            {circle: 'Ruel', event:'今回こういうことする団体なんだよ。', img:'/circle/ruel.png'},
            {circle: '琉球風車', event:'今回こういうことする団体なんだよ。', img:'/circle/kajimaya.png'},

    ]
        
  })

export const getters = {
    scheduleList(state) {
      return state.circles
    }
}
  