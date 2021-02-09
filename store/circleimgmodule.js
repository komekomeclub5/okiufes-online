export const state = () =>
  ({
    circles:  [
        { src:'/circle/ruel.jpg', class:'n2',
          style: 'position: absolute; top: 0; left: 0; width: 46%; height: 46%; object-fit: cover; box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.2); animation-delay: 0.3s'
        },
        { src:'/circle/kajimaya.jpg', class:'n2',
          style:'position: absolute; top: 0; right: 0; width: 46%; height: 46%; object-fit: cover; box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.2); animation-delay: 0.5s;'
        },
        { src:'/circle/jikko.jpg', class:'n2',
          style:'position: absolute; bottom: 0; right: 0; width: 46%; height: 46%; object-fit: cover; box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.2); animation-delay: 0.8s;'
        },
        { src:'/circle/you.jpg', class:'n2',
          style:'position: absolute; bottom: 0; left: 0; width: 46%; height: 46%; object-fit: cover; box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.2); animation-delay: 0.6s;'
        }
          
      ]
  })

export const getters = {
    circles(state) {
      return state.circles
    }
}
