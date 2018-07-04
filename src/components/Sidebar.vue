<template>
  <nav class="col-md-3 d-none d-md-block p-4">
    <div class="p-3">
      <h4 class="font-italic">Categorias</h4>
      <ol class="list-unstyled mb-0">
        <li v-for="cat in getCategories" :key="cat._id"><a class="text-muted" :href="'/categories/' + cat.slug">{{cat.name}}</a></li>
      </ol>
    </div>

    <div class="p-3" v-if="getAdminMode">
      <h4 class="font-italic">Área administrativa</h4>
      <ol class="list-unstyled mb-0">
        <li><router-link class="text-muted" :to="{ path: '/dashboard/post-form'}">Incluir Postagem</router-link></li>
        <li><router-link class="text-muted" :to="{ path: '/dashboard'}">Ver postagens</router-link></li>
      </ol>
    </div>

  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "sidebar-desafio",
  computed: {
    ...mapGetters(["getCategories", "getIsLoading","getAdminMode"])
  },
  data() {
    return {};
  },
  methods: {
    reload() {
      this.$router.reload();
    }
  }
};
</script>

<style>
</style>
