<template>
  <h2 v-if="post"> {{post.title}}</h2>
</template>
<script>
export default{
  data(){
    return{
      post: null
    };
  },
  created() {
    this.getPosts();
  },
  methods:{
    getPosts(){
      fetch('https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes')
          .then(response => response.json())
          .then(data=>{
            this.post=data
            console.log(data)
          })
    }
  }
}
</script>
