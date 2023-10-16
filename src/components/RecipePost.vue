<template>
  <RecipeCard class="test">
    <RouterLink :to="`/recipe-detail/${post._id}` ">
    <div class="recipe-post">
      <img
        :src="post.imageUrl"
        alt="placeholder">
      <h2> {{ post.title }}</h2>
      <!-- Remove this when rating logic is in place -->
      <StarRating :id="post._id" class="star-rating"/>
      <div class="recipe-summary">
        <div class="recipe-info">
          <i class="material-icons">schedule</i>
          <p>{{ `${post.timeInMins} Minutes` }}</p>
        </div>
        <div class="recipe-info">
          <i class="material-icons">article</i>
          <p>{{ "Ingredients: " + post.ingredients.length }}</p>
        </div>
      </div>
      <!-- <button @click="goToRecipeDetail">Go to Recipe</button> -->
    </div>
  </RouterLink>
  </RecipeCard>
</template>

<script>

import { defineComponent } from "vue";
import RecipeCard from "./RecipeCard.vue";
import StarRating from "./StarRating.vue";
import {RouterLink} from 'vue-router';

export default defineComponent({
  data() {
    return {
      rating: 5,
    }
  },
  props: {
    post: Object
  }, methods: {
    goToRecipeDetail() {
      this.$router.push({ name: "recipe-detail", params: { id: this.post._id } });
    },
  },
  components: {
    RecipeCard,
    StarRating
  }
});
</script>

<style scoped>
.rating {
  padding: 0.2rem 1rem
}
.recipe-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.4rem;
  background-color: rgba(13, 39, 7, 0.128);
}
.recipe-info {
  display: flex;
  align-items: center;
}
img {
  max-width: 100%;
}
h2 {
  font-size: 1rem;
  font-weight: 500;
  /* margin-bottom: 1rem; */
  padding: 0.3rem 1.2rem;
}

.star-rating {
  padding: 0 1rem;

}

a {
  text-decoration: none;
  color: inherit;
}


</style>
