<template>
    <div>
        <p>숨길 장소는?</p>
        <Camera></Camera>
        <button v-on:click="gohome">홈으로 돌아가기</button>
        <Gps></Gps>
    </div>
</template>

<script>
import Camera from '../views/Camera.vue'
import Gps from '../views/Gps.vue'

export default {
    name: "Hide",
    components: {
        'Gps': Gps,
        'Camera': Camera
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
body {
    text-align: center;
}

</style>