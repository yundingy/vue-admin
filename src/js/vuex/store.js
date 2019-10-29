import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    User: {},
    msgCount: {
      messages: 2
    },
    menu: [],
    siderCollapsed: false
  },
  mutations: {
    updateAccount(state, data) {
      state.User = data
    },
    updateSiderCollapse(state, isShow) {
      setTimeout(() => {
        G.trigger('page_resize')
      }, 600)
      state.siderCollapsed = isShow
    },
    updateMsgCount(state, data) {
      state.msgCount = data
    },
    updateMenu(state, data) {
      state.menu = data
    }
  },
  actions: {
    updateAccount(context, data) {
      context.commit('updateAccount', data)
    },
    updateSiderCollapse(context, data) {
      context.commit('updateSiderCollapse', data)
    },
    updateMsgCount(context, data) {
      context.commit('updateMsgCount', data)
    },
    updateMenu(context, data) {
      context.commit('updateMenu', data)
    }
  },
  getters: {
    account: state => {
      return state.User
    },
    siderCollapsed: state => {
      return state.siderCollapsed
    },
    msgCount: state => {
      return state.msgCount
    },
    menu: state => {
      return state.menu
    }
  }
})
