export const state = () =>
  ({
    items:  [
        { src:'/top/top-group/0.png', class:'n',
          style: 'position: absolute; top: 0; left: 0; width: 26%; height: auto; box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.2); animation-delay: 2.1s'
        },
        { src:'/top/top-group/1.png', class:'n',
          style:'position: absolute; top: 0; left: 29%; width: 26%; height: auto; box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.2); animation-delay: 2.4s;'
        },
        { src:'/top/top-group/2.png', class:'n',
          style:'position: absolute; top: 0; right: 0; width: 41%; height: auto; box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.2); animation-delay: 2.1s;'
        },
        { src:'/top/top-group/3.png', class:'n',
          style:'position: absolute; bottom: 0; right: 0; width: 26%; height: auto; box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.2); animation-delay: 2.2s;'
        },
        { src:'/top/top-group/4.png', class:'n',
          style:' position: absolute; bottom: 0; left: 30%; width: 40%; height: auto; box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.2); animation-delay: 2.5s;'
        },
        { src:'/top/top-group/5.png', class:'n',
          style:' position: absolute; bottom: 0; left: 0; width: 25%; height: auto; box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.2); animation-delay: 2.3s;' 
        },
        { src:'/top/top-group/6.png', class:'n',
          style:'position: absolute; top: 38%; left: 0; width: 18%; height: auto; box-shadow: 0px 10px 10px -5px rgba(0,0,0,0.2); animation-delay: 2s;'
        }
          
      ]
  })

export const getters = {
    itemsList(state) {
      return state.items
    }
}
  