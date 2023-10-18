<template>
  <div class="ingredients-container">
    <h3>Ingredienser</h3>
    <div v-for="ingredient in recipe.ingredients" class="ingredients-card">
      <p>
        {{ ingredient.amount + ' ' + ingredient.unit + ' ' + ingredient.name }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      recipe: {
        ingredients: [],
      },
    };
  },
  props: ['id'],
  created() {
    this.getRecipe();
  },
  methods: {
    async getRecipe() {
      const res = await fetch(
        `https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes/${this.id}`
      );
      const data = await res.json();
      console.log(data);
      this.recipe = data;
    },
  },
};
</script>
<style scoped>
h2 {
  margin-bottom: 0.5rem;
}

.ingredients-card {
  display: flex;
  padding: 0.2rem 0.6rem;
  box-shadow: 0.1rem 0.2rem 0.3rem rgb(199, 199, 199);
  border-radius: 5px;
  display: flex;
  gap: 1rem;
}

.ingredients-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}
</style>
