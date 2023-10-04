<template>
  <div class="recipe-post">
    <h2> {{ post.title }}</h2>
    <p> {{post.description}}</p>
    <p> {{post.timeInMins}}</p>
    <p>{{post.ingredients.length}}</p>
  </div>
</template>

<script>
export default {
  props:{
    post: Object
  }

}
</script>
