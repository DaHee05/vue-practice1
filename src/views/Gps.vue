<template>
    <div id="gps">

        <div v-if="errorStr">
            Sorry, but the following error
            occurred: {{errorStr}}
        </div>
  
        <div v-if="gettingLocation">
            <i>사용자의 위치 정보 가져오는 중</i>
        </div>
  
        <div v-if="location">
            Your location data is {{ location.coords.latitude }}, {{ location.coords.longitude}}
        </div>
    </div>
</template>

<script>
export default {
    el: '#gps',
    data() {
        return {
            location: null,
            gettingLocation : false,
            errorStr: null
        }
    },
    created() {
        if(!("geolocation" in navigator)) {
            this.errorStr = 'Geolocation is not available.';
            return;
        }
        //위치 정보 허가 받기
        this.gettingLocation = true;
         // 위치 받아오기
        navigator.geolocation.getCurrentPosition(pos => {
            this.gettingLocation = false;
            this.location = pos;
        }, err => {
            this.gettingLocation = false;
            this.errorStr = err.message;
        })
    } 
}
</script>

<style>

</style>
