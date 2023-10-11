<template>
    <div>
        <p v-if="voted">Tack för rösten!</p>
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
            avgRating: 0,
            voted: false,
        }
    },
    props: ['id'],
    methods: {
        setRating(rating) {

            if (!this.voted) {
                fetch(`https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes/${this.id}/ratings`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify({
                        rating: rating,
                    })
                })
                this.voted = true
            }

        },
        async getRating() {
            const res = await fetch(`https://jau22-recept-grupp4-xzvarhmra742.reky.se/recipes/${this.id}`)
            const data = await res.json();

            const roundedAvgRating = +data.avgRating.toFixed(2)
            console.log(roundedAvgRating)
    
            this.avgRating = roundedAvgRating;
        }
    },
    created() {
        this.getRating()
    },
    components: {
        StarRating
    }
}
</script>

<style  scoped></style>