<template>
  <div id="recipeBox">
    <div v-if="filteredPost">
      <RecipePost v-for="singlePost in filteredPost"
                  :key="singlePost.id"
                  :post="singlePost"
      ></RecipePost >
    </div>
    <div v-else-if="post">
        <RecipePost v-for="singlePost in post" :key="singlePost.id" :post="singlePost"></RecipePost>
    </div>
    <div v-else>Loading..</div>
  </div>

</template>
<script>
import RecipePost from "@/components/RecipePost.vue";

export default {
  components: {RecipePost},
  data() {
    return {
      post: null,
    };
  },
  async created() {
    await this.getPosts();
  },computed:{
    filteredPost(){
      if (!this.post) return null;
      return this.post.filter((recipe) => {
        const searchQuery = this.$route.query.search || "";
        const title = recipe.title.toLowerCase();
        const description = recipe.description.toLowerCase();
        return title.includes(searchQuery) || description.includes(searchQuery);
      });
    }

  }
,
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
