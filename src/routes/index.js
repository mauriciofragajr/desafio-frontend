import Home from '../pages/Home';
import PostDetail from '../pages/PostDetail';
import PostsCategory from '../pages/PostsCategory';
import Search from '../pages/Search';
import NotFound from '../pages/NotFound';

import PostForm from '../pages/dashboard/PostForm';
import PostList from '../pages/dashboard/PostList';

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/posts/:slug',
    component: PostDetail
  },
  {
    path: '/categories/:slug',
    component: PostsCategory
  },
  {
    path: '/search',
    component: Search
  },

  // DASHBOARD
  {
    path: '/dashboard',
    component: PostList
  },
  {
    path: '/dashboard/post-form',
    component: PostForm
  },
  {
    path: '/dashboard/post-form/edit/:slug',
    component: PostForm
  },
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/404',
    component: NotFound
  }
]

export default routes;
