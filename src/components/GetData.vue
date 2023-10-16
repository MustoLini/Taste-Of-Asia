<template>
  <div id="recipeBox" class="d-flex justify-center mb-6">
    <div v-if="post">
      <RecipePost v-for="singlePost in post"
                  :key="singlePost.id"
                  :post="singlePost"
      ></RecipePost >
    </div>
    <div v-else>
        Loading..
    </div>
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
<style>
#recipebox{
  display: grid;
grid-template-rows: repeat(auto-fill,minmax(250px,1fr));
}


</style>
