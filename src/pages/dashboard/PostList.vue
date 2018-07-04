<template>
  <div>
    <h3>Postagens</h3>
		<table class="table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">Título</th>
          <th scope="col">Criado em</th>
          <th scope="col">Atualizado em</th>
          <th scope="col">Slug</th>
          <th scope="col">Ação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post._id">
          <td>{{post.title}}</td>
          <td>{{post.createdAt | formatDate}}</td>
          <td>{{post.updatedAt | formatDate}}</td>
          <td>{{post.slug}}</td>
          <td><router-link :to="{ path: '/dashboard/post-form/edit/' + post.slug }">Editar</router-link> - <a href="#" @click="deletePost(post.slug)">Excluir</a></td>
        </tr>
      </tbody>
    </table>
 
    <nav>
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{'disabled': !prevPage}">
          <a class="page-link" href="#" v-on:click="fetchPosts(prevPage)">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item" :class="{'disabled': !nextPage}">
          <a class="page-link" href="#" v-on:click="fetchPosts(nextPage)">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
    <p>TOTAL: {{totalResults}}</p>
	</div>
</template>

<script>
import postService from "../../services/postService";

export default {
  name: "posts-list-desafio",
  components: {},
  data() {
    return {
      posts: [],
      page: 1,
      nextPage: null,
      prevPage: null,
      totalResults: 0
    };
  },
  created: function() {
    this.page = this.$route.query.page ? this.$route.query.page : 1;
    this.fetchPosts(this.page);
  },
  methods: {
    fetchPosts(page) {
      this.page = page;
      postService
        .get(this.page)
        .then(response => {
          this.posts = response.data.posts;
          this.nextPage = response.data.nextPage;
          this.prevPage = response.data.prevPage;
          this.totalResults = response.data.total;
        })
        .catch(err => console.log(err));
    },
    deletePost(slug) {
      postService
        .delete(slug)
        .then(response => {
          this.fetchPosts(this.page);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
</style>
