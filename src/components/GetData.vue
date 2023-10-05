<template>
  <div id="recipeBox">
    <router-link v-for="singlePost in post" :key="singlePost.id" to="'/recipe/'+ singlePost.id">
      <RecipePost :post="singlePost"></RecipePost >
    </router-link>
  </div>

</template>
<script>
import RecipePost from "@/components/RecipePost.vue";

export default {
  components: {RecipePost},
  data() {
    return {
      post: null
    };
  },
  async created() {
    await this.getPosts();
  },
  methods: {
    async getPosts() {
      await fetch('https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes')
          .then(response => response.json())
          .then(data => {
            this.post = data
            console.log(data)
          })
    }
  }
}
</script>
