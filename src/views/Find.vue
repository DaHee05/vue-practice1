<template>
    <div>
        <button v-on:click="gohome">홈으로 돌아가기</button>
    </div>
</template>

<script>
export default {
    name: "Fide",
    components: {
        
    },
    methods: {
        gohome(){
            this.$router.push('/')
        }
    },
    data(){
        return{

        };
    }
}

</script>

<style>

</style>