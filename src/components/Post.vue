<template>
  <div class="col-md-6 col-sm12">
    <div class="card flex-md-row mb-4 box-shadow h-md-250">
      <div class="card-body d-flex flex-column align-items-start">
        <!-- <span class="text-primary" v-for="cat in post.categories" :key="cat._id">{{cat.name}}</span> -->
        <h3 class="mb-0">
          <router-link class="text-dark" :to="{ path: '/posts/' + post.slug }">{{post.title}}</router-link>
        </h3>
        <div class="mb-1 text-muted">{{post.createdAt | formatDate}}</div>
        <p class="card-text mb-auto" v-html="post.body"></p>
        <router-link :to="{ path: '/posts/' + post.slug }">Ler mais</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "post-desafio",
  props: ["post"],
  data() {
    return {};
  }
};
</script>

<style>
</style>
