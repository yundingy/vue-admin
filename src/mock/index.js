import users from './users'

const Mock = require('mockjs')

Mock.setup({
  timeout: 0 - 300
})

Mock.mock('/api/account/info', 'get', {
  'status': 200,
  'body': {
    name: 'vvpvvp',
    desc: '执着于理想，纯粹于当下',
    email: 'HeyUI@some.com',
    org: '某某公司',
    dept: '某某部门',
    title: '前端开发工程师',
    location: '上海市',
    tags: ['善解人意', '开朗乐观', '真诚热情', '心地善良', '谦恭有礼', '彬彬有礼', '虚怀若谷', '严于律己', '雍容大度', '热情洋溢', '从容自若', '诚挚', '温厚', '谦让', '勤恳', '耿直']
  }
})

Mock.mock('/api/dict', 'get', {
  'status': 200,
  'body': [{
    'name': 'simple',
    'data': {
      '1': '苹果',
      '2': '梨子',
      '3': '香蕉',
      '4': '橙子',
      '5': '樱桃'
    }
  }]
})

Mock.mock('/api/login', 'post', {
  'status': 200,
  'body': {
    'value': 'test'
  }
})

Mock.mock('/api/logout', 'post', {
  'status': 200
})

Mock.mock('/api/home/messages', 'get', {
  'status': 200,
  'body': [{
    'id': 1,
    'isReaded': false,
    'title': '任务名称1',
    'description': '你需要在某年某月完成某某任务'
  }, {
    'id': 2,
    'isReaded': false,
    'title': '任务名称2',
    'description': '你需要在某年某月完成某某任务'
  }, {
    'id': 3,
    'isReaded': true,
    'title': '任务名称3',
    'description': '你需要在某年某月完成某某任务'
  }, {
    'id': 4,
    'isReaded': true,
    'title': '任务名称4',
    'description': '你需要在某年某月完成某某任务'
  }, {
    'id': 5,
    'isReaded': true,
    'title': '任务名称5',
    'description': '你需要在某年某月完成某某任务'
  }]
})

Mock.mock('/api/management/users', 'get', { status: 200, body: users })

Mock.mock('/api/management/roles', 'get', {
  'status': 200,
  'body': [{
    id: 1,
    name: '系统管理员',
    description: '最高权限，可操作任何页面和功能'
  }, {
    id: 2,
    name: '普通员工',
    description: '普通员工'
  }, {
    id: 3,
    name: 'Leader',
    description: '可进行团队数据查看，可导出数据'
  }]
})

Mock.mock('/api/user/getMenus', 'post', {
  'status': 200,
  'body': [{
    path: 'Home',
    name: 'Home',
    component: 'home/index',
    meta: { title: '首页', visible: 1, icon: 'icon-monitor' }
  }, {
    path: 'Icons',
    name: 'Icons',
    component: 'icons',
    meta: { title: 'Icons', visible: 1, icon: 'icon-heart' }
  }, {
    path: '/List',
    name: 'tablelist',
    meta: { title: '列表应用', visible: 1, icon: 'icon-grid-2' },
    children: [
      {
        path: '/tablelist/basic',
        name: '/tablelist/basic',
        component: 'table/basic',
        meta: { title: '基础表格', visible: 1, icon: 'h-icon-search' }
      },
      {
        path: '/tablelist/search',
        name: '/tablelist/search',
        component: 'table/search',
        meta: { title: '查询列表', visible: 1, icon: 'h-icon-star' }
      }
    ]
  }, {
    path: '/Form',
    name: 'form',
    meta: { title: '表单应用', visible: 1, icon: 'icon-grid-2' },
    children: [
      {
        path: '/form/basic',
        name: '/form/basic',
        component: 'form/basic',
        meta: { title: '基础表单', visible: 1, icon: 'h-icon-search' }
      },
      {
        path: '/form/upload',
        name: '/form/upload',
        component: 'form/upload',
        meta: { title: '上传表单', visible: 1, icon: 'h-icon-search' }
      }
    ]
  }, {
    path: '/test',
    name: 'test',
    meta: { title: '测试', visible: 1 },
    children: [
      {
        path: '/test/test1',
        name: 'test1',
        component: 'test/test1',
        meta: { title: '测试1', visible: 1, icon: 'h-icon-search' }
      },
      {
        path: '/test/test2',
        name: 'test2',
        component: 'test/test2',
        meta: { title: '测试2', visible: 1, icon: 'h-icon-star' }
      },
      {
        path: 'http://www.baidu.com',
        name: 'test3',
        url: 'http://www.baidu.com',
        meta: { title: '百度', visible: 1, icon: 'h-icon-star' }
      }
    ]
  }]
})
