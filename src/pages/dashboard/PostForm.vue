<template>
  <div>
		<h2>{{mode == "NEW" ? "Novo Post" : "Editar Post"}}</h2>
    <form v-on:submit.prevent="savePost">
      <div class="row">
        <div class="col-8">
          <div class="col-12 mb-3">
            <label for="title">Título</label>
            <input type="text" class="form-control" v-model="newPost.title" id="title" placeholder="Título" required>
            <div class="invalid-feedback">
              Por favor, digite um título.
            </div>
          </div>
          <div class="col-12 mb-3">
            <label for="slug">Slug</label>
            <!-- <input type="text" class="form-control" v-model.trim="newPost.slug" @keyup="toLowerCase" pattern="[a-z0-9\-]+" id="slug" placeholder="Slug" required> -->
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon3">https://blog.com/posts/</span>
              </div>
              <input type="text" class="form-control" v-model.trim="newPost.slug" @keyup="toLowerCase" pattern="[a-z0-9\-]+" id="slug" placeholder="Slug" required>
            </div>
            <div class="invalid-feedback">
              Por favor, digite um slug.
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="col-12 mb-3">
            <label for="slug">Selecionar Categorias</label>
            <div class="custom-control custom-checkbox" v-for="cat in getCategories" :key="cat._id">
              <input type="checkbox" class="custom-control-input" v-model="newPost.categories" :id="cat.slug" :value="cat._id">
              <label class="custom-control-label" :for="cat.slug">{{cat.name}}</label>
            </div>
            <div>
              <a href="#" v-on:click="createCategory = !createCategory" class="mb-1">+ Criar Categoria</a>
            </div>
            <div class="row" v-if="createCategory">
              <div class="col-12 mb-3">
                <form v-on:submit.prevent="saveCategory">
                  <input type="text" class="form-control mb-1" v-model.trim="newCategory.name" id="categoryName" placeholder="Nome" required>
                  <input type="text" class="form-control mb-1" v-model.trim="newCategory.slug" id="categorySlug" @keyup="toLowerCase" pattern="[a-z0-9\-]+" placeholder="Slug" required>
                  <div class="alert alert-danger" role="alert" v-if="errSlugCategory">Slug já existe</div>  
                  <button type="submit" class="btn btn-primary">Incluir</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <div class="col-12 mb-3">
            <label for="body">Conteúdo</label>
            <vue-editor v-model="newPost.body" id="body" required></vue-editor>
          </div>
        </div>
         <div class="col-12">
           <div class="col-12 mb-3">
             <div class="alert alert-danger" role="alert" v-if="errSlug">Slug já existe</div>  
            <button type="submit" class="btn btn-primary">Salvar</button>
            <button type="button" class="btn btn-light" v-on:click="$router.go(-1)">Cancelar</button>
           </div>
         </div>
      </div>
      
    </form>

	</div>
</template>

<script>
import NotFound from "../NotFound";
import { VueEditor } from "vue2-editor";
import { mapGetters, mapActions } from "vuex";
import categoryService from "../../services/categoryService";
import postService from "../../services/postService";

export default {
  name: "posts-form-desafio",
  components: {
    VueEditor
  },
  computed: {
    ...mapGetters(["getCategories", "getIsLoading"])
  },
  created: function() {
    this.slug = this.$route.params.slug;
    if (this.slug) {
      this.mode = "EDIT";
      postService
        .getDetail(this.slug)
        .then(response => {
          console.log("details", response);
          if (response.data.post) {
            this.newPost = response.data.post;
            this.newPost.categories = this.newPost.categories.map(c => c._id);
          } else {
            // this.$router.replace(NotFound);
            this.$router.push("/404");
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.mode = "NEW";
    }
  },
  data() {
    return {
      mode: "NEW",
      slug: "",
      newPost: {
        title: "",
        body: "",
        categories: [],
        slug: ""
      },
      newCategory: {
        name: "",
        slug: ""
      },
      createCategory: false,
      errSlug: null,
      errSlugCategory: null
    };
  },
  methods: {
    saveCategory() {
      this.errSlugCategory = false;
      categoryService
        .create(this.newCategory)
        .then(data => {
          this.newCategory.name = "";
          this.newCategory.slug = "";

          console.log(data);
          this.fetchCategories();
        })
        .catch(err => {
          console.log(err);
          if (err.response.status == 409) {
            this.errSlugCategory = true;
          }
        });
    },
    savePost() {
      if (this.mode == "NEW") {
        postService
          .create(this.newPost)
          .then(data => {
            console.log(data);
            this.$router.push("/dashboard");
          })
          .catch(err => {
            console.log(err);
            if (err.response.status == 409) {
              this.errSlug = true;
            }
          });
      } else if (this.mode == "EDIT") {
        postService
          .update(this.newPost, this.slug)
          .then(data => {
            console.log(data);
            this.$router.push("/dashboard");
          })
          .catch(err => {
            console.log(err);
            if (err.response.status == 409) {
              this.errSlug = true;
            }
          });
      }
    },
    toLowerCase() {
      this.newCategory.slug = this.newCategory.slug.toLowerCase();
      this.newPost.slug = this.newPost.slug.toLowerCase();
    },
    ...mapActions(["fetchCategories"])
  }
};
</script>

<style>
</style>
