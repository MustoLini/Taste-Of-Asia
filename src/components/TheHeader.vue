<template>
    <div class="main">
        <nav>
            <RouterLink to="/"><img src="../assets/img/logo/taste-of-asia-logo-300x200.png" alt=""></RouterLink>
            <div>
                <input type="text" placeholder="Sök recept..." v-model="searchInput" @keydown.enter="searchRecipes">
            </div>
            <div class="categories">
                <RouterLink to="/category/vietnamesiskt">Vietnamesiskt</RouterLink>
                <RouterLink to="/category/koreanskt">Koreanskt</RouterLink>
                <RouterLink to="/category/japansk">Japansk</RouterLink>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchInput: '',
        }
    },
    methods: {
        async searchRecipes() {
            this.$router.push(`/search/${this.searchInput}`)
            this.searchInput = '';
        }    
    }
}
</script>

<style scoped>

.router-link-active {
    font-weight: 700;
    color: #d7cba8;
}

img {
    width: 90%;
}

.categories {
    display: flex;
    justify-content: space-between;
    gap: .5rem;
}

a {
    text-decoration: none;
    color: #a8914a;
    font-size: 1rem;
    width: max-content;
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;
}

input {
    border-radius: 10px;
    border: none;
    padding: .3rem 1rem;

}

.main {
    padding: 1rem;
    background-image: linear-gradient(to bottom right, #1C2F2F, #475f5f);
    box-shadow: 0rem 0.5rem 1rem rgb(221, 221, 221);
}
</style>