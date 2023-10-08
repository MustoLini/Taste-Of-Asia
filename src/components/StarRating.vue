<template>
    <div>
        <star-rating @update:rating="setRating" :rating="this.avgRating" active-color="#1C2F2F" :star-size="20"
            :round-start-rating="false">
        </star-rating>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    data() {
        return {
            ratings: [],
            avgRating: 0,
        }
    },
    props: ['id'],
    methods: {
        setRating(rating) {
            this.ratings.push(rating);
            console.log(this.ratings)
            console.log(this.id)
            this.avgRating = this.ratings.reduce((acc, current) => acc + current, 0) / this.ratings.length 

            console.log(this.avgRating)
        }
    },
    computed: {
        calcRating() {
            // return this.ratings.reduce((acc, current) => acc + current, 0)
            return 5;
        }
    },
    components: {
        StarRating
    }
}
</script>

<style  scoped></style>