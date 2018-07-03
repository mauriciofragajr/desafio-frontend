import api from './api';

export default {
    get(page = 1, q = null) {
        return api.get(`/posts?page=${page}${q ? '&q=' + q : ''}`);
    },
    getDetail(slug) {
        return api.get(`/posts/${slug}`);
    },
    getByCategory(category_slug, page = 1) {
        return api.get(`/posts/categories/${category_slug}?page=${page}`);
    },
    create(post) {
        return api.post(`/posts`, post);
    },
    update(post) {
        return api.delete(`/posts/${post.slug}`, post);
    },
    delete(post_slug) {
        return api.delete(`/posts/${post_slug}`);
    }
}