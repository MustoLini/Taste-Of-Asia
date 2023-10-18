<template>
    <div class="main-container">
        <h3>Instruktioner</h3>
        <div v-for="i in instructions" class="instruction-card">
            <i class="material-icons">done</i>
            <p>{{ i }} </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['instructions'],
    data() {
        return {
            instruction: this.instructions,
        }
    },
    created() {
        console.log(this.instruction)
    }
}
</script>

<style scoped>
h2 {
    margin-bottom: .5rem;
}

.instruction-card {
    display: flex;
    padding: .2rem .6rem;
    box-shadow: .1rem .2rem .3rem rgb(199, 199, 199);
    border-radius: 5px;
    display: flex;
    gap: .4rem
}

.main-container {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin-bottom: 2rem;
}
</style>