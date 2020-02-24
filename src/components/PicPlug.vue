<template>
    <div class="pic-plug">
        <div class="container">
            <div class="toper"><pre>千 江 有 水 千 江 月 , 万 里 无 云 万 里 天</pre></div>
            <div class="line"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PicPlug"
    }
</script>

<style lang="scss">
    .pic-plug{
        height: 380px;
        //background: url("./../assets/background.jpg") repeat center;
        background-image: url("./../assets/background.jpg");
        background-size: cover;
        display:flex;
        justify-content:center;
        align-items:center;
        .container{
            display: inline-block;
            font-size: 36px;
            color: #F5F5F5;
            .line{
                width: 800px;
                height: 1px;
                background: #F5F5F5;
            }
        }

    }
</style>