<template>
  <div class="recipe-detail">
    <h2>{{ recipe.title }}</h2>
    <p>{{ recipe.description }}</p>
    <img :src="recipe.imageUrl" alt="Recipe Image"/>
    <p>{{ "Time in minutes: " + recipe.timeInMins }}</p>
    <p>{{ "Amount of ingredients: " + recipe.ingredients.length}}</p>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent(
    {
      data() {
        return {
          recipe: {}
        };
      }, async created() {
        const recipeId = this.$route.params.id;
        console.log(recipeId);
        this.getRecipe(recipeId)

      }, methods: {
        async  getRecipe(id) {
          await fetch(`https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes/${id}`)
              .then((response) => {
                if (!response.ok) {
                  throw new Error('Does not work')
                } else {
                  return response.json();
                }
              })
              .then((data) => {
                this.recipe = data;
              }).catch((error) => {
            console.error('Error fetching recipe data: ', error)
          });
        }
      }

    }
)

</script>

<style scoped>

</style>