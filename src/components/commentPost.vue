<template>
  <div>
    <input type="text" v-model="author">
    <textarea v-model="commentText" placeholder="Write your comment"></textarea>
    <button @click="addComment">Add Comment</button>
  </div>

  <div v-for="comment in comments" :key="comment.createdAt">
    <p>{{ comment.name }}</p>
    <p>{{ comment.comment }}</p>
    <p>{{ comment.createdAt }}</p>
  </div>
</template>

<script>
export default {

  data() {
    return {
      author: "",
      commentText: "",
      createdAt: "",
      comments: [],
    }
  },
  props: ['recipeId'],

  created() {
    this.getComments();
  },

  methods: {
    async addComment() {
   
      const comment = {
        comment: this.commentText,
        name: this.author,
      };
      console.log("Adding Comments", comment)
      try {
        await fetch(`https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes/${this.recipeId}/comments`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(comment)
        })
        this.$emit("add-comment", comment);

        this.author = "";
        this.commentText = "";
      } catch (error) {
        console.error("Error Adding comment:", error)
      }
    },

    async getComments() {
      console.log("Fetching Comments")
      try {
        const res = await fetch(`https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes/${this.recipeId}/comments`);
        const data = await res.json();
        // console.log(data)
        this.comments = data;
        console.log(this.comments)
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }
  }


}
</script>

<style scoped></style>