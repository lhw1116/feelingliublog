<template>
    <div class="layout">
        <Layout>
            <Articles>Header</Articles>
            <Layout>
                <Content>Content</Content>
                <Sider hide-trigger>Sider</Sider>
            </Layout>
            <NavFooter>Footer</NavFooter>
        </Layout>
    </div>
</template>

<script>
    import Articles from './../pages/articles'
    import NavFooter from "../components/NavFooter";

export default {
    name:'admin',
    components:{
        Articles,
        NavFooter
    }
}
</script>