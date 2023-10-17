<template>
    <div class="ingredients-container"> 
          <h3>Ingredienser</h3>
          <div v-for="ingredient in recipe.ingredients" class="ingredients-card">
            <p>{{ ingredient.amount + " " + ingredient.unit + " "+ ingredient.name}}</p> 
        </div> 
    </div>
</template>
<script>
export default {
  data() {
    return {
      recipe: {
        ingredients: [],
      }
    };
  },
  props: ['id'],
 created() {
   this.getRecipe();
  },
  methods: {
    async getRecipe() {
      const res = await fetch(`https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes/${this.id}`);
      const data = await res.json();
      console.log(data); 
      this.recipe = data;
      
    },
  }
}
</script>
<style scoped>
h2 {
  margin-bottom: .5rem;
}

.instruction-card {
  display: flex;
  padding: .2rem .6rem;
  box-shadow: .1rem .2rem .3rem rgb(199, 199, 199);
  border-radius: 5px;
  display: flex;
  gap: .4rem
}

.ingredients-container{
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin-bottom: 2rem;
}


</style>