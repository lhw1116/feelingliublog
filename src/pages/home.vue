<template>
    <div>
        <nav-header></nav-header>
        <div class="home"></div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import NavHeader from './../components/NavHeader'
    import NavFooter from './../components/NavFooter'

    export default {
        name:'nav-home',
        components:{
            NavHeader,
            // eslint-disable-next-line vue/no-unused-components
            NavFooter,
        }
    }
</script>
<style lang="scss">
    .home{
        display: inline-block;
        height: 864px;
    }
</style>

