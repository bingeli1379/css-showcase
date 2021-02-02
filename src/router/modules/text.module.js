import Layout from '@/layout'

const textRouter = {
  path: '/text',
  component: Layout,
  children: [
    {
      path: 'hollow',
      component: () => import(/* webpackChunkName: "about" */ '@/views/text/hollow.vue'),
      name: 'Hollow'
    }
  ]
}

export default textRouter
