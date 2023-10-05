<template>
  <div class="recipe-post">
    <h2> {{ post.title }}</h2>
    <p> {{ post.description }}</p>
    <img
        src="https://media.istockphoto.com/id/1147544807/sv/vektor/ingen-miniatyr-bild-vektor-grafik.jpg?s=612x612&w=is&k=20&c=878rwM2GRo5W4nV_Nc21FtF26ZlKre6JM0p7e7mSlN0="
        alt="placeholder">
    <p> {{ "Time in minutes: " + post.timeInMins }}</p>
    <p>{{ "Amount of ingredients: " + post.ingredients.length }}</p>

      <button @click="goToRecipeDetail">Go to Recipe</button>

  </div>
</template>

<script>

import {defineComponent} from "vue";

export default defineComponent({
  props: {
    post: Object
  }, methods: {
    goToRecipeDetail() {
      this.$router.push({name: "recipe-detail", params: {id: this.post._id}});
    },
  }
});
</script>
