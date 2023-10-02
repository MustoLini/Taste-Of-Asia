<template>
  <h2> {{post.title}}</h2>

</template>
<script>
export default{
  data(){
    return{
      post: {}
    }
  },
  methods:{
    getPosts(){
      fetch('https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes')
          .then(response => response.json())
          .then(data=>this.post=data)
    }
  }
}
</script>
