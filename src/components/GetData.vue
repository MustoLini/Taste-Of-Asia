<template>
  <div id="recipeBox" v-for="singlePost in post" :key="singlePost.id">
    <h2> {{ singlePost.title }}</h2>
    <p> {{singlePost.description}}</p>
    <p> {{singlePost.timeInMins}}</p>
    <p>{{singlePost.ingredients.length}}</p>
  </div>

</template>
<script>
export default {
  data() {
    return {
      post: null
    };
  },
  async created() {
    await this.getPosts();
  },
  methods: {
    async getPosts() {
      await fetch('https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes')
          .then(response => response.json())
          .then(data => {
            this.post = data
            console.log(data)
          })
    }
  }
}
</script>
