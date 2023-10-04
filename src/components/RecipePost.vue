<template>
  <div class="recipe-post">
    <h2> {{ post.title }}</h2>
    <p> {{post.description}}</p>
    <p> {{post.timeInMins}}</p>
    <p>{{post.ingredients.length}}</p>
    <router-link to="'/recipe/' + post.id">
      <button>Go to Recipe</button>
    </router-link>
  </div>
</template>

<script>
export default {
  props:{
    post: Object
  }

}
</script>
