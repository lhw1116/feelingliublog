<template>
    <div class="header">
        <div class="container">
            <div class="blog-title">
                <a href="www.baidu.com">长情驿站</a>
            </div>
            <div class="header-search">
                <Input search placeholder="search..." />
            </div>
            <div class="blog-order">
                <Menu mode="horizontal" active-name="1">
                    <MenuItem name="1">首页</MenuItem>
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
    </div>
</template>
<script>
    export default {
        name:'nav-header',
    }
</script>

<style lang="scss">
    .header{
        height: 55px;
        border-bottom: #e5e5e5 solid 1px;
        background: #fff;
        padding-right: 5000px;
        padding-left: 200px;
        position: fixed;
        .container{
            height: 50px;
            width: 1440px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .blog-order{
                margin-left: 500px;
            }
            .blog-title{
                a{
                    font-size: 20px;
                    font-weight: bold;
                    color: #333333;
                }
            }
        }
    }
</style>