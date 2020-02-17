<template>
    <div>
        <nav-header></nav-header>
        <router-view></router-view>
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

