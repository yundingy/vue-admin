import Ajax from './ajax'
import user from './requests/user'

const Request = {
  User: {
    info() {
      return Ajax.get('/account/info')
    }
  },
  Dict: {
    get() {
      return Ajax.get(`/dict`)
    }
  },
  Home: {
    getMessageList() {
      return Ajax.get(`/home/messages`)
    }
  },
  Account: {
    menus() {
    }
  },
  Login: {
    login(param) {
      return Ajax.postJson('/login', param)
    },
    logout(param) {
      return Ajax.post('/logout', param)
    }
  },
  Management: {
    users(params) {
      return Ajax.get('/management/users', params)
    },
    roles(params) {
      return Ajax.get('/management/roles', params)
    }
  },
  user
}

export default Request
