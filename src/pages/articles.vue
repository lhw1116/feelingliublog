<template>
    <div class="container">
        <div class="header-order">
            <Menu mode="horizontal" :theme="theme1" active-name="1">
                <MenuItem name="1">Go基础</MenuItem>
                <MenuItem name="2">Docker系列</MenuItem>
                <MenuItem name="3">计算机网络</MenuItem>
                <MenuItem name="4">Leetcode</MenuItem>
                <Submenu name="5">
                    <template slot="title">更多分类</template>
                    <MenuItem name="3-1">数据结构</MenuItem>
                    <MenuItem name="3-2">Nginx</MenuItem>
                    <MenuItem name="3-3">K8S</MenuItem>
                    <MenuItem name="3-4">Linux</MenuItem>
                </Submenu>
                <MenuItem name="6">关于</MenuItem>
            </Menu>
        </div>
    </div>
</template>
<script>
    export default {
        name:'articles',
    };
</script>
<style lang="scss">
    .container{
    }
</style>
