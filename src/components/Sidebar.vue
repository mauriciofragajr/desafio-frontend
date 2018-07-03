<template>
  <nav class="col-md-3 d-none d-md-block p-4">
    <div class="p-3">
      <h4 class="font-italic">Categorias</h4>
      <ol class="list-unstyled mb-0">
        <li v-for="cat in getCategories" :key="cat._id"><a class="text-muted" href="#">{{cat.name}}</a></li>
      </ol>
    </div>

    <div class="p-3">
      <h4 class="font-italic">Área administrativa</h4>
      <ol class="list-unstyled mb-0">
        <li><a class="text-muted" href="#">Incluir Postagem</a></li>
        <li><a class="text-muted" href="#">Ver postagens</a></li>
      </ol>
    </div>

  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "sidebar-desafio",
  computed: {
    ...mapGetters(["getCategories", "getIsLoading"])
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
