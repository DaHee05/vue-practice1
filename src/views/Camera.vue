<template>
    <div class="camera">
        <video autoplay class="feed"></video>
        <button class="snap">SNAP</button>
    </div>
</template>

<script>
export default {
    name: 'camera',
    methods: {
        init() {
            if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices){
                navigator.mediaDevices.getUserMedia({video:true}).then(stream => {
                    const videoPlayer = document.querySelector("video");
                    videoPlayer.srcObject = stream;
                    videoPlayer.play();
                });
            } else {
                alert("cannot get media devices");
            }
        }
    },
    beforeMount(){
        this.init();
    }
}
</script>

<style lang="scss" scoped>
.camera {
    width: 100%; height:100%; padding: 25px; box-sizing: border-box; margin: 0px auto;
    }
.feed {
    display: block;
    width: 100%;
    max-width: 1280px;

    margin: 0 auto;

    background-color: #171717;
    box-shadow: 6px 6px 12px 0px rgba(0,0,0,0.35);
}
.snap {
    display: block; width: 75px; height: 75px; border-radius: 50%;
    margin: 10px auto;
    background-color: transparentize($color: #466445, $amount: 0.5);
    border-radius: 1px solid #000000;
    outline: none; cursor: pointer;
}

</style>