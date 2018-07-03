<template>
  <div class="col-md-6 col-sm12">
    <div class="card flex-md-row mb-4 box-shadow h-md-250">
      <div class="card-body d-flex flex-column align-items-start">
        <strong class="d-inline-block mb-2 text-primary">Categoria</strong>
        <h3 class="mb-0">
          <a class="text-dark" href="#">Título do post</a>
        </h3>
        <div class="mb-1 text-muted">DD/MM/AAAA</div>
        <p class="card-text mb-auto">Resumo do post Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, saepe.</p>
        <a href="#">Ler mais</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "post-desafio",
  props: ["post"],
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
</style>
