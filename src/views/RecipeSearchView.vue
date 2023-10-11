<template>
  <div>
    <!-- Your HTML template goes here -->
    <ul>
      <li v-for="post in filteredPost" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
import RecipeCard from "@/components/RecipeCard.vue";

export default {
  data() {
    return {
      posts: [],
      searchQuery: ""

    };
  },
  created() {
    this.getPosts();
  },
  methods: {
    handleSearch() {
      this.$emit("search", this.searchQuery);
    },
    filteredPost() {
      if (!this.posts) return [];

      const searchQuery = this.searchQuery.toLowerCase();

      return this.posts.filter((recipe) => {
        const title = recipe.title.toLowerCase();
        console.log(title.includes(searchQuery))
        return title.includes(searchQuery)
      });
    },
    async getPosts() {
      try {
        const response = await fetch('https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes');
        const data = await response.json();
        this.posts = data;
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
  }, components: {
    RecipeCard
  }
};
</script>

<style scoped>
.rating {
  padding: 0.2rem 1rem
}

.recipe-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.4rem;
  background-color: rgba(13, 39, 7, 0.128);
}

.recipe-info {
  display: flex;
  align-items: center;
}

img {
  max-width: 100%;
}

h1 {
  text-align: center;
}

h2 {
  font-size: 1rem;
  font-weight: 500;
  padding: 0.3rem 1.2rem;
}
</style>