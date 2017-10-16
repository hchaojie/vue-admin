export default {
  items: [
    {
      name: '仪表盘',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      name: '任务管理',
      url: '/tasks',
      icon: 'fa fa-tasks',
      children: [
        {
          name: '任务列表',
          url: '/views/tasks'
        }
      ]
    },
    {
      name: '员工管理',
      url: '/components',
      icon: 'icon-puzzle',
      children: [
        {
          name: '员工列表',
          url: '/components/buttons',
        },
        {
          name: '权限管理',
          url: '/components/social-buttons',
        }
      ]
    },
    {
      name: '客户管理',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: '客户列表',
          url: '/icons/font-awesome',
          icon: 'icon-star'
        },
        {
          name: '合同管理',
          url: '/icons/simple-line-icons',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: '关于',
      url: '/widgets',
      icon: 'icon-info',
      class: 'mt-auto',
      badge: {
        variant: 'secondary',
        text: '4.7'
      }
    },
    {
      name: '设置',
      url: '/widgets',
      icon: 'icon-settings'
    }
  ]
}
