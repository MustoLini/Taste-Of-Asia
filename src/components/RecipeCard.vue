<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    div {
        border-radius: 10px;
        box-shadow: 1rem .8rem 2rem rgb(199, 199, 199);
        max-width: 20rem;
        margin: 2rem auto;
        /* padding: 1rem; */
        transition: all 0.4s ease-in-out;    
        overflow: hidden;
    }
    div:hover {
        transform: translateY(-.6rem);       
    }
</style>