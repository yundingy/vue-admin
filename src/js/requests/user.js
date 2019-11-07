import Ajax from 'js/common/ajax'

const user = {
  getMenu() {
    return Ajax.post('/user/getMenus')
  }
}

export default user
