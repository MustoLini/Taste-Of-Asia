<template>
  <div class="recipe-container">
    <section class="recipe-detail">
      <div class="text">
        <h2>{{ recipe.title }}</h2>
        <div class="summary">
          <div class="recipe-info">
            <i class="material-icons">schedule</i>
            <p>{{ 'Minuter: ' + recipe.timeInMins }}</p>
          </div>
          <div class="recipe-info">
            <i class="material-icons">article</i>
            <p>{{ `Ingredienser: ${recipe.ingredients.length}` }}</p>
          </div>
        </div>
        <p class="description">{{ recipe.description }}</p>
      </div>

      <img :src="recipe.imageUrl" alt="Recipe Image" />
    </section>
    <section class="ingredients-list"></section>
    <section class="recipe-steps">
      <IngredientsList :id="recipe._id"></IngredientsList>
      <Instructions :instructions="recipe.instructions"></Instructions>
    </section>
    <section>
      <StarRating class="star" :id="recipe._id"> </StarRating>
    </section>

    <section>
      <CommentPost :recipe-id="recipe._id"></CommentPost>
    </section>
  </div>
</template>

<script>
import StarRating from '../components/StarRating.vue';
import IngredientsList from '../components/IngredientsList.vue';

import Instructions from '../components/Instructions.vue';
import CommentPost from '@/components/commentPost.vue';

export default {
  data() {
    return {
      recipe: [],
    };
  },
  created() {
    const recipeId = this.$route.params.id;
    this.getRecipe(recipeId);
  },
  methods: {
    async getRecipe(id) {
      const res = await fetch(
        `https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes/${id}`
      );
      const data = await res.json();

      this.recipe = data;
    },
  },

  components: { StarRating, Instructions, CommentPost, IngredientsList },
};
</script>

<style scoped>
.star {
  margin: 2rem 0;
}
.recipe-steps {
  display: flex;
  gap: 1rem;
  margin: 0 30rem;
}

.recipe-info {
  display: flex;
}

.recipe-container {
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.recipe-detail {
  margin: 1rem auto;
  max-width: 40rem;
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
}

h2 {
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 1rem;
}

img {
  max-width: 50%;
}

.summary {
  display: flex;
  padding: 0.3rem 0.6rem;
  background-color: rgba(13, 39, 7, 0.128);
  justify-content: space-between;
  font-size: 0.8rem;
}

.text {
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
}
</style>
