<template>
  <header>
    <div class="collapse bg-dark" id="navbarHeader">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-md-7 py-4">
            <h4 class="text-white">Sobre</h4>
            <p class="text-muted">Desafio para Invasão Nerd.</p>
          </div>
           <div class="nav-scroller py-1 mb-2">
            <nav class="nav d-flex justify-content-between d-none d-sm-block d-md-none">
              <a class="p-2 text-muted" href="#">Categoria</a>
              <a class="p-2 text-muted" href="#">Categoria</a>
              <a class="p-2 text-muted" href="#">Categoria</a>
              <a class="p-2 text-muted" href="#">Categoria</a>
              <a class="p-2 text-muted" href="#">Categoria</a>
              <a class="p-2 text-muted" href="#">Categoria</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar navbar-dark bg-dark flex-md-nowrap p-0 shadow">
      <a href="#" class="navbar-brand col-sm-3 col-md-2 mr-0 titulo-desafio">
        <strong>Invasão Nerd</strong>
      </a>
      <input class="form-control form-control-dark w-100 input-desafio" type="text" placeholder="Pesquisar" aria-label="Pesquisar">
      <button class="navbar-toggler text-nowrap" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "header-desafio",
  data() {
    return {};
  }
};
</script>

<style>
/*
 * Navbar
 */

.titulo-desafio {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: 1rem;
  /* Fundo mais escuro */
  background-color: rgba(0, 0, 0, .25);
}

.navbar .form-control {
  padding: .75rem 1rem;
  border-width: 0;
  border-radius: 0;
}

.input-desafio {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.input-desafio:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.nav-scroller .nav-link {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: .875rem;
}

</style>
