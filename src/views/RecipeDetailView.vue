<template>
  <div class="recipe-container">
    <section class="recipe-detail">
      <div class="text">
        <h2>{{ recipe.title }}</h2>
        <div class="summary">
          <div class="recipe-info">
            <i class="material-icons">schedule</i>
            <p>{{ "Minuter: " + recipe.timeInMins }}</p>
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
    <section class="recipe-steps">
      <h3>Steps</h3>
    </section>
    <section>
      <StarRating :id="recipe._id">
      </StarRating>
    </section>

    <section>
      <CommentPost :recipe-id="recipe._id" @comment-added="refreshComments"></CommentPost>

      <div v-for="comment in comments" :key="comment.createdAt">
        <p>{{ comment.author }}</p>
        <p>{{ comment.commentText }}</p>
        <p>{{ comment.createdAt }}</p>
      </div>
    </section>


  </div>
</template>

<script>
import StarRating from '../components/StarRating.vue';
import CommentPost from "@/components/commentPost.vue";
export default {
  data() {
    return {
      recipe: [],
      comments :[]
    };
  },
  created() {
    const recipeId = this.$route.params.id;
    this.getRecipe(recipeId);
  },
  methods: {
    async getRecipe(id) {
      const res = await fetch(`https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes/${id}`);
      const data = await res.json();

      this.recipe = data;
    },
    addComment(comment){
      this.comments.push(comment)
    },
    refreshComments() {
      this.getComments();
    },

  },
  components: { StarRating, CommentPost }
}
</script>


<style scoped>


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
  padding: .3rem .6rem;
  background-color: rgba(13, 39, 7, 0.128);
  justify-content: space-between;
  font-size: .8rem;
}

.text {
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
}

</style>