import Home from '../pages/Home';
import PostDetail from '../pages/PostDetail';
import PostsCategory from '../pages/PostsCategory';
import Search from '../pages/Search';
import NotFound from '../pages/NotFound';

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/post-detail/:post-slug',
    component: PostDetail
  },
  {
    path: '/posts-category/:category-slug',
    component: PostsCategory
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '*',
    component: NotFound
  }
]

export default routes;