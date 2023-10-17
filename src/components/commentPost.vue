<template>
  <div>
    <input type="text" v-model="author" placeholder="Author">
    <input v-model="commentText" placeholder="Write your comment">
    <button @click="addComment" :disabled="isSubmitDisabled">Add Comment</button>
    <p v-if="showThankYouMessage" class="comment-box">Thank you for your comment!</p>
  </div>


  <div v-for="comment in comments" :key="comment.createdAt" class="comment-box">
    <p class="name">Name: {{ comment.name }}</p>
    <p class="comment">Comment: {{ comment.comment }}</p>
    <p class="time">Time: {{ comment.createdAt }}</p>
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
      validationError: "",
      showThankYouMessage: false,
    }
  },
  props: ['recipeId'],

  created() {
    this.getComments();
  }, computed: {
    isSubmitDisabled() {
      return !this.author.trim() || !this.commentText.trim()
    }

  },

  methods: {
    async addComment() {
      if (!this.author || !this.commentText) {
        this.validationError = "Both author and comment text are required";
        return;
      }
      this.validationError = "";

      const comment = {
        comment: this.commentText,
        name: this.author,
      };
      this.author = "";
      this.commentText = "";
      try {
        await fetch(`https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes/${this.recipeId}/comments`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(comment)
        })
        this.$emit("add-comment", comment);
        this.showThankYouMessage = true;
        this.getComments();


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

<style scoped>

.comment-box {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
}

.comment-box .name,
.comment-box .comment,
.comment-box .time {
  margin: 0.5rem 0;
}
</style>