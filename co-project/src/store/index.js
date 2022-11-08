import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList: [
      {
        title: '아메리카노',
        price: 3000,
        selected: true,
        image: '<https://source.unsplash.com/featured/?americano>'
      },
      {
        title: '라떼',
        price: 4000,
        selected: true,
        image: '<https://source.unsplash.com/featured/?americano>'
      },
      {
        title: '카푸치노',
        price: 4500,
        selected: true,
        image: '<https://source.unsplash.com/featured/?americano>'
      },
    ],
    sizeList: [
      {
        name: 'small',
        price: 500,
        selected: true, //초기값
        
      },
      {
        name: 'medium',
        price: 1000,
        selected: true, //초기값

      },
      {
        name: 'large',
        price: 1000,
        selected: true, //초기값

      },
    ]
  },
  getters: {
  },
  mutations: {
    addOrder: function () {},
    updateMenuList: function () {},
    updateSizeList: function () {},
  },
  actions: {
  },
  modules: {
  }
})