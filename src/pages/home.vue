<template>
    <div>
        <nav-header></nav-header>
        <pic-plug></pic-plug>
        <HomePlug></HomePlug>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import NavHeader from './../components/NavHeader'
    import NavFooter from './../components/NavFooter'
    import PicPlug from "../components/PicPlug";
    import HomePlug from "../components/HomePlug";

    export default {
        name:'nav-home',
        components:{
            PicPlug,
            NavHeader,
            NavFooter,
            HomePlug,
        }
    }
</script>
<style lang="scss">

</style>

