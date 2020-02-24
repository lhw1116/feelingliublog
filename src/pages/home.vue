<template>
    <div>
        <nav-header></nav-header>
        <PicPlug></PicPlug>
        <div class="home"></div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import NavHeader from './../components/NavHeader'
    import NavFooter from './../components/NavFooter'
    import PicPlug from './../components/PicPlug'

    export default {
        name:'nav-home',
        components:{
            NavHeader,
            PicPlug,
            NavFooter,
        }
    }
</script>
<style lang="scss">
    .home{
        display: inline-block;
        height: 1864px;
    }
</style>

