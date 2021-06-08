<template>
    <div>
        <div id="container">
            <h1>보물찾기</h1>
        </div>
        <button v-on:click="gohide">숨기러 떠나기</button>
        <button v-on:click="gofind">찾으러 떠나기</button>
    </div>
</template>

<script>
export default {
    name: "Home",
    components: {},
    methods: {
        gohide(){
            this.$router.push('/hide')
        },
        gofind(){
            this.$router.push('/find')
        }
    },
    data(){
        return{

        };
    }
};
</script>

<style>


</style>