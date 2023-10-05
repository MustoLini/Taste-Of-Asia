<template>
  <div class="recipe-detail">
    <h2>{{recipe.title}}</h2>
    <p>{{recipe.description}}</p>
    <img src="recipe.imageUrl" alt="Recipe Image" />
    <p>{{"Time in minutes: " + recipe.timeInMins}}</p>
    <p>{{"Amount of ingredients: " + recipe.ingredients.length}}</p>
  </div>
</template>

<script>
export default
{
  data(){
    return{
      recipe:null
    };
  },created() {
    const recipeId = this.$route.params.id;
    // Example: Fetch the recipe data from an API
    // Replace this with your actual API endpoint
    fetch(`/api/recipes/${recipeId}`)
        .then((response) => response.json())
        .then((data) => {
          this.recipe = data;
        });
  },
}
</script>

<style scoped>

</style>