import Vue from 'vue'
import VueRouter from 'vue-router'
import PostList from '@/components/PostList'
import Article from '@/components/Article'
import UserInfo from '@/components/UserInfo'

Vue.use(VueRouter)

const routes = [
  {
    name: 'root',
    path: '/',
    components: {
      main: PostList
    }
  },
  {
    name: 'post_content',
    path: '/topic/:id&author=:name',
    components: {
      main: Article
    }
  },
  {
    name: 'user_info',
    path: '/userinfo/:name',
    components: {
      main: UserInfo
    }
  }

]

const router = new VueRouter({
  routes
})

export default router
