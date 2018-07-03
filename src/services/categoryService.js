import api from './api';

export default {
    get() {
        return api.get('/categories');
    },
    create(category) {
        return api.post(`/categories`, category);
    },
    delete(slug) {
        return api.delete(`/categories/${slug}`)
    }
}