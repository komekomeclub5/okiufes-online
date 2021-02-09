export const state = () =>
  ({
    ctimg:  [
        { src:'/top/ct/0.png', class:'n1',
          style: 'position: absolute; top: 63%; left: 14%; width: 26%; height: auto; box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.2); animation-delay: 0.6s'
        },
        { src:'/top/ct/2.png', class:'n1',
          style:'position: absolute; top: 0; left: 61%; width: 26%; height: auto; box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.2); animation-delay: 1s;'
        },
        { src:'/top/ct/1.png', class:'n1',
          style:'position: absolute; top: 22%; left: 30%; width: 41%; height: auto; box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.2); animation-delay: 0.2s;'
        }
          
      ]
  })

export const getters = {
    ctList(state) {
      return state.ctimg
    }
}
